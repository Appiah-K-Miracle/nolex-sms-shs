import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Plus,
  BookOpen,
  Users,
  GraduationCap,
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

const SubjectCards = () => {
  const router = useRouter();

  return (
    <div>
      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <Card key={subject.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CardTitle className="text-foreground">
                      {subject.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <span className="font-mono text-xs">{subject.code}</span>
                    <Badge
                      variant={subject.level === "Core" ? "default" : "destructive"}
                      className={`text-xs ${
                        subject.level === "Core"
                          ? "bg-green-700 text-white"
                          : "bg-yellow-600 text-white"
                      }`
                      }
                    >
                      {subject.level}
                    </Badge>
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
                        router.push(
                          `/headmaster/academics/subjects/${subject.id}`
                        )
                      }
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() =>
                        router.push(
                          `/headmaster/academics/subjects/${subject.id}/edit`
                        )
                      }
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Subject
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{subject.department}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">
                  <span className="font-semibold">{subject.teachers}</span>{" "}
                  teachers
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">
                  <span className="font-semibold">{subject.students}</span>{" "}
                  students enrolled
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubjectCards;


const subjects = [
  {
    id: "SUB001",
    name: "Core Mathematics",
    code: "MATH101",
    department: "Mathematics",
    teachers: 8,
    students: 847,
    level: "Core",
  },
  {
    id: "SUB002",
    name: "English Language",
    code: "ENG101",
    department: "Languages",
    teachers: 12,
    students: 2847,
    level: "Core",
  },
  {
    id: "SUB003",
    name: "Physics",
    code: "PHY201",
    department: "Sciences",
    teachers: 6,
    students: 456,
    level: "Elective",
  },
  {
    id: "SUB004",
    name: "Chemistry",
    code: "CHE201",
    department: "Sciences",
    teachers: 5,
    students: 423,
    level: "Elective",
  },
  {
    id: "SUB005",
    name: "Biology",
    code: "BIO201",
    department: "Sciences",
    teachers: 7,
    students: 512,
    level: "Elective",
  },
  {
    id: "SUB006",
    name: "Business Management",
    code: "BUS301",
    department: "Business",
    teachers: 4,
    students: 345,
    level: "Elective",
  },
  {
    id: "SUB007",
    name: "Economics",
    code: "ECO301",
    department: "Business",
    teachers: 5,
    students: 398,
    level: "Elective",
  },
  {
    id: "SUB008",
    name: "Literature in English",
    code: "LIT201",
    department: "Languages",
    teachers: 6,
    students: 287,
    level: "Elective",
  },
  {
    id: "SUB009",
    name: "Visual Arts",
    code: "ART301",
    department: "Arts",
    teachers: 3,
    students: 156,
    level: "Elective",
  },
];
