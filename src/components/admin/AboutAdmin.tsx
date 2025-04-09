
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash, Plus, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useSiteContext } from "@/contexts/SiteContext";

const AboutAdmin = () => {
  const { toast } = useToast();
  const { aboutContent, updateAboutContent } = useSiteContext();
  
  const [intro, setIntro] = useState(aboutContent.intro);
  const [belief, setBelief] = useState(aboutContent.belief);
  const [stats, setStats] = useState(aboutContent.stats);

  // Update local state when context changes (e.g., from another component)
  useEffect(() => {
    setIntro(aboutContent.intro);
    setBelief(aboutContent.belief);
    setStats(aboutContent.stats);
  }, [aboutContent]);

  const handleStatChange = (id: number, field: "value" | "label", value: string) => {
    setStats(stats.map(stat => 
      stat.id === id ? { ...stat, [field]: value } : stat
    ));
  };

  const addStat = () => {
    const newId = stats.length > 0 ? Math.max(...stats.map(s => s.id)) + 1 : 1;
    setStats([...stats, { id: newId, value: "", label: "" }]);
  };

  const removeStat = (id: number) => {
    setStats(stats.filter(stat => stat.id !== id));
  };

  const handleSave = () => {
    // Update the context, which will also update localStorage
    updateAboutContent({
      intro,
      belief,
      stats
    });
    
    toast({
      title: "Changes saved",
      description: "Your About section has been updated successfully",
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Edit About Section</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Introduction
        </label>
        <Textarea 
          value={intro} 
          onChange={(e) => setIntro(e.target.value)}
          className="min-h-[100px]"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Our Belief
        </label>
        <Textarea 
          value={belief} 
          onChange={(e) => setBelief(e.target.value)}
          className="min-h-[100px]"
        />
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Stats
          </label>
          <Button onClick={addStat} variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add Stat
          </Button>
        </div>
        
        <div className="space-y-3">
          {stats.map((stat) => (
            <div key={stat.id} className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-5">
                <Input
                  placeholder="Value (e.g. 8+)"
                  value={stat.value}
                  onChange={(e) => handleStatChange(stat.id, "value", e.target.value)}
                />
              </div>
              <div className="col-span-6">
                <Input
                  placeholder="Label (e.g. Years Experience)"
                  value={stat.label}
                  onChange={(e) => handleStatChange(stat.id, "label", e.target.value)}
                />
              </div>
              <div className="col-span-1 text-right">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => removeStat(stat.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="pt-4">
        <Button onClick={handleSave} className="w-full sm:w-auto">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default AboutAdmin;
