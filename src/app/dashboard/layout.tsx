// app/dashboard/layout.tsx
import SideNav from "./sidenav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SideNav />
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}
