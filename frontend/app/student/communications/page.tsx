import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, MessageSquare, Send, Calendar, AlertCircle, Megaphone, User } from "lucide-react"

export default function CommunicationPage() {
  const announcements = [
    {
      title: "Mid-Term Examination Schedule Released",
      content:
        "The mid-term examination timetable for all forms has been published. Please check the Timetable section for details. Exams begin on March 28, 2024.",
      date: "Mar 15, 2024",
      time: "10:30 AM",
      category: "Academic",
      priority: "high",
      author: "Academic Office",
    },
    {
      title: "Inter-House Sports Competition",
      content:
        "The annual inter-house sports competition will take place on March 22-23, 2024. All students are encouraged to participate and support their houses.",
      date: "Mar 14, 2024",
      time: "2:15 PM",
      category: "Sports",
      priority: "normal",
      author: "Sports Department",
    },
    {
      title: "Library Hours Extended",
      content:
        "The school library will now be open until 8:00 PM on weekdays to support students preparing for exams. Weekend hours remain unchanged.",
      date: "Mar 12, 2024",
      time: "9:00 AM",
      category: "General",
      priority: "normal",
      author: "Library",
    },
    {
      title: "PTA Meeting - March 20",
      content:
        "Parents and guardians are invited to attend the PTA meeting on March 20, 2024, at 3:00 PM in the school auditorium. Attendance is highly encouraged.",
      date: "Mar 10, 2024",
      time: "11:45 AM",
      category: "PTA",
      priority: "normal",
      author: "PTA Office",
    },
  ]

  const messages = [
    {
      from: "Mr. Mensah",
      role: "Mathematics Teacher",
      subject: "Assignment Feedback",
      preview: "Great work on your recent calculus assignment. I've added some notes for improvement...",
      date: "Mar 14, 2024",
      time: "3:45 PM",
      unread: true,
    },
    {
      from: "Mrs. Osei",
      role: "Class Teacher",
      subject: "Term Report Discussion",
      preview: "I'd like to discuss your excellent performance this term. Please see me during...",
      date: "Mar 13, 2024",
      time: "10:20 AM",
      unread: true,
    },
    {
      from: "Dr. Boateng",
      role: "Physics Teacher",
      subject: "Lab Report Approved",
      preview: "Your physics practical report has been reviewed and approved. Excellent work!",
      date: "Mar 12, 2024",
      time: "2:30 PM",
      unread: false,
    },
    {
      from: "Mr. Appiah",
      role: "Housemaster",
      subject: "House Meeting Reminder",
      preview: "Reminder: House meeting this Friday at 4:00 PM. Attendance is mandatory...",
      date: "Mar 11, 2024",
      time: "9:15 AM",
      unread: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-balance">Communication & Announcements</h1>
              <p className="text-muted-foreground mt-1">Stay updated with school news and message your teachers</p>
            </div>
            <Button>
              <Send className="mr-2 h-4 w-4" />
              New Message
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {/* Unread Messages Alert */}
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary shrink-0">
                <Bell className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">You have 2 unread messages</h3>
                <p className="text-sm text-muted-foreground">Check your messages from teachers</p>
              </div>
              <Button variant="outline">View Messages</Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="announcements" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[300px]">
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          {/* Announcements */}
          <TabsContent value="announcements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Megaphone className="h-5 w-5 text-primary" />
                  School Announcements
                </CardTitle>
                <CardDescription>Latest updates and important notices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {announcements.map((announcement, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border ${announcement.priority === "high" ? "border-destructive/50 bg-destructive/5" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {announcement.priority === "high" && (
                            <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
                          )}
                          <h4 className="font-semibold text-lg">{announcement.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{announcement.content}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {announcement.date} at {announcement.time}
                            </span>
                          </div>
                          <span>•</span>
                          <span>{announcement.author}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 shrink-0">
                        <Badge
                          variant={announcement.priority === "high" ? "destructive" : "outline"}
                          className={announcement.priority === "high" ? "" : ""}
                        >
                          {announcement.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Announcement Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Filter by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-4">
                  <Button variant="outline">All Announcements</Button>
                  <Button variant="outline">Academic</Button>
                  <Button variant="outline">Sports</Button>
                  <Button variant="outline">General</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages */}
          <TabsContent value="messages" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Messages List */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Your Messages
                    </CardTitle>
                    <CardDescription>Direct messages from teachers and staff</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {messages.map((message, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors ${message.unread ? "bg-primary/5 border-primary/20" : ""}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                            <User className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold truncate">{message.from}</h4>
                                <p className="text-xs text-muted-foreground">{message.role}</p>
                              </div>
                              <div className="flex flex-col items-end gap-1 shrink-0">
                                <span className="text-xs text-muted-foreground whitespace-nowrap">{message.date}</span>
                                {message.unread && (
                                  <Badge className="bg-primary text-primary-foreground text-xs">New</Badge>
                                )}
                              </div>
                            </div>
                            <h5 className="font-medium text-sm mb-1">{message.subject}</h5>
                            <p className="text-sm text-muted-foreground line-clamp-2">{message.preview}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Compose Message */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>Contact your teachers or housemaster</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="recipient">To</Label>
                      <Select>
                        <SelectTrigger id="recipient">
                          <SelectValue placeholder="Select recipient" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="class-teacher">Mrs. Osei (Class Teacher)</SelectItem>
                          <SelectItem value="housemaster">Mr. Appiah (Housemaster)</SelectItem>
                          <SelectItem value="math">Mr. Mensah (Mathematics)</SelectItem>
                          <SelectItem value="physics">Dr. Boateng (Physics)</SelectItem>
                          <SelectItem value="chemistry">Dr. Adjei (Chemistry)</SelectItem>
                          <SelectItem value="english">Mrs. Osei (English)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="assignment">Assignment Question</SelectItem>
                          <SelectItem value="absence">Absence Notification</SelectItem>
                          <SelectItem value="appointment">Request Appointment</SelectItem>
                          <SelectItem value="clarification">Clarification Needed</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Type your message here..." rows={6} />
                    </div>
                    <Button className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Contacts */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Contacts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <User className="mr-2 h-4 w-4" />
                      Class Teacher
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <User className="mr-2 h-4 w-4" />
                      Housemaster
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <User className="mr-2 h-4 w-4" />
                      HOD Science
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
