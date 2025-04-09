import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash, Plus, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Slider } from "@/components/ui/slider";
import { useSiteContext } from "@/contexts/SiteContext";

const SkillsAdmin = () => {
  const { toast } = useToast();
  const { aboutContent, updateSkills, updateEquipment } = useSiteContext();
  
  const [skills, setSkills] = useState(aboutContent.skills);
  const [equipment, setEquipment] = useState(aboutContent.equipment);

  useEffect(() => {
    setSkills(aboutContent.skills);
    setEquipment(aboutContent.equipment);
  }, [aboutContent]);

  const handleSkillChange = (id: number, field: "name" | "level", value: string | number) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ));
  };

  const addSkill = () => {
    const newId = skills.length > 0 ? Math.max(...skills.map(s => s.id)) + 1 : 1;
    setSkills([...skills, { id: newId, name: "", level: 50 }]);
  };

  const removeSkill = (id: number) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const handleEquipmentChange = (id: number, name: string) => {
    setEquipment(equipment.map(item => 
      item.id === id ? { ...item, name } : item
    ));
  };

  const addEquipment = () => {
    const newId = equipment.length > 0 ? Math.max(...equipment.map(e => e.id)) + 1 : 1;
    setEquipment([...equipment, { id: newId, name: "" }]);
  };

  const removeEquipment = (id: number) => {
    setEquipment(equipment.filter(item => item.id !== id));
  };

  const handleSave = () => {
    updateSkills(skills);
    updateEquipment(equipment);
    
    toast({
      title: "Changes saved",
      description: "Skills & Equipment have been updated successfully",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Skills</h2>
          <Button onClick={addSkill} variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add Skill
          </Button>
        </div>

        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg space-y-3">
              <div className="flex justify-between items-center">
                <Input
                  placeholder="Skill name"
                  value={skill.name}
                  onChange={(e) => handleSkillChange(skill.id, "name", e.target.value)}
                  className="max-w-xs"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => removeSkill(skill.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Skill Level</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <Slider
                  value={[skill.level]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => handleSkillChange(skill.id, "level", value[0])}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Equipment</h2>
          <Button onClick={addEquipment} variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add Equipment
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {equipment.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <Input
                placeholder="Equipment name"
                value={item.name}
                onChange={(e) => handleEquipmentChange(item.id, e.target.value)}
              />
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => removeEquipment(item.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <Trash className="h-4 w-4" />
              </Button>
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

export default SkillsAdmin;
