
import React, { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

type ColorScheme = {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
};

const colorSchemes: ColorScheme[] = [
  { name: 'default', primary: '#0D7680', secondary: '#FF5733', accent: '#FFB61E' },
  { name: 'purple', primary: '#8B5CF6', secondary: '#D946EF', accent: '#F97316' },
  { name: 'blue', primary: '#0EA5E9', secondary: '#F97316', accent: '#F59E0B' },
  { name: 'green', primary: '#10B981', secondary: '#EC4899', accent: '#F59E0B' },
  { name: 'red', primary: '#EF4444', secondary: '#8B5CF6', accent: '#10B981' },
];

const ColorToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>(colorSchemes[0]);

  // Apply the color scheme to the document
  useEffect(() => {
    document.documentElement.style.setProperty('--primary', hexToHsl(currentScheme.primary));
    document.documentElement.style.setProperty('--secondary', hexToHsl(currentScheme.secondary));
    document.documentElement.style.setProperty('--accent', hexToHsl(currentScheme.accent));
    
    // Store the current color scheme in localStorage
    localStorage.setItem('colorScheme', currentScheme.name);
  }, [currentScheme]);

  // Load saved color scheme on component mount
  useEffect(() => {
    const savedScheme = localStorage.getItem('colorScheme');
    if (savedScheme) {
      const scheme = colorSchemes.find(s => s.name === savedScheme);
      if (scheme) {
        setCurrentScheme(scheme);
      }
    }
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  // Helper to convert hex color to HSL format for CSS variables
  const hexToHsl = (hex: string): string => {
    // Remove the # if it exists
    hex = hex.replace('#', '');
    
    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    
    // Find greatest and smallest channel values
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    
    let h = 0;
    let s = 0;
    let l = 0;
    
    // Calculate hue
    if (delta === 0) {
      h = 0;
    } else if (cmax === r) {
      h = ((g - b) / delta) % 6;
    } else if (cmax === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }
    
    h = Math.round(h * 60);
    if (h < 0) h += 360;
    
    // Calculate lightness
    l = (cmax + cmin) / 2;
    
    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
    // Convert to percentages
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    
    return `${h} ${s}% ${l}%`;
  };

  return (
    <div className="fixed left-6 bottom-6 z-50">
      <button
        onClick={toggleOpen}
        className={cn(
          "p-3 rounded-full shadow-lg",
          "bg-and-blue dark:bg-and-blue text-white",
          "hover:bg-and-blue/90 dark:hover:bg-and-blue/90",
          "flex items-center justify-center",
          "transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-and-blue"
        )}
        aria-label="Alterar cores"
        title="Alterar cores"
      >
        <Palette className="h-5 w-5" />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white dark:bg-and-navy p-4 rounded-lg shadow-lg flex flex-col gap-2 min-w-[180px] animate-fade-in">
          <p className="text-sm font-medium mb-2">Escolha um tema:</p>
          {colorSchemes.map((scheme) => (
            <button
              key={scheme.name}
              onClick={() => {
                setCurrentScheme(scheme);
                setIsOpen(false);
              }}
              className={cn(
                "flex items-center gap-2 p-2 rounded-md transition-colors",
                currentScheme.name === scheme.name 
                  ? "bg-gray-100 dark:bg-gray-800" 
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
            >
              <div className="flex gap-1">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: scheme.primary }}></div>
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: scheme.secondary }}></div>
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: scheme.accent }}></div>
              </div>
              <span className="text-sm">{scheme.name.charAt(0).toUpperCase() + scheme.name.slice(1)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorToggle;
