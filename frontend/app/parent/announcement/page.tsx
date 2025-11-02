import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Bell, Users, BookOpen, Trophy } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: "Mid-Term Examinations Schedule",
      date: "Feb 10, 2025",
      category: "Academic",
      priority: "high",
      icon: BookOpen,
      content:
        "Mid-term examinations will commence on February 15, 2025 and end on February 20, 2025. Students are advised to prepare adequately. Examination timetables have been distributed to all classes.",
    },
    {
      id: 2,
      title: "PTA Meeting - February 22",
      date: "Feb 8, 2025",
      category: "PTA",
      priority: "medium",
      icon: Users,
      content:
        "The next PTA meeting is scheduled for Saturday, February 22, 2025 at 2:00 PM in the school auditorium. All parents and guardians are encouraged to attend. Agenda includes academic performance review and infrastructure development plans.",
    },
    {
      id: 3,
      title: "Visiting Day - February 28",
      date: "Feb 5, 2025",
      category: "Event",
      priority: "medium",
      icon: Calendar,
      content:
        "Visiting day is scheduled for Sunday, February 28, 2025. Visiting hours are from 10:00 AM to 4:00 PM. Please bring your visitor's pass and valid ID. Students may receive food items and personal effects.",
    },
    {
      id: 4,
      title: "Inter-House Sports Competition",
      date: "Feb 3, 2025",
      category: "Sports",
      priority: "low",
      icon: Trophy,
      content:
        "The annual inter-house sports competition will take place on March 5-7, 2025. All students are expected to participate in at least one sporting activity. Training sessions begin next week.",
    },
    {
      id: 5,
      title: "School Fees Payment Deadline",
      date: "Feb 1, 2025",
      category: "Finance",
      priority: "high",
      icon: Bell,
      content:
        "This is a reminder that all outstanding school fees must be paid by February 20, 2025. Parents with outstanding balances are encouraged to visit the bursar's office or use mobile money payment options.",
    },
  ]

  const upcomingEvents = [
    {
      date: "15",
      month: "Feb",
      title: "Mid-Term Examinations Begin",
      time: "8:00 AM",
      location: "Various Classrooms",
    },
    {
      date: "22",
      month: "Feb",
      title: "PTA Meeting",
      time: "2:00 PM",
      location: "School Auditorium",
    },
    {
      date: "28",
      month: "Feb",
      title: "Visiting Day",
      time: "10:00 AM - 4:00 PM",
      location: "School Grounds",
    },
    {
      date: "05",
      month: "Mar",
      title: "Inter-House Sports",
      time: "All Day",
      location: "Sports Complex",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-100"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-100"
      case "low":
        return "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-950 dark:text-gray-100"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Announcements & Calendar</h1>
          <p className="text-muted-foreground">School events, PTA meetings, and important dates</p>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="academic">Academic</SelectItem>
            <SelectItem value="pta">PTA</SelectItem>
            <SelectItem value="event">Events</SelectItem>
            <SelectItem value="sports">Sports</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Upcoming Events Calendar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Events
          </CardTitle>
          <CardDescription>Important dates and school calendar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg border">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-green-700 text-primary-foreground">
                  <span className="text-2xl font-bold">{event.date}</span>
                  <span className="text-xs uppercase">{event.month}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <Calendar className="inline h-3 w-3 mr-1" />
                    {event.time}
                  </p>
                  <p className="text-sm text-muted-foreground">📍 {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Announcements List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Recent Announcements
          </CardTitle>
          <CardDescription>Latest updates from school administration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {announcements.map((announcement) => {
              const Icon = announcement.icon
              return (
                <div key={announcement.id} className="p-4 rounded-lg border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{announcement.title}</h3>
                        <p className="text-sm text-muted-foreground">{announcement.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline">{announcement.category}</Badge>
                      <Badge className={getPriorityColor(announcement.priority)}>{announcement.priority}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground ml-13">{announcement.content}</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Academic Calendar */}
      <Card>
        <CardHeader>
          <CardTitle>Academic Calendar 2024/2025</CardTitle>
          <CardDescription>Key dates for the academic year</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <p className="font-medium text-sm">Term 1</p>
                <p className="text-sm text-muted-foreground">Sep 9, 2024 - Dec 20, 2024</p>
                <Badge variant="outline">Completed</Badge>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-sm">Term 2</p>
                <p className="text-sm text-muted-foreground">Jan 6, 2025 - Apr 4, 2025</p>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-100">Current</Badge>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-sm">Term 3</p>
                <p className="text-sm text-muted-foreground">Apr 28, 2025 - Jul 25, 2025</p>
                <Badge variant="outline">Upcoming</Badge>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm font-medium mb-2">Important Dates:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Mid-Term Break: February 24-26, 2025</li>
                <li>• End of Term Examinations: March 24-28, 2025</li>
                <li>• Speech & Prize Giving Day: April 3, 2025</li>
                <li>• Vacation: April 5-27, 2025</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
