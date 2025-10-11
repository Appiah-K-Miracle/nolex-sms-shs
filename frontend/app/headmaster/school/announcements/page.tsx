import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Megaphone, Pin, Edit, Trash2, MoreVertical, Eye, Download } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar } from "@/components/headmaster/layout/Sidebar"
import Header from "@/components/headmaster/layout/Header"

const announcements = [
  {
    id: 1,
    title: "Mid-Term Examinations Schedule Released",
    content:
      "The mid-term examination schedule for all forms has been released. Students are advised to check the notice board for their specific timetables.",
    category: "Academic",
    priority: "High",
    date: "2025-01-08",
    author: "Academic Office",
    pinned: true,
  },
  {
    id: 2,
    title: "Parent-Teacher Conference - Form 1 & 2",
    content:
      "Parents of Form 1 and Form 2 students are invited to attend the parent-teacher conference on January 22, 2025. Please confirm your attendance.",
    category: "Event",
    priority: "High",
    date: "2025-01-07",
    author: "Administration",
    pinned: true,
  },
  {
    id: 3,
    title: "Library Hours Extended",
    content:
      "The school library will now be open until 8:00 PM on weekdays to accommodate students preparing for examinations.",
    category: "General",
    priority: "Medium",
    date: "2025-01-06",
    author: "Library",
    pinned: false,
  },
  {
    id: 4,
    title: "Inter-House Sports Competition",
    content:
      "The annual inter-house sports competition will take place on February 5, 2025. All students are encouraged to participate.",
    category: "Event",
    priority: "Medium",
    date: "2025-01-05",
    author: "Sports Department",
    pinned: false,
  },
  {
    id: 5,
    title: "Fee Payment Deadline Reminder",
    content:
      "This is a reminder that the deadline for term fee payment is January 20, 2025. Please ensure all outstanding fees are cleared.",
    category: "Finance",
    priority: "High",
    date: "2025-01-04",
    author: "Finance Office",
    pinned: false,
  },
]

export default function AnnouncementsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-background">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Announcements</h1>
              <p className="text-muted-foreground mt-1">Manage school-wide announcements and notices</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New Announcement
              </Button>
            </div>
          </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">28</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">15</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pinned</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">2</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">5</div>
            </CardContent>
          </Card>
        </div>

        {/* Announcements List */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="event">Events</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className={announcement.pinned ? "border-primary" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {announcement.pinned && <Pin className="w-4 h-4 text-primary" />}
                        <CardTitle className="text-foreground">{announcement.title}</CardTitle>
                      </div>
                      <CardDescription className="flex items-center gap-2 flex-wrap">
                        <Badge variant={announcement.priority === "High" ? "destructive" : "secondary"}>
                          {announcement.priority}
                        </Badge>
                        <Badge variant="outline">{announcement.category}</Badge>
                        <span className="text-xs">
                          {new Date(announcement.date).toLocaleDateString()} • {announcement.author}
                        </span>
                      </CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pin className="w-4 h-4 mr-2" />
                          {announcement.pinned ? "Unpin" : "Pin"}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">{announcement.content}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="academic" className="space-y-4">
            {announcements
              .filter((a) => a.category === "Academic")
              .map((announcement) => (
                <Card key={announcement.id}>
                  <CardHeader>
                    <CardTitle className="text-foreground">{announcement.title}</CardTitle>
                    <CardDescription>{new Date(announcement.date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{announcement.content}</p>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="event" className="space-y-4">
            {announcements
              .filter((a) => a.category === "Event")
              .map((announcement) => (
                <Card key={announcement.id}>
                  <CardHeader>
                    <CardTitle className="text-foreground">{announcement.title}</CardTitle>
                    <CardDescription>{new Date(announcement.date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{announcement.content}</p>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="general" className="space-y-4">
            {announcements
              .filter((a) => a.category === "General")
              .map((announcement) => (
                <Card key={announcement.id}>
                  <CardHeader>
                    <CardTitle className="text-foreground">{announcement.title}</CardTitle>
                    <CardDescription>{new Date(announcement.date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{announcement.content}</p>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="finance" className="space-y-4">
            {announcements
              .filter((a) => a.category === "Finance")
              .map((announcement) => (
                <Card key={announcement.id}>
                  <CardHeader>
                    <CardTitle className="text-foreground">{announcement.title}</CardTitle>
                    <CardDescription>{new Date(announcement.date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{announcement.content}</p>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-primary" />
              Quick Actions
            </CardTitle>
            <CardDescription>Common announcement templates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Button variant="outline" className="justify-start bg-transparent">
                <Plus className="w-4 h-4 mr-2" />
                Exam Schedule
              </Button>
              <Button variant="outline" className="justify-start bg-transparent">
                <Plus className="w-4 h-4 mr-2" />
                Event Invitation
              </Button>
              <Button variant="outline" className="justify-start bg-transparent">
                <Plus className="w-4 h-4 mr-2" />
                Fee Reminder
              </Button>
            </div>
          </CardContent>
        </Card>
        </main>
      </div>
    </div>
  )
}
