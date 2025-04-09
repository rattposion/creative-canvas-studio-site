
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash, Plus, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AboutAdmin = () => {
  const { toast } = useToast();
  const [intro, setIntro] = useState("AND Studios is a creative video production and design agency specializing in brand storytelling. Founded in 2015, our team of talented creatives works with clients to create compelling visual content that engages audiences.");
  const [belief, setBelief] = useState("We believe in the power of visual storytelling to transform how audiences connect with brands. Our approach combines technical expertise with creative vision to deliver results that exceed expectations.");
  
  const [stats, setStats] = useState([
    { id: 1, value: "8+", label: "Years Experience" },
    { id: 2, value: "120+", label: "Satisfied Clients" },
    { id: 3, value: "350+", label: "Projects Completed" },
    { id: 4, value: "15", label: "Awards Won" },
  ]);

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
    // In a real application, this would save to a database
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
