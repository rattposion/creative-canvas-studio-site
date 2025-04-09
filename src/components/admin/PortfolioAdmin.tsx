
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash, Plus, Save, Upload, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PortfolioAdmin = () => {
  const { toast } = useToast();
  
  const [portfolioItems, setPortfolioItems] = useState([
    { 
      id: 1, 
      title: "Coastal Luxury Resort Campaign", 
      category: "video",
      image: "/placeholder.svg",
      description: "A luxury resort brand campaign highlighting oceanfront accommodations and amenities."
    },
    { 
      id: 2, 
      title: "Tech Startup Brand Identity", 
      category: "design",
      image: "/placeholder.svg", 
      description: "Complete brand identity design for an emerging tech startup in the AI space."
    },
    { 
      id: 3, 
      title: "Organic Food Product Launch", 
      category: "marketing",
      image: "/placeholder.svg",
      description: "Integrated campaign for a new organic food product line launch."
    },
  ]);

  const handleItemChange = (id: number, field: "title" | "category" | "description" | "image", value: string) => {
    setPortfolioItems(portfolioItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const addPortfolioItem = () => {
    const newId = portfolioItems.length > 0 ? Math.max(...portfolioItems.map(item => item.id)) + 1 : 1;
    setPortfolioItems([...portfolioItems, { 
      id: newId, 
      title: "", 
      category: "video",
      image: "/placeholder.svg",
      description: ""
    }]);
  };

  const removePortfolioItem = (id: number) => {
    setPortfolioItems(portfolioItems.filter(item => item.id !== id));
  };

  const handleImageUpload = (id: number) => {
    // In a real application, this would open a file picker and upload the image
    toast({
      title: "Image upload",
      description: "This would open an image upload dialog in a real app",
    });
    
    // For demo purposes, we'll just set a placeholder
    handleItemChange(id, "image", `/placeholder.svg?${Date.now()}`);
  };

  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: "Portfolio items have been updated successfully",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Portfolio</h2>
        <Button onClick={addPortfolioItem} variant="default">
          <Plus className="h-4 w-4 mr-1" />
          Add Project
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {portfolioItems.map((item) => (
          <div key={item.id} className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title || "New Project"}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => removePortfolioItem(item.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <Trash className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Project Title
                  </label>
                  <Input
                    placeholder="e.g. Brand Campaign Video"
                    value={item.title}
                    onChange={(e) => handleItemChange(item.id, "title", e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Category
                  </label>
                  <Select 
                    value={item.category} 
                    onValueChange={(value) => handleItemChange(item.id, "category", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="photography">Photography</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <Textarea 
                    placeholder="Project description"
                    value={item.description}
                    onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Image
                </label>
                <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                  <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <ImageIcon className="h-12 w-12 text-gray-400" />
                      </div>
                    )}
                    
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                      <Button
                        onClick={() => handleImageUpload(item.id)}
                        variant="secondary"
                        className="bg-white/90 hover:bg-white"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Change Image
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <Button onClick={handleSave} className="w-full sm:w-auto">
          <Save className="h-4 w-4 mr-2" />
          Save All Projects
        </Button>
      </div>
    </div>
  );
};

export default PortfolioAdmin;
