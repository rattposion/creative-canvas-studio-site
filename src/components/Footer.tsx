
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-creative-navy text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">CreativeCanvas</h3>
            <p className="text-gray-300 mb-6">
              Professional video production and graphic design services that help businesses communicate their vision and captivate their audience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white flex items-center hover:translate-x-1 transition-transform">
                  <ChevronRight size={16} className="mr-1" /> Video Production
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white flex items-center hover:translate-x-1 transition-transform">
                  <ChevronRight size={16} className="mr-1" /> Video Editing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white flex items-center hover:translate-x-1 transition-transform">
                  <ChevronRight size={16} className="mr-1" /> Motion Graphics
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white flex items-center hover:translate-x-1 transition-transform">
                  <ChevronRight size={16} className="mr-1" /> Brand Identity Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white flex items-center hover:translate-x-1 transition-transform">
                  <ChevronRight size={16} className="mr-1" /> Marketing Materials
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white flex items-center hover:translate-x-1 transition-transform">
                  <ChevronRight size={16} className="mr-1" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white flex items-center hover:translate-x-1 transition-transform">
                  <ChevronRight size={16} className="mr-1" /> About Me
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white flex items-center hover:translate-x-1 transition-transform">
                  <ChevronRight size={16} className="mr-1" /> Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white flex items-center hover:translate-x-1 transition-transform">
                  <ChevronRight size={16} className="mr-1" /> Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center hover:translate-x-1 transition-transform">
                  <ChevronRight size={16} className="mr-1" /> Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-primary mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-300">
                  123 Creative Street, Design District<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <div className="text-primary mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:contact@creativecanvas.com" className="text-gray-300 hover:text-white">
                  contact@creativecanvas.com
                </a>
              </li>
              <li className="flex items-center">
                <div className="text-primary mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-creative-dark py-6">
        <div className="container mx-auto text-center text-gray-400 text-sm">
          <p>© {currentYear} CreativeCanvas. All rights reserved. Professional Video & Graphic Design Services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
