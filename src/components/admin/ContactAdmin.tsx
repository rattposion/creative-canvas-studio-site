
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash, Plus, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactAdminProps {
  showInfoOnly?: boolean;
}

const ContactAdmin = ({ showInfoOnly = false }: ContactAdminProps) => {
  const { toast } = useToast();
  
  const [contactInfo, setContactInfo] = useState({
    email: "contact@creativecanvas.com",
    phone: "+1 (234) 567-890",
    address: "123 Creative Street, Design District, San Francisco, CA 94103",
    hours: "Monday - Friday: 9AM - 6PM\nWeekend: By appointment"
  });
  
  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: "Facebook", url: "https://facebook.com/" },
    { id: 2, platform: "Instagram", url: "https://instagram.com/" },
    { id: 3, platform: "LinkedIn", url: "https://linkedin.com/" }
  ]);
  
  const [formFields, setFormFields] = useState([
    { id: 1, name: "name", label: "Full Name", type: "text", required: true },
    { id: 2, name: "email", label: "Email Address", type: "email", required: true },
    { id: 3, name: "service", label: "Service Needed", type: "select", required: false },
    { id: 4, name: "subject", label: "Subject", type: "text", required: false },
    { id: 5, name: "message", label: "Your Message", type: "textarea", required: true }
  ]);
  
  const [serviceOptions, setServiceOptions] = useState([
    "Video Production", 
    "Video Editing", 
    "Brand Identity Design", 
    "Marketing Materials", 
    "Other"
  ]);

  const handleContactInfoChange = (field: keyof typeof contactInfo, value: string) => {
    setContactInfo({ ...contactInfo, [field]: value });
  };

  const handleSocialLinkChange = (id: number, field: "platform" | "url", value: string) => {
    setSocialLinks(socialLinks.map(link => 
      link.id === id ? { ...link, [field]: value } : link
    ));
  };

  const addSocialLink = () => {
    const newId = socialLinks.length > 0 ? Math.max(...socialLinks.map(link => link.id)) + 1 : 1;
    setSocialLinks([...socialLinks, { id: newId, platform: "", url: "" }]);
  };

  const removeSocialLink = (id: number) => {
    setSocialLinks(socialLinks.filter(link => link.id !== id));
  };

  const handleFormFieldChange = (id: number, field: "name" | "label" | "type" | "required", value: string | boolean) => {
    setFormFields(formFields.map(formField => 
      formField.id === id ? { ...formField, [field]: value } : formField
    ));
  };

  const addFormField = () => {
    const newId = formFields.length > 0 ? Math.max(...formFields.map(field => field.id)) + 1 : 1;
    setFormFields([...formFields, { id: newId, name: "", label: "", type: "text", required: false }]);
  };
  
  const removeFormField = (id: number) => {
    setFormFields(formFields.filter(field => field.id !== id));
  };

  const handleServiceOptionChange = (index: number, value: string) => {
    const newOptions = [...serviceOptions];
    newOptions[index] = value;
    setServiceOptions(newOptions);
  };

  const addServiceOption = () => {
    setServiceOptions([...serviceOptions, ""]);
  };

  const removeServiceOption = (index: number) => {
    const newOptions = [...serviceOptions];
    newOptions.splice(index, 1);
    setServiceOptions(newOptions);
  };

  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: showInfoOnly ? "Contact information has been updated successfully" : "Contact section has been updated successfully",
    });
  };

  return (
    <div className="space-y-8">
      {showInfoOnly ? (
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Contact Information</h2>
      ) : (
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Contact Form & Information</h2>
      )}
      
      <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Contact Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <Input
              value={contactInfo.email}
              onChange={(e) => handleContactInfoChange("email", e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone Number
            </label>
            <Input
              value={contactInfo.phone}
              onChange={(e) => handleContactInfoChange("phone", e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Studio Address
          </label>
          <Textarea
            value={contactInfo.address}
            onChange={(e) => handleContactInfoChange("address", e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Working Hours
          </label>
          <Textarea
            value={contactInfo.hours}
            onChange={(e) => handleContactInfoChange("hours", e.target.value)}
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Social Media Links
            </label>
            <Button onClick={addSocialLink} variant="outline" size="sm">
              <Plus className="h-3 w-3 mr-1" />
              Add Social Link
            </Button>
          </div>
          
          <div className="space-y-3">
            {socialLinks.map((link) => (
              <div key={link.id} className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-4">
                  <Input
                    placeholder="Platform (e.g. Facebook)"
                    value={link.platform}
                    onChange={(e) => handleSocialLinkChange(link.id, "platform", e.target.value)}
                  />
                </div>
                <div className="col-span-7">
                  <Input
                    placeholder="URL"
                    value={link.url}
                    onChange={(e) => handleSocialLinkChange(link.id, "url", e.target.value)}
                  />
                </div>
                <div className="col-span-1">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => removeSocialLink(link.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!showInfoOnly && (
        <>
          <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Contact Form Fields</h3>
            
            <div className="flex justify-end">
              <Button onClick={addFormField} variant="outline" size="sm">
                <Plus className="h-3 w-3 mr-1" />
                Add Form Field
              </Button>
            </div>
            
            <div className="space-y-4">
              {formFields.map((field) => (
                <div key={field.id} className="border border-gray-200 dark:border-gray-700 p-4 rounded-md">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-gray-900 dark:text-white">{field.label || "New Field"}</h4>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeFormField(field.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                      disabled={formFields.length <= 1}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                        Field Name (internal)
                      </label>
                      <Input
                        placeholder="e.g. email"
                        value={field.name}
                        onChange={(e) => handleFormFieldChange(field.id, "name", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                        Field Label (shown to users)
                      </label>
                      <Input
                        placeholder="e.g. Email Address"
                        value={field.label}
                        onChange={(e) => handleFormFieldChange(field.id, "label", e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                        Field Type
                      </label>
                      <select
                        value={field.type}
                        onChange={(e) => handleFormFieldChange(field.id, "type", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white text-sm"
                      >
                        <option value="text">Text Input</option>
                        <option value="email">Email Input</option>
                        <option value="textarea">Text Area</option>
                        <option value="select">Dropdown Select</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`required-${field.id}`}
                        checked={field.required}
                        onChange={(e) => handleFormFieldChange(field.id, "required", e.target.checked)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor={`required-${field.id}`} className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        Required Field
                      </label>
                    </div>
                  </div>
                  
                  {field.type === "select" && field.name === "service" && (
                    <div className="mt-4">
                      <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Service Options
                      </label>
                      <div className="space-y-2">
                        {serviceOptions.map((option, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Input
                              placeholder="Service option"
                              value={option}
                              onChange={(e) => handleServiceOptionChange(index, e.target.value)}
                            />
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => removeServiceOption(index)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                              disabled={serviceOptions.length <= 1}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                        <Button 
                          onClick={addServiceOption} 
                          variant="outline" 
                          size="sm" 
                          className="mt-1"
                        >
                          <Plus className="h-3 w-3 mr-1" />
                          Add Option
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      
      <div className="pt-4">
        <Button onClick={handleSave} className="w-full sm:w-auto">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ContactAdmin;
