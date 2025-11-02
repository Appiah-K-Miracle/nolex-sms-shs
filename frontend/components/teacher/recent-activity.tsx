import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface Activity {
  id: string
  student: string
  action: string
  time: string
  type: "attendance" | "assessment" | "behavior" | "communication"
}

const activities: Activity[] = [
  {
    id: "1",
    student: "Ama Osei",
    action: "Submitted Mathematics Assignment",
    time: "2 hours ago",
    type: "assessment",
  },
  {
    id: "2",
    student: "Kwame Asante",
    action: "Marked absent in English class",
    time: "3 hours ago",
    type: "attendance",
  },
  {
    id: "3",
    student: "Abena Mensah",
    action: "Received commendation for excellent work",
    time: "5 hours ago",
    type: "behavior",
  },
  {
    id: "4",
    student: "Kofi Boateng",
    action: "Parent message sent",
    time: "1 day ago",
    type: "communication",
  },
]

const typeColors = {
  attendance: "bg-green-700",
  assessment: "bg-green-500",
  behavior: "bg-yellow-600",
  communication: "bg-blue-600",
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray-900">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`/.jpg?height=40&width=40&query=${activity.student}`} />
                <AvatarFallback className={typeColors[activity.type]}>
                  {activity.student
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none text-gray-900">{activity.student}</p>
                <p className="text-sm text-gray-600">{activity.action}</p>
                <p className="text-xs text-gray-600">{activity.time}</p>
              </div>
              <Badge variant="outline" className="capitalize text-green-700 border-green-700">
                {activity.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
