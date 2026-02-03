import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/ui/Navbar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="w-full">
        <Navbar />
        <div className="flex min-h-screen pt-[4rem]">
          <AppSidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
