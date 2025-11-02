import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download, Clock } from "lucide-react"

const timetable = [
  {
    day: "Monday",
    sessions: [
      { time: "8:00 AM - 9:00 AM", subject: "Mathematics", class: "Form 2B", location: "Block A, Room 201" },
      { time: "9:00 AM - 10:00 AM", subject: "English Language", class: "Form 2B", location: "Block A, Room 202" },
      { time: "10:30 AM - 11:30 AM", subject: "Integrated Science", class: "Form 2B", location: "Lab 1" },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      { time: "8:00 AM - 9:00 AM", subject: "Social Studies", class: "Form 2B", location: "Block A, Room 203" },
      { time: "9:00 AM - 10:00 AM", subject: "Physics", class: "Form 3A", location: "Lab 2" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "8:00 AM - 9:00 AM", subject: "Chemistry", class: "Form 3B", location: "Lab 3" },
      { time: "9:00 AM - 10:00 AM", subject: "Mathematics", class: "Form 2B", location: "Block A, Room 201" },
    ],
  },
  {
    day: "Thursday",
    sessions: [
      { time: "8:00 AM - 9:00 AM", subject: "English Language", class: "Form 2B", location: "Block A, Room 202" },
    ],
  },
  {
    day: "Friday",
    sessions: [
      { time: "8:00 AM - 9:00 AM", subject: "Integrated Science", class: "Form 2B", location: "Lab 1" },
    ],
  },
]

export default function TimetablePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Timetable</h1>
          <p className="text-gray-600">View your teaching schedule</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white hover:bg-gray-50 text-green-700">
            <Calendar className="mr-2 h-4 w-4" />
            This Week
          </Button>
          <Button variant="outline" className="bg-white hover:bg-gray-50 text-green-700">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {timetable.map((day) => (
          <Card key={day.day}>
            <CardHeader>
              <CardTitle className="text-gray-900">{day.day}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {day.sessions.map((session, index) => (
                  <div key={index} className="rounded-lg border border-gray-200 bg-white p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-gray-900">{session.subject}</h3>
                        <p className="text-sm text-gray-600">{session.class}</p>
                      </div>
                      <Badge variant="default" className="bg-green-700 text-white">{session.time}</Badge>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{session.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
