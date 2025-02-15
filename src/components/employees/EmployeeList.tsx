import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import type { Employee } from "@/types/employee";
import { Button } from "../ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

// Mock data for employees
const mockEmployees: Employee[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "rabeeh@gmail.com",
    dateOfBirth: "1990-05-15",
    department: "Engineering",
    position: "Senior Developer",
    salary: 90000,
    startDate: "2018-06-01",
    endDate: null,
    photoUrl: "/images/john-doe.jpg",
    documents: ["resume.pdf", "contract.pdf"],
    status: "active",
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@company.com",
    dateOfBirth: "1985-08-20",
    department: "Design",
    position: "UI/UX Designer",
    salary: 75000,
    startDate: "2019-03-15",
    endDate: null,
    photoUrl: "/images/jane-smith.jpg",
    documents: ["resume.pdf"],
    status: "active",
  },
  {
    id: "3",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.j@company.com",
    dateOfBirth: "1980-11-10",
    department: "Marketing",
    position: "Marketing Manager",
    salary: 120000,
    startDate: "2017-09-01",
    endDate: "2023-05-01",
    photoUrl: "/images/michael-johnson.jpg",
    documents: ["resume.pdf", "nda.pdf"],
    status: "inactive",
  },
];

export const EmployeeList = () => {
  const [employees, setEmployees] = useState(mockEmployees);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  // Function to handle editing an employee
  const handleEdit = (id: string) => {
    const employeeToEdit = employees.find((emp) => emp.id === id);
    if (employeeToEdit) {
      setEditingEmployee({ ...employeeToEdit }); // Clone to avoid direct mutation
      setIsEditModalOpen(true);
    }
  };

  // Function to save edited employee details
  const handleSaveEdit = () => {
    if (!editingEmployee) return;
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === editingEmployee.id ? { ...editingEmployee } : emp
      )
    );
    setIsEditModalOpen(false);
    setEditingEmployee(null);
  };

  // Function to handle deleting an employee
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.id !== id));
    }
  };

  return (
    <Card >
      {/* Responsive Table */}
      <Table className="w-full overflow-x-auto">
        <TableHeader>
          <TableRow>
            <TableHead>Employee Name</TableHead>
            <TableHead>Employee Email</TableHead>
            <TableHead>Employee Date of Birth</TableHead>
            <TableHead>Employee Job Title</TableHead>
            <TableHead>Employee Department</TableHead>
            <TableHead>Employee Salary</TableHead>
            <TableHead>Employee Start Date</TableHead>
            <TableHead>Employee End Date</TableHead>
            <TableHead>Employee Photo</TableHead>
            <TableHead>Employee Documents</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="flex items-center gap-2">
                <span>
                  {employee.firstName} {employee.lastName}
                </span>
              </TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.dateOfBirth || "Not Provided"}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>${employee.salary?.toLocaleString()}</TableCell>
              <TableCell>{employee.startDate}</TableCell>
              <TableCell>{employee.endDate || "N/A"}</TableCell>
              <TableCell>
                {employee.photoUrl ? (
                  <img src={employee.photoUrl} alt="Employee" className="w-10 h-10 rounded-full" />
                ) : (
                  "No Photo"
                )}
              </TableCell>
              <TableCell>
                {employee.documents.length > 0 ? (
                  employee.documents.map((doc, index) => <div key={index}>{doc}</div>)
                ) : (
                  "No Documents"
                )}
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => handleEdit(employee.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <PencilIcon className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleDelete(employee.id)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  <TrashIcon className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen} >
          <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Employee</DialogTitle>
          </DialogHeader>
          {editingEmployee && (
            <div className="space-y-4">
              <Input
                value={editingEmployee.firstName}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    firstName: e.target.value,
                  })
                }
                placeholder="First Name"
              />
              <Input
                value={editingEmployee.lastName}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    lastName: e.target.value,
                  })
                }
                placeholder="Last Name"
              />
              <Input
                value={editingEmployee.email}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    email: e.target.value,
                  })
                }
                placeholder="Email"
              />
              <Input
                value={editingEmployee.dateOfBirth || ""}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    dateOfBirth: e.target.value,
                  })
                }
                placeholder="Date of Birth"
              />
              <Input
                value={editingEmployee.position}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    position: e.target.value,
                  })
                }
                placeholder="Job Title"
              />
              <Input
                value={editingEmployee.department}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    department: e.target.value,
                  })
                }
                placeholder="Department"
              />
              <Input
                value={editingEmployee.salary?.toString() || ""}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    salary: Number(e.target.value),
                  })
                }
                placeholder="Salary"
              />
              <Input
                value={editingEmployee.startDate}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    startDate: e.target.value,
                  })
                }
                placeholder="Start Date"
              />
              <Input
                value={editingEmployee.endDate || ""}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    endDate: e.target.value || null,
                  })
                }
                placeholder="End Date"
              />
              <Input
                value={editingEmployee.photoUrl || ""}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    photoUrl: e.target.value,
                  })
                }
                placeholder="Photo URL"
              />
              <Input
                value={editingEmployee.documents.join(", ") || ""}
                onChange={(e) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    documents: e.target.value.split(",").map((doc) => doc.trim()),
                  })
                }
                placeholder="Comma-separated document names"
              />
              <Select
                value={editingEmployee.status}
                onValueChange={(value) =>
                  setEditingEmployee({
                    ...editingEmployee,
                    status: value as "active" | "inactive",
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleSaveEdit}>Save Changes</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};