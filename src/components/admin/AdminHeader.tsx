
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

interface AdminHeaderProps {
  onLogout: () => void;
}

const AdminHeader = ({ onLogout }: AdminHeaderProps) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/admin" className="font-bold text-xl text-primary">AND Studios Admin</Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
            View Site
          </Link>
          <button 
            onClick={onLogout}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          >
            <LogOut className="h-4 w-4 mr-1" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
