
import { ReactNode } from "react";
import { DashboardHeader } from "./DashboardHeader";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <DashboardHeader title={title} />
      <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
