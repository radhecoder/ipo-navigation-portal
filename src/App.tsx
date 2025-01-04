import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import IpoList from "./pages/IpoList";
import IpoDetails from "./pages/IpoDetails";
import GmpList from "./pages/GmpList";
import NewsList from "./pages/NewsList";
import AdminPanel from "./pages/AdminPanel";
import AppSidebar from "./components/AppSidebar";
import BottomNav from "./components/BottomNav";
import { useIsMobile } from "./hooks/use-mobile";

function App() {
  const isMobile = useIsMobile();

  return (
    <Router>
      <div className="flex min-h-screen">
        {!isMobile && <AppSidebar />}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<IpoList />} />
            <Route path="/ipo/:id" element={<IpoDetails />} />
            <Route path="/gmp" element={<GmpList />} />
            <Route path="/news" element={<NewsList />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
          {isMobile && <BottomNav />}
        </main>
      </div>
    </Router>
  );
}

export default App;