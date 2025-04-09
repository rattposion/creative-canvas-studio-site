
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutAdmin from "@/components/admin/AboutAdmin";
import SkillsAdmin from "@/components/admin/SkillsAdmin";
import ServicesAdmin from "@/components/admin/ServicesAdmin";
import PortfolioAdmin from "@/components/admin/PortfolioAdmin";
import ContactAdmin from "@/components/admin/ContactAdmin";
import AdminHeader from "@/components/admin/AdminHeader";
import { useToast } from "@/hooks/use-toast";
import { Navigate } from "react-router-dom";

const Admin = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // In a real app, we would check for auth token
    // For demo, we're just using localStorage
    return localStorage.getItem("admin-authenticated") === "true";
  });
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check for demo purposes
    if (password === "admin123") {
      localStorage.setItem("admin-authenticated", "true");
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "You've been logged in to the admin panel",
      });
    } else {
      toast({
        title: "Invalid password",
        description: "Please try again with the correct password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin-authenticated");
    setIsAuthenticated(false);
    toast({
      title: "Logged out",
      description: "You've been logged out of the admin panel",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Login</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Enter your password to access the admin panel</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Login
              </button>
            </div>
            <div className="text-center text-xs text-gray-500 dark:text-gray-400">
              <p>For demo purposes, use password: admin123</p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <AdminHeader onLogout={handleLogout} />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Admin Dashboard</h1>
        
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="contact-info">Contact Info</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <AboutAdmin />
          </TabsContent>
          
          <TabsContent value="skills" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <SkillsAdmin />
          </TabsContent>
          
          <TabsContent value="services" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <ServicesAdmin />
          </TabsContent>
          
          <TabsContent value="portfolio" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <PortfolioAdmin />
          </TabsContent>
          
          <TabsContent value="contact" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <ContactAdmin />
          </TabsContent>
          
          <TabsContent value="contact-info" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <ContactAdmin showInfoOnly={true} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
