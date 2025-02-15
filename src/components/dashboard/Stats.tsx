
import { Card } from "@/components/ui/card";
import { Users, UserCheck, Building, Calendar } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
}

const StatCard = ({ title, value, icon, trend }: StatCardProps) => (
  <Card className="p-6 animate-fade-in">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
        {trend && (
          <p className="text-xs text-green-600 mt-1">
            {trend}
          </p>
        )}
      </div>
      <div className="text-primary">{icon}</div>
    </div>
  </Card>
);

export const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Employees"
        value="156"
        icon={<Users size={24} />}
        trend="+12% from last month"
      />
      <StatCard
        title="Active Employees"
        value="142"
        icon={<UserCheck size={24} />}
      />
      <StatCard
        title="Departments"
        value="8"
        icon={<Building size={24} />}
      />
      <StatCard
        title="Upcoming Reviews"
        value="23"
        icon={<Calendar size={24} />}
      />
    </div>
  );
};
