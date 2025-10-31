"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const topPerformersData = [
  {
    name: "Abena Mensah",
    score: "92%",
    avatar: "/diverse-student-portraits.png",
  },
  {
    name: "Ama Osei",
    score: "86.4%",
    avatar: "/diverse-student-portraits.png",
  },
  {
    name: "Yaw Mensah",
    score: "84.2%",
    avatar: "/diverse-student-portraits.png",
  },
  {
    name: "Akosua Darko",
    score: "82.8%",
    avatar: "/diverse-student-portraits.png",
  },
  {
    name: "Kwabena Owusu",
    score: "81.5%",
    avatar: "/diverse-student-portraits.png",
  },
]

export function TopPerformersCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Five Performers</CardTitle>
        <p className="text-sm text-muted-foreground">Highest achieving students this term</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {topPerformersData.map((student, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-muted-foreground">{index + 1}</span>
              <Avatar className="h-9 w-9">
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{student.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="font-bold">{student.score}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
