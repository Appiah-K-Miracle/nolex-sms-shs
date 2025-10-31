import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/parent/theme-provider";
import { parentNavigation } from "@/components/parent/app-sidebar";
import { SidebarLayout } from "@/components/shared/sidebar-layout";
import { ParentHeader } from "@/components/parent/layout/Header";
import { StudentSwitcher } from "@/components/parent/layout/StudentSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parent Portal - Nolex SMS for SHS",
  description: "Parent portal for Nolex School Management System",
};

export default function ParentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="w-64 flex-shrink-0">
        <SidebarLayout
          title={parentNavigation.title}
          subtitle={parentNavigation.subtitle}
          icon={parentNavigation.icon}
          menuItems={parentNavigation.menuItems}
          footerContent={<p className="text-xs text-gray-600 text-center">© 2025 Ghana SHS Management</p>}
        />
      </div>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <ParentHeader />
        <div className="mb-6">
          <StudentSwitcher />
        </div>
        {children}
      </div>
    </div>
  );
}
