
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash, Plus, Save, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ServicesAdmin = () => {
  const { toast } = useToast();
  
  const [services, setServices] = useState([
    { 
      id: 1, 
      title: "Video Production", 
      description: "From concept to final edit, we create engaging videos that tell your brand's story.", 
      icon: "video",
      features: ["Corporate Videos", "Commercial Ads", "Product Videos", "Explainer Videos"]
    },
    { 
      id: 2, 
      title: "Motion Graphics", 
      description: "Dynamic animations that bring your ideas to life with style and creativity.", 
      icon: "zap",
      features: ["Logo Animation", "UI Animation", "Title Sequences", "Explainer Graphics"]
    },
    { 
      id: 3, 
      title: "Brand Identity", 
      description: "Comprehensive brand design that captures your essence and stands out from the competition.", 
      icon: "palette",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
  ]);

  const handleServiceChange = (id: number, field: "title" | "description" | "icon", value: string) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, [field]: value } : service
    ));
  };

  const handleFeatureChange = (serviceId: number, index: number, value: string) => {
    setServices(services.map(service => {
      if (service.id === serviceId) {
        const updatedFeatures = [...service.features];
        updatedFeatures[index] = value;
        return { ...service, features: updatedFeatures };
      }
      return service;
    }));
  };

  const addFeature = (serviceId: number) => {
    setServices(services.map(service => {
      if (service.id === serviceId) {
        return { ...service, features: [...service.features, ""] };
      }
      return service;
    }));
  };

  const removeFeature = (serviceId: number, index: number) => {
    setServices(services.map(service => {
      if (service.id === serviceId) {
        const updatedFeatures = [...service.features];
        updatedFeatures.splice(index, 1);
        return { ...service, features: updatedFeatures };
      }
      return service;
    }));
  };

  const addService = () => {
    const newId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
    setServices([...services, { 
      id: newId, 
      title: "", 
      description: "", 
      icon: "box",
      features: [""]
    }]);
  };

  const removeService = (id: number) => {
    setServices(services.filter(service => service.id !== id));
  };

  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: "Services have been updated successfully",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Services</h2>
        <Button onClick={addService} variant="default">
          <Plus className="h-4 w-4 mr-1" />
          Add Service
        </Button>
      </div>

      <div className="space-y-8">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{service.title || "New Service"}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => removeService(service.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <Trash className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Service Title
                </label>
                <Input
                  placeholder="e.g. Video Production"
                  value={service.title}
                  onChange={(e) => handleServiceChange(service.id, "title", e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Icon Name
                </label>
                <Input
                  placeholder="e.g. video, camera, film"
                  value={service.icon}
                  onChange={(e) => handleServiceChange(service.id, "icon", e.target.value)}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter a Lucide icon name (see <a href="https://lucide.dev/icons/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Lucide icons</a>)
                </p>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <Textarea 
                placeholder="Service description"
                value={service.description}
                onChange={(e) => handleServiceChange(service.id, "description", e.target.value)}
                className="min-h-[80px]"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Features
                </label>
                <Button 
                  onClick={() => addFeature(service.id)} 
                  variant="outline" 
                  size="sm"
                >
                  <Plus className="h-3 w-3 mr-1" />
                  Add Feature
                </Button>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      placeholder="Feature description"
                      value={feature}
                      onChange={(e) => handleFeatureChange(service.id, index, e.target.value)}
                    />
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeFeature(service.id, index)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                      disabled={service.features.length <= 1}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <Button onClick={handleSave} className="w-full sm:w-auto">
          <Save className="h-4 w-4 mr-2" />
          Save All Services
        </Button>
      </div>
    </div>
  );
};

export default ServicesAdmin;
