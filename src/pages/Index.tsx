import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import BottomNav from "@/components/BottomNav";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 pb-16">
          <div className="container py-4">
            <SidebarTrigger className="mb-4 md:hidden" />
            <Outlet />
          </div>
        </main>
        <BottomNav />
      </div>
    </SidebarProvider>
  );
};

export default Index;