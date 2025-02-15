
export interface Employee {
  dateOfBirth: string;
  salary: any;
  startDate: ReactNode;
  endDate: string;
  photoUrl: any;
  documents: any;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  avatar?: string;
  status: "active" | "inactive";
}
