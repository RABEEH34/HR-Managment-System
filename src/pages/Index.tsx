
import { Sidebar } from "@/components/layout/Sidebar";
import { Stats } from "@/components/dashboard/Stats";
import { EmployeeList } from "@/components/employees/EmployeeList";
import { Search } from "@/components/ui/search/Search";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              <p className="text-gray-500 mt-1">Welcome to your HR dashboard</p>
            </div>
            <Search />
          </div>
          
          <Stats />
          
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Employees
              </h2>
            </div>
            <EmployeeList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
