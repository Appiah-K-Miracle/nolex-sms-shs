"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const students = [
  {
    id: "1",
    name: "Kwame Asante",
    class: "Form 3A",
    avatar: "/diverse-student-portraits.png",
  },
  {
    id: "2",
    name: "Ama Serwaa",
    class: "Form 2B",
    avatar: "/diverse-student-portraits.png",
  },
  {
    id: "3",
    name: "Kofi Mensah",
    class: "Form 1C",
    avatar: "/diverse-student-portraits.png",
  },
]

export function StudentSwitcher() {
  const [selectedStudent, setSelectedStudent] = React.useState(students[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={false}
          className="w-[200px] justify-between"
        >
          <Avatar className="mr-2 h-5 w-5">
            <AvatarImage
              src={selectedStudent.avatar}
              alt={selectedStudent.name}
            />
            <AvatarFallback>{selectedStudent.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="flex-1 text-left">
            {selectedStudent.name} - {selectedStudent.class}
          </span>
          <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]">
        <DropdownMenuLabel>Select Student</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {students.map((student) => (
          <DropdownMenuItem
            key={student.id}
            onSelect={() => setSelectedStudent(student)}
          >
            <Avatar className="mr-2 h-5 w-5">
              <AvatarImage src={student.avatar} alt={student.name} />
              <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {student.name} - {student.class}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
