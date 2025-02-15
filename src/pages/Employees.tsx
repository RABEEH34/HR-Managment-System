
import { Sidebar } from "@/components/layout/Sidebar";
import { Search } from "@/components/ui/search/Search";
import { EmployeeList } from "@/components/employees/EmployeeList";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

const Employees = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Employees</h1>
              <p className="text-gray-500 mt-1">Manage your team members</p>
            </div>
            <div className="flex gap-4 items-center">
              <Search />
              <Button className="flex items-center gap-2">
                <UserPlus size={20} />
                Add Employee
              </Button>
            </div>
          </div>
          
          <div className="mt-4">
            <EmployeeList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Employees;
