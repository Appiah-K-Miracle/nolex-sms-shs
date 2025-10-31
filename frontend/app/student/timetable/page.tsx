import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Download, MapPin, BookOpen } from "lucide-react"

export default function TimetablePage() {
  const weeklySchedule = [
    {
      day: "Monday",
      classes: [
        { time: "8:00 - 9:30", subject: "Mathematics", teacher: "Mr. Mensah", room: "Room 204", type: "Core" },
        { time: "9:45 - 11:15", subject: "English Language", teacher: "Mrs. Osei", room: "Room 101", type: "Core" },
        { time: "11:30 - 13:00", subject: "Physics", teacher: "Dr. Boateng", room: "Lab 3", type: "Elective" },
        { time: "14:00 - 15:30", subject: "Chemistry", teacher: "Dr. Adjei", room: "Lab 2", type: "Elective" },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        { time: "8:00 - 9:30", subject: "Social Studies", teacher: "Mr. Appiah", room: "Room 105", type: "Core" },
        {
          time: "9:45 - 11:15",
          subject: "Elective Mathematics",
          teacher: "Mr. Mensah",
          room: "Room 204",
          type: "Elective",
        },
        { time: "11:30 - 13:00", subject: "Physics", teacher: "Dr. Boateng", room: "Lab 3", type: "Elective" },
        {
          time: "14:00 - 15:30",
          subject: "Physical Education",
          teacher: "Coach Adu",
          room: "Sports Field",
          type: "Core",
        },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        { time: "8:00 - 9:30", subject: "Chemistry", teacher: "Dr. Adjei", room: "Lab 2", type: "Elective" },
        { time: "9:45 - 11:15", subject: "Mathematics", teacher: "Mr. Mensah", room: "Room 204", type: "Core" },
        { time: "11:30 - 13:00", subject: "English Language", teacher: "Mrs. Osei", room: "Room 101", type: "Core" },
        {
          time: "14:00 - 15:30",
          subject: "Elective Mathematics",
          teacher: "Mr. Mensah",
          room: "Room 204",
          type: "Elective",
        },
      ],
    },
    {
      day: "Thursday",
      classes: [
        { time: "8:00 - 9:30", subject: "Physics", teacher: "Dr. Boateng", room: "Lab 3", type: "Elective" },
        { time: "9:45 - 11:15", subject: "Social Studies", teacher: "Mr. Appiah", room: "Room 105", type: "Core" },
        { time: "11:30 - 13:00", subject: "Chemistry", teacher: "Dr. Adjei", room: "Lab 2", type: "Elective" },
        { time: "14:00 - 15:30", subject: "ICT", teacher: "Mr. Owusu", room: "Computer Lab", type: "Core" },
      ],
    },
    {
      day: "Friday",
      classes: [
        { time: "8:00 - 9:30", subject: "English Language", teacher: "Mrs. Osei", room: "Room 101", type: "Core" },
        { time: "9:45 - 11:15", subject: "Mathematics", teacher: "Mr. Mensah", room: "Room 204", type: "Core" },
        {
          time: "11:30 - 13:00",
          subject: "Elective Mathematics",
          teacher: "Mr. Mensah",
          room: "Room 204",
          type: "Elective",
        },
        {
          time: "14:00 - 15:30",
          subject: "Assembly / Club Activities",
          teacher: "Various",
          room: "Assembly Hall",
          type: "Extra",
        },
      ],
    },
  ]

  const examSchedule = [
    { date: "March 28", day: "Monday", subject: "Mathematics", time: "8:00 - 11:00", venue: "Main Hall", type: "Core" },
    {
      date: "March 29",
      day: "Tuesday",
      subject: "English Language",
      time: "8:00 - 11:00",
      venue: "Main Hall",
      type: "Core",
    },
    {
      date: "March 30",
      day: "Wednesday",
      subject: "Physics",
      time: "8:00 - 11:00",
      venue: "Lab Block",
      type: "Elective",
    },
    {
      date: "April 1",
      day: "Friday",
      subject: "Chemistry",
      time: "8:00 - 11:00",
      venue: "Lab Block",
      type: "Elective",
    },
    {
      date: "April 2",
      day: "Saturday",
      subject: "Social Studies",
      time: "8:00 - 11:00",
      venue: "Main Hall",
      type: "Core",
    },
    {
      date: "April 4",
      day: "Monday",
      subject: "Elective Mathematics",
      time: "8:00 - 11:00",
      venue: "Main Hall",
      type: "Elective",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-balance">Timetable</h1>
              <p className="text-muted-foreground mt-1">View your weekly class schedule and exam timetable</p>
            </div>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download Timetable
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <Tabs defaultValue="weekly" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[300px]">
            <TabsTrigger value="weekly">Weekly Classes</TabsTrigger>
            <TabsTrigger value="exams">Exam Schedule</TabsTrigger>
          </TabsList>

          {/* Weekly Timetable */}
          <TabsContent value="weekly" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Form 3A - Weekly Class Schedule
                </CardTitle>
                <CardDescription>2023/2024 Academic Year - Term 2</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {weeklySchedule.map((daySchedule) => (
                  <div key={daySchedule.day} className="space-y-3">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      {daySchedule.day}
                    </h3>
                    <div className="grid gap-3 md:grid-cols-2">
                      {daySchedule.classes.map((classItem, idx) => (
                        <Card key={idx} className="border-l-4 border-l-primary">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-2 mb-3">
                              <div>
                                <h4 className="font-semibold text-base">{classItem.subject}</h4>
                                <p className="text-sm text-muted-foreground">{classItem.teacher}</p>
                              </div>
                              <Badge variant={classItem.type === "Core" ? "default" : "outline"}>
                                {classItem.type}
                              </Badge>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span>{classItem.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{classItem.room}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Reference */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Reference</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <span className="font-medium">School Hours</span>
                  <span className="text-muted-foreground">8:00 AM - 3:30 PM</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <span className="font-medium">Break Time</span>
                  <span className="text-muted-foreground">11:15 AM - 11:30 AM</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <span className="font-medium">Lunch Break</span>
                  <span className="text-muted-foreground">1:00 PM - 2:00 PM</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Exam Timetable */}
          <TabsContent value="exams" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Mid-Term Examination Schedule
                </CardTitle>
                <CardDescription>March 28 - April 5, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {examSchedule.map((exam, idx) => (
                    <Card key={idx} className="border-l-4 border-l-accent">
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="flex items-center gap-4 md:min-w-[200px]">
                            <div className="flex flex-col items-center justify-center bg-accent text-accent-foreground rounded-lg px-4 py-3 min-w-[80px]">
                              <span className="text-xs font-medium">{exam.day}</span>
                              <span className="text-lg font-bold">{exam.date}</span>
                            </div>
                            <Badge variant={exam.type === "Core" ? "default" : "outline"}>{exam.type}</Badge>
                          </div>
                          <div className="flex-1 space-y-2">
                            <h4 className="font-semibold text-lg">{exam.subject}</h4>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{exam.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{exam.venue}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Exam Instructions */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Examination Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <p>Arrive at the examination venue 30 minutes before the scheduled time</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <p>Bring your student ID card and examination permit</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <p>No electronic devices allowed except approved calculators</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <p>Read all instructions carefully before starting</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                Download Exam Timetable
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                <Calendar className="mr-2 h-4 w-4" />
                Add to Calendar
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
