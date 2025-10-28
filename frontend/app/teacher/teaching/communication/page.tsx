import { DashboardLayout } from "@/components/teacher/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Search, MessageSquare } from "lucide-react"

const messages = [
  {
    id: "1",
    from: "Mrs. Akosua Mensah",
    role: "Parent",
    subject: "Inquiry about Mathematics Progress",
    preview: "Good morning, I would like to discuss my daughter's recent test scores...",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: "2",
    from: "Mr. Yaw Boateng",
    role: "Parent",
    subject: "Absence Notification",
    preview: "My son will be absent tomorrow due to a medical appointment...",
    time: "5 hours ago",
    unread: true,
  },
  {
    id: "3",
    from: "Ama Osei",
    role: "Student",
    subject: "Assignment Question",
    preview: "Hello sir, I have a question about problem 5 in the homework...",
    time: "1 day ago",
    unread: false,
  },
]

export default function CommunicationPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Communication</h1>
            <p className="text-gray-600">Message students and parents</p>
          </div>
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            <Send className="mr-2 h-4 w-4" />
            New Message
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-base text-gray-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-white text-gray-900 hover:bg-gray-50">
                  <MessageSquare className="mr-2 h-4 w-4 text-green-700" />
                  Message Class
                </Button>
                <Button variant="outline" className="w-full justify-start bg-white text-gray-900 hover:bg-gray-50">
                  <MessageSquare className="mr-2 h-4 w-4 text-green-700" />
                  Message Parents
                </Button>
                <Button variant="outline" className="w-full justify-start bg-white text-gray-900 hover:bg-gray-50">
                  <MessageSquare className="mr-2 h-4 w-4 text-green-700" />
                  Send Announcement
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-base text-gray-900">Message Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Unread</span>
                  <Badge variant="destructive" className="bg-red-600 text-white">8</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Sent Today</span>
                  <Badge variant="default" className="bg-green-700 text-white">12</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total This Week</span>
                  <Badge variant="outline" className="text-green-700 border-green-700">45</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />
                  <Input placeholder="Search messages..." className="pl-10" />
                </div>
              </CardHeader>
            </Card>

            <div className="space-y-3">
              {messages.map((message) => (
                <Card key={message.id} className={message.unread ? "border-green-700" : ""}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={`/.jpg?height=40&width=40&query=${message.from}`} />
                        <AvatarFallback className="bg-green-700 text-white">
                          {message.from
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900">{message.from}</span>
                            <Badge variant="outline" className="text-xs text-green-700 border-green-700">
                              {message.role}
                            </Badge>
                            {message.unread && (
                              <Badge variant="destructive" className="text-xs bg-red-600 text-white">
                                New
                              </Badge>
                            )}
                          </div>
                          <span className="text-xs text-gray-600">{message.time}</span>
                        </div>
                        <CardTitle className="text-sm font-medium text-gray-900">{message.subject}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">{message.preview}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Reply
                      </Button>
                      <Button variant="outline" size="sm">
                        View Full Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
