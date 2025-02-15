
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Users,
  LayoutDashboard,
  Calendar,
  Settings,
  ChevronLeft,
  Menu,
} from "lucide-react";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Users, label: "Employees", href: "/employees" },
    { icon: Calendar, label: "Calendar", href: "/calendar" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <div
      className={`bg-white border-r border-gray-200 h-screen transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        {!collapsed && <h1 className="text-xl font-semibold">HR System</h1>}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="hover:bg-gray-100"
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <item.icon size={20} />
            {!collapsed && <span>{item.label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
};
