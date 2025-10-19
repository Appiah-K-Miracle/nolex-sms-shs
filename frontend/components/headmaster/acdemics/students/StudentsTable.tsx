import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, Filter, MoreVertical, Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const StudentsTable = () => {
  const router = useRouter();
  return (
    <div>
      {/* Students Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-foreground">
                Student Directory
              </CardTitle>
              <CardDescription>
                A list of all students in the school
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search students..." className="pl-9" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Form</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>GPA</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-mono text-sm">
                      {student.id}
                    </TableCell>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.form}</TableCell>
                    <TableCell>{student.program}</TableCell>
                    <TableCell className="font-semibold">{student.gpa}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          student.status === "Active" ? "default" : "destructive"
                        }
                        className={student.status === "Active" ? "bg-green-700 text-white" : ""}
                      >
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() =>
                            router.push(
                              `/headmaster/academics/students/${student.id}`
                            )
                            }
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              router.push(
                              `/headmaster/academics/students/${student.id}/edit`
                              )
                            }
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentsTable;

const students = [
  {
    id: "STU001",
    name: "Kwame Mensah",
    form: "Form 3",
    program: "General Science",
    status: "Active",
    gpa: "3.8",
  },
  {
    id: "STU002",
    name: "Ama Osei",
    form: "Form 2",
    program: "Business",
    status: "Active",
    gpa: "3.6",
  },
  {
    id: "STU003",
    name: "Kofi Asante",
    form: "Form 1",
    program: "General Arts",
    status: "Active",
    gpa: "3.2",
  },
  {
    id: "STU004",
    name: "Abena Boateng",
    form: "Form 3",
    program: "Home Economics",
    status: "Active",
    gpa: "3.9",
  },
  {
    id: "STU005",
    name: "Yaw Owusu",
    form: "Form 2",
    program: "Visual Arts",
    status: "Active",
    gpa: "3.5",
  },
  {
    id: "STU006",
    name: "Akua Adjei",
    form: "Form 3",
    program: "General Science",
    status: "Suspended",
    gpa: "2.8",
  },
  {
    id: "STU007",
    name: "Kwesi Appiah",
    form: "Form 1",
    program: "Business",
    status: "Active",
    gpa: "3.4",
  },
  {
    id: "STU008",
    name: "Efua Darko",
    form: "Form 2",
    program: "General Arts",
    status: "Active",
    gpa: "3.7",
  },
];
