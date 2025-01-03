import { Home, TrendingUp, Newspaper } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-around items-center z-50">
      <Link
        to="/gmp"
        className={`flex flex-col items-center space-y-1 ${
          isActive("/gmp") ? "text-primary" : "text-gray-600"
        }`}
      >
        <TrendingUp size={24} />
        <span className="text-xs">GMP</span>
      </Link>
      <Link
        to="/"
        className={`flex flex-col items-center space-y-1 ${
          isActive("/") ? "text-primary" : "text-gray-600"
        }`}
      >
        <Home size={24} />
        <span className="text-xs">IPOs</span>
      </Link>
      <Link
        to="/news"
        className={`flex flex-col items-center space-y-1 ${
          isActive("/news") ? "text-primary" : "text-gray-600"
        }`}
      >
        <Newspaper size={24} />
        <span className="text-xs">News</span>
      </Link>
    </div>
  );
};

export default BottomNav;