import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Users,
  BookOpen,
  Clock,
  MoreVertical,
  Eye,
  Edit,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const Classes = () => {
  const router = useRouter();
  return (
    <div>
      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((classItem) => (
          <Card
            key={classItem.id}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-foreground">
                    {classItem.name}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {classItem.program}
                  </CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() =>
                        router.push(`/headmaster/academics/classes/${classItem.id}`)
                      }
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() =>
                        router.push(`/headmaster/academics/classes/${classItem.id}/edit`)
                      }
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Class
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">
                  <span className="font-semibold">{classItem.students}</span>{" "}
                  students
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{classItem.teacher}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{classItem.schedule}</span>
              </div>
              <div className="pt-2">
                <Badge variant="outline" className="text-xs">
                  {classItem.room}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Classes;

const classes = [
  {
    id: "CLS001",
    name: "Form 1A",
    program: "General Science",
    students: 45,
    teacher: "Dr. Emmanuel Agyeman",
    room: "Block A - Room 101",
    schedule: "Mon, Wed, Fri - 8:00 AM",
  },
  {
    id: "CLS002",
    name: "Form 1B",
    program: "Business",
    students: 42,
    teacher: "Ms. Akosua Mensah",
    room: "Block B - Room 205",
    schedule: "Tue, Thu - 10:00 AM",
  },
  {
    id: "CLS003",
    name: "Form 2A",
    program: "General Arts",
    students: 48,
    teacher: "Mrs. Grace Owusu",
    room: "Block A - Room 203",
    schedule: "Mon, Wed, Fri - 10:00 AM",
  },
  {
    id: "CLS004",
    name: "Form 2B",
    program: "Visual Arts",
    students: 38,
    teacher: "Mr. Kwame Asare",
    room: "Art Studio - Room 301",
    schedule: "Tue, Thu - 2:00 PM",
  },
  {
    id: "CLS005",
    name: "Form 3A",
    program: "General Science",
    students: 50,
    teacher: "Mrs. Abena Darko",
    room: "Science Lab - Room 401",
    schedule: "Mon, Wed, Fri - 2:00 PM",
  },
  {
    id: "CLS006",
    name: "Form 3B",
    program: "Home Economics",
    students: 35,
    teacher: "Mrs. Grace Owusu",
    room: "Block C - Room 102",
    schedule: "Tue, Thu - 8:00 AM",
  },
];
