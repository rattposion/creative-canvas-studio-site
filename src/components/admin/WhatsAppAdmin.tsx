
import React from 'react';
import { useSiteContext } from '@/contexts/SiteContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const WhatsAppAdmin = () => {
  const { whatsAppSettings, updateWhatsAppSettings } = useSiteContext();
  const { toast } = useToast();

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    updateWhatsAppSettings({ phoneNumber: value });
    toast({
      title: "WhatsApp number updated",
      description: "The WhatsApp contact number has been updated successfully.",
    });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateWhatsAppSettings({ message: e.target.value });
    toast({
      title: "WhatsApp message updated",
      description: "The default message has been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="whatsapp-number">WhatsApp Number</Label>
        <Input
          id="whatsapp-number"
          type="text"
          placeholder="55119XXXXXXXX"
          value={whatsAppSettings.phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <p className="text-sm text-muted-foreground">
          Enter the number in international format (e.g., 5511999999999 for Brazil)
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatsapp-message">Default Message</Label>
        <Textarea
          id="whatsapp-message"
          placeholder="Enter the default message..."
          value={whatsAppSettings.message}
          onChange={handleMessageChange}
        />
      </div>
    </div>
  );
};

export default WhatsAppAdmin;
