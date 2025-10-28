import { DashboardLayout } from "@/components/teacher/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Calendar } from "lucide-react"

const timetable = [
  {
    day: "Monday",
    periods: [
      { time: "8:00 - 9:00", subject: "Mathematics", class: "Form 2B", room: "Room 204" },
      { time: "9:00 - 10:00", subject: "Free Period", class: "-", room: "-" },
      { time: "10:00 - 11:00", subject: "Physics", class: "Form 3A", room: "Lab 1" },
      { time: "11:30 - 12:30", subject: "Mathematics", class: "Form 1C", room: "Room 204" },
    ],
  },
  {
    day: "Tuesday",
    periods: [
      { time: "8:00 - 9:00", subject: "Physics", class: "Form 3A", room: "Lab 1" },
      { time: "9:00 - 10:00", subject: "Mathematics", class: "Form 2B", room: "Room 204" },
      { time: "10:00 - 11:00", subject: "Free Period", class: "-", room: "-" },
      { time: "11:30 - 12:30", subject: "Mathematics", class: "Form 3B", room: "Room 205" },
    ],
  },
]

export default function TimetablePage() {
  return (
    <DashboardLayout>
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
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Calendar className="h-5 w-5 text-green-700" />
                  {day.day}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {day.periods.map((period, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between rounded-lg border p-4 ${
                        period.subject === "Free Period" ? "border-dashed border-green-200 bg-green-50" : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-sm font-medium text-gray-600">{period.time}</div>
                        <div className="h-8 w-px bg-gray-200" />
                        <div>
                          <div className="font-semibold text-gray-900">{period.subject}</div>
                          <div className="text-sm text-gray-600">
                            {period.class} {period.room !== "-" && `• ${period.room}`}
                          </div>
                        </div>
                      </div>
                      {period.subject !== "Free Period" && <Badge variant="outline" className="text-green-700 border-green-700">{period.class}</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
