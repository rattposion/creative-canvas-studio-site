
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center gap-2"
        aria-label="Change language"
      >
        <Globe className="h-5 w-5 text-white dark:text-white text-gray-700" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-and-navy/95 backdrop-blur-md rounded-md shadow-lg z-50">
          <ul className="py-1">
            <li>
              <button
                onClick={() => changeLanguage('en')}
                className={`w-full text-left px-4 py-2 text-sm ${
                  i18n.language === 'en' ? 'font-bold text-and-blue' : 'text-gray-700 dark:text-white'
                } hover:bg-gray-100 dark:hover:bg-white/5`}
              >
                {t('language.en')}
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage('pt')}
                className={`w-full text-left px-4 py-2 text-sm ${
                  i18n.language === 'pt' ? 'font-bold text-and-blue' : 'text-gray-700 dark:text-white'
                } hover:bg-gray-100 dark:hover:bg-white/5`}
              >
                {t('language.pt')}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
