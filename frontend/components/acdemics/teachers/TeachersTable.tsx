import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";  
import { Filter, MoreVertical, Search, Eye, Edit, Mail, Phone } from "lucide-react";    
import { useRouter } from 'next/navigation';    

const TeachersTable = () => {
    const router = useRouter();

  return (
    <div>
          {/* Teachers Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-foreground">Teaching Staff</CardTitle>
                <CardDescription>Complete list of all teaching staff members</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search teachers..." className="pl-9" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Teacher</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Subjects</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teachers.map((teacher) => (
                  <TableRow key={teacher.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-green-700 text-white text-[10px] font-semibold">
                            {teacher.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{teacher.name}</div>
                          <div className="text-xs text-muted-foreground">{teacher.id}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{teacher.department}</TableCell>
                    <TableCell className="text-sm">{teacher.subjects}</TableCell>
                    <TableCell>{teacher.experience}</TableCell>
                    <TableCell>
                      <Badge
                        variant={teacher.status === "Active" ? "default" : "secondary"}
                        className={
                          teacher.status === "Active"
                            ? "bg-green-700 text-white"
                            : "bg-yellow-600 text-white"
                        }
                      >{teacher.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => router.push(`/headmaster/academics/teachers/${teacher.id}`)}>
                            <Eye className="w-4 h-4 mr-2" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => router.push(`/headmaster/academics/teachers/${teacher.id}/edit`)}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="w-4 h-4 mr-2" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Phone className="w-4 h-4 mr-2" />
                            Contact
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
    </div>
  )
}

export default TeachersTable


const teachers = [
  {
    id: "TCH001",
    name: "Dr. Emmanuel Agyeman",
    department: "Sciences",
    subjects: "Physics, Chemistry",
    status: "Active",
    experience: "15 years",
  },
  {
    id: "TCH002",
    name: "Mrs. Grace Owusu",
    department: "Arts",
    subjects: "English, Literature",
    status: "Active",
    experience: "12 years",
  },
  {
    id: "TCH003",
    name: "Mr. Samuel Boateng",
    department: "Mathematics",
    subjects: "Core Math, Elective Math",
    status: "Active",
    experience: "8 years",
  },
  {
    id: "TCH004",
    name: "Ms. Akosua Mensah",
    department: "Business",
    subjects: "Accounting, Business Mgmt",
    status: "Active",
    experience: "10 years",
  },
  {
    id: "TCH005",
    name: "Mr. Kwame Asare",
    department: "Technical",
    subjects: "Technical Drawing",
    status: "On Leave",
    experience: "6 years",
  },
  {
    id: "TCH006",
    name: "Mrs. Abena Darko",
    department: "Sciences",
    subjects: "Biology",
    status: "Active",
    experience: "14 years",
  },
]