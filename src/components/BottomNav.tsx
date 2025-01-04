import { NavLink } from "react-router-dom";
import { Home, TrendingUp, Newspaper, Shield } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t py-2 px-4">
      <nav className="flex justify-around items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center space-y-1 p-2 ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`
          }
        >
          <Home className="w-5 h-5" />
          <span className="text-xs">IPOs</span>
        </NavLink>
        
        <NavLink
          to="/gmp"
          className={({ isActive }) =>
            `flex flex-col items-center space-y-1 p-2 ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`
          }
        >
          <TrendingUp className="w-5 h-5" />
          <span className="text-xs">GMP</span>
        </NavLink>
        
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `flex flex-col items-center space-y-1 p-2 ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`
          }
        >
          <Newspaper className="w-5 h-5" />
          <span className="text-xs">News</span>
        </NavLink>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `flex flex-col items-center space-y-1 p-2 ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`
          }
        >
          <Shield className="w-5 h-5" />
          <span className="text-xs">Admin</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default BottomNav;