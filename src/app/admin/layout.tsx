import { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export const metadata = {
  title: "Admin Dashboard | NexDial",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050A14] text-slate-200">
      <AdminSidebar />
      <div className="lg:pl-72 flex flex-col min-h-screen transition-all duration-300">
        <main className="flex-1 p-6 lg:p-10 pt-24 lg:pt-10">
          {children}
        </main>
      </div>
    </div>
  );
}
