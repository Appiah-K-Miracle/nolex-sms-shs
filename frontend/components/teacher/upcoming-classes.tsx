import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"

interface ClassSession {
  id: string
  subject: string
  class: string
  time: string
  room: string
  status: "upcoming" | "in-progress" | "completed"
}

const classes: ClassSession[] = [
  {
    id: "1",
    subject: "Mathematics",
    class: "Form 2B",
    time: "10:00 AM - 11:00 AM",
    room: "Room 204",
    status: "upcoming",
  },
  {
    id: "2",
    subject: "Physics",
    class: "Form 3A",
    time: "11:30 AM - 12:30 PM",
    room: "Lab 1",
    status: "upcoming",
  },
  {
    id: "3",
    subject: "Mathematics",
    class: "Form 1C",
    time: "2:00 PM - 3:00 PM",
    room: "Room 204",
    status: "upcoming",
  },
]

export function UpcomingClasses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray-900">Today&apos;s Classes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {classes.map((classSession) => (
            <div
              key={classSession.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-gray-900">{classSession.subject}</h4>
                  <Badge variant="outline" className="text-green-700 border-green-700">{classSession.class}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-green-700" />
                    {classSession.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-green-700" />
                    {classSession.room}
                  </div>
                </div>
              </div>
              <Badge variant={classSession.status === "upcoming" ? "default" : "outline"} className={classSession.status === "upcoming" ? "capitalize bg-green-700 text-white" : "capitalize"}>
                {classSession.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
