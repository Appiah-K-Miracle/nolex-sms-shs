"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertCircle } from "lucide-react"

const studentsNeedingSupportData = [
  {
    name: "Kofi Mensah",
    score: "48.2%",
    weakIn: ["Math", "Physics"],
    avatar: "/diverse-student-portraits.png",
  },
  {
    name: "Esi Boateng",
    score: "45.8%",
    weakIn: ["Science", "Math"],
    avatar: "/diverse-student-portraits.png",
  },
  {
    name: "Kwame Darko",
    score: "43.5%",
    weakIn: ["All subjects"],
    avatar: "/diverse-student-portraits.png",
  },
  {
    name: "Akua Owusu",
    score: "41.2%",
    weakIn: ["Math", "English"],
    avatar: "/diverse-student-portraits.png",
  },
]

export function StudentsNeedingSupportCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Students Needing Support</CardTitle>
        <p className="text-sm text-muted-foreground">Students below 50% average</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {studentsNeedingSupportData.map((student, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg border border-red-200 bg-red-50 p-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{student.name}</p>
                <p className="text-xs text-muted-foreground">
                  Weak in: {student.weakIn.join(", ")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-red-500">{student.score}</span>
              <AlertCircle className="h-5 w-5 text-red-500" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
