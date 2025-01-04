import { NavLink } from "react-router-dom";
import { Home, TrendingUp, Newspaper, Shield } from "lucide-react";

const AppSidebar = () => {
  return (
    <div className="w-64 bg-background border-r h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">IPO Dashboard</h1>
      </div>
      
      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-lg hover:bg-accent transition-colors ${
              isActive ? "bg-accent" : ""
            }`
          }
        >
          <Home className="w-5 h-5" />
          <span>IPO List</span>
        </NavLink>
        
        <NavLink
          to="/gmp"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-lg hover:bg-accent transition-colors ${
              isActive ? "bg-accent" : ""
            }`
          }
        >
          <TrendingUp className="w-5 h-5" />
          <span>GMP</span>
        </NavLink>
        
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-lg hover:bg-accent transition-colors ${
              isActive ? "bg-accent" : ""
            }`
          }
        >
          <Newspaper className="w-5 h-5" />
          <span>News</span>
        </NavLink>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-lg hover:bg-accent transition-colors ${
              isActive ? "bg-accent" : ""
            }`
          }
        >
          <Shield className="w-5 h-5" />
          <span>Admin</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default AppSidebar;