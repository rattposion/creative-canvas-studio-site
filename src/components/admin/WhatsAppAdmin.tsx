
import React from 'react';
import { useSiteContext } from '@/contexts/SiteContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, MessageSquare } from 'lucide-react';

const WhatsAppAdmin = () => {
  const { whatsAppSettings, updateWhatsAppSettings } = useSiteContext();
  const { toast } = useToast();

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    updateWhatsAppSettings({ phoneNumber: value });
    toast({
      title: "WhatsApp number updated",
      description: "The WhatsApp contact number has been updated successfully.",
      variant: "success",
    });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateWhatsAppSettings({ message: e.target.value });
    toast({
      title: "WhatsApp message updated",
      description: "The default message has been updated successfully.",
      variant: "success",
    });
  };

  const handleSave = () => {
    toast({
      title: "WhatsApp settings saved",
      description: "Your WhatsApp contact settings have been saved.",
      variant: "success",
    });
  };

  return (
    <div className="space-y-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Phone className="text-green-500 h-5 w-5" />
        <h2 className="text-xl font-semibold">WhatsApp Integration Settings</h2>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="whatsapp-number" className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          WhatsApp Number
        </Label>
        <Input
          id="whatsapp-number"
          type="text"
          placeholder="55119XXXXXXXX"
          value={whatsAppSettings.phoneNumber}
          onChange={handlePhoneNumberChange}
          className="focus:ring-green-500 focus:border-green-500"
        />
        <p className="text-sm text-muted-foreground">
          Enter the number in international format (e.g., 5511999999999 for Brazil)
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatsapp-message" className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
          Default Message
        </Label>
        <Textarea
          id="whatsapp-message"
          placeholder="Enter the default message..."
          value={whatsAppSettings.message}
          onChange={handleMessageChange}
          className="focus:ring-green-500 focus:border-green-500 min-h-[100px]"
        />
        <p className="text-sm text-muted-foreground">
          This message will be pre-filled when customers click on the WhatsApp button
        </p>
      </div>
      
      <div className="pt-2">
        <Button 
          onClick={handleSave} 
          className="w-full bg-green-600 hover:bg-green-700"
        >
          <CheckCircle className="mr-2 h-4 w-4" />
          Save WhatsApp Settings
        </Button>
      </div>
    </div>
  );
};

export default WhatsAppAdmin;
