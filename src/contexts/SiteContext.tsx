
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define types for our site content
export interface Skill {
  id: number;
  name: string;
  level: number;
}

export interface Equipment {
  id: number;
  name: string;
}

export interface AboutContent {
  intro: string;
  belief: string;
  stats: {
    id: number;
    value: string;
    label: string;
  }[];
  skills: Skill[];
  equipment: Equipment[];
}

// Create the context with default values
interface SiteContextType {
  aboutContent: AboutContent;
  updateAboutContent: (content: Partial<AboutContent>) => void;
  updateSkills: (skills: Skill[]) => void;
  updateEquipment: (equipment: Equipment[]) => void;
}

const defaultAboutContent: AboutContent = {
  intro: "AND Studios is a creative video production and design agency specializing in brand storytelling. Founded in 2015, our team of talented creatives works with clients to create compelling visual content that engages audiences.",
  belief: "We believe in the power of visual storytelling to transform how audiences connect with brands. Our approach combines technical expertise with creative vision to deliver results that exceed expectations.",
  stats: [
    { id: 1, value: "8+", label: "Years Experience" },
    { id: 2, value: "120+", label: "Satisfied Clients" },
    { id: 3, value: "350+", label: "Projects Completed" },
    { id: 4, value: "15", label: "Awards Won" },
  ],
  skills: [
    { id: 1, name: "Video Production", level: 95 },
    { id: 2, name: "Video Editing", level: 90 },
    { id: 3, name: "Motion Graphics", level: 85 },
    { id: 4, name: "Brand Design", level: 90 },
    { id: 5, name: "UI/UX Design", level: 80 },
  ],
  equipment: [
    { id: 1, name: "Sony Alpha A7 III" },
    { id: 2, name: "DJI Ronin Gimbal" },
    { id: 3, name: "Adobe Premiere Pro" },
    { id: 4, name: "Adobe After Effects" },
    { id: 5, name: "Adobe Illustrator" },
    { id: 6, name: "Adobe Photoshop" },
    { id: 7, name: "Final Cut Pro X" },
    { id: 8, name: "DaVinci Resolve" },
  ],
};

const SiteContext = createContext<SiteContextType>({
  aboutContent: defaultAboutContent,
  updateAboutContent: () => {},
  updateSkills: () => {},
  updateEquipment: () => {},
});

export const useSiteContext = () => useContext(SiteContext);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state with default values or from localStorage
  const [aboutContent, setAboutContent] = useState<AboutContent>(() => {
    const savedContent = localStorage.getItem('aboutContent');
    return savedContent ? JSON.parse(savedContent) : defaultAboutContent;
  });

  // Save to localStorage whenever content changes
  useEffect(() => {
    localStorage.setItem('aboutContent', JSON.stringify(aboutContent));
  }, [aboutContent]);

  // Update functions
  const updateAboutContent = (content: Partial<AboutContent>) => {
    setAboutContent(prev => ({ ...prev, ...content }));
  };

  const updateSkills = (skills: Skill[]) => {
    setAboutContent(prev => ({ ...prev, skills }));
  };

  const updateEquipment = (equipment: Equipment[]) => {
    setAboutContent(prev => ({ ...prev, equipment }));
  };

  return (
    <SiteContext.Provider value={{ 
      aboutContent, 
      updateAboutContent, 
      updateSkills, 
      updateEquipment 
    }}>
      {children}
    </SiteContext.Provider>
  );
};
