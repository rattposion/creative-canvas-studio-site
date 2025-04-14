
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const WhatsAppButton = ({ phoneNumber = "5511999999999", message = "Olá! Gostaria de mais informações." }) => {
  const { t } = useTranslation();
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg",
        "bg-[#25D366] hover:bg-[#128C7E] text-white",
        "flex items-center justify-center",
        "transition-all duration-300 animate-bounce hover:animate-none",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      )}
      aria-label={t('contact.whatsapp')}
      title={t('contact.whatsapp')}
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;
