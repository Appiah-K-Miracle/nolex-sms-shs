"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Send, User, Clock } from "lucide-react"
import { useState } from "react"

export default function CommunicationPage() {
  const [message, setMessage] = useState("")
  const [recipient, setRecipient] = useState("")

  const messages = [
    {
      id: 1,
      from: "Mrs. Akosua Boateng",
      role: "Class Teacher",
      date: "Feb 8, 2025",
      time: "2:30 PM",
      subject: "Mid-Term Examination Preparation",
      message:
        "Dear Mr. Mensah, I wanted to inform you that Kwame is well-prepared for the upcoming mid-term examinations. He has been consistently completing his assignments and participating actively in class. Keep encouraging him!",
      status: "read",
    },
    {
      id: 2,
      from: "Mr. Kwabena Owusu",
      role: "Housemaster",
      date: "Feb 5, 2025",
      time: "10:15 AM",
      subject: "Visiting Day Reminder",
      message:
        "Good morning. This is to remind you that our next visiting day is scheduled for February 28, 2025. Visiting hours are from 10:00 AM to 4:00 PM. Please bring your visitor's pass.",
      status: "read",
    },
    {
      id: 3,
      from: "School Administration",
      role: "Bursar's Office",
      date: "Feb 1, 2025",
      time: "9:00 AM",
      subject: "Fee Payment Reminder",
      message:
        "Dear Parent/Guardian, this is a friendly reminder that the outstanding balance of GH₵ 450 is due by February 20, 2025. Please make arrangements to clear this balance to avoid any inconvenience.",
      status: "unread",
    },
  ]

  const handleSendMessage = () => {
    // Handle message sending logic
    console.log("Sending message to:", recipient, "Message:", message)
    setMessage("")
    setRecipient("")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Communication</h1>
        <p className="text-muted-foreground">Message teachers and view school communications</p>
      </div>

      {/* Send New Message */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5" />
            Send New Message
          </CardTitle>
          <CardDescription>Contact class teacher, housemaster, or administration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="recipient">Recipient</Label>
            <Select value={recipient} onValueChange={setRecipient}>
              <SelectTrigger id="recipient">
                <SelectValue placeholder="Select recipient" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="class-teacher">Mrs. Akosua Boateng - Class Teacher</SelectItem>
                <SelectItem value="housemaster">Mr. Kwabena Owusu - Housemaster</SelectItem>
                <SelectItem value="headmaster">Mr. Kofi Asare - Headmaster</SelectItem>
                <SelectItem value="bursar">Bursar's Office</SelectItem>
                <SelectItem value="admin">School Administration</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
            />
          </div>
          <Button onClick={handleSendMessage} disabled={!recipient || !message}>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </CardContent>
      </Card>

      {/* Message Inbox */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Message Inbox
          </CardTitle>
          <CardDescription>Messages from teachers and school administration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-4 rounded-lg border ${
                  msg.status === "unread" ? "bg-primary/5 border-primary/20" : "bg-card"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{msg.from}</p>
                      <p className="text-sm text-muted-foreground">{msg.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {msg.status === "unread" && <Badge variant="default">New</Badge>}
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{msg.date}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {msg.time}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ml-13">
                  <p className="font-medium text-sm mb-1">{msg.subject}</p>
                  <p className="text-sm text-muted-foreground">{msg.message}</p>
                  <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                    Reply
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Contacts */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Contacts</CardTitle>
          <CardDescription>Important school contacts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex items-start gap-3 p-3 rounded-lg border">
              <User className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Mrs. Akosua Boateng</p>
                <p className="text-sm text-muted-foreground">Class Teacher - Form 3A</p>
                <p className="text-sm text-muted-foreground">Phone: +233 24 123 4567</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border">
              <User className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Mr. Kwabena Owusu</p>
                <p className="text-sm text-muted-foreground">Housemaster - Nkrumah House</p>
                <p className="text-sm text-muted-foreground">Phone: +233 24 234 5678</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border">
              <User className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Mr. Kofi Asare</p>
                <p className="text-sm text-muted-foreground">Headmaster</p>
                <p className="text-sm text-muted-foreground">Phone: +233 24 345 6789</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border">
              <User className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">School Administration</p>
                <p className="text-sm text-muted-foreground">General Inquiries</p>
                <p className="text-sm text-muted-foreground">Phone: +233 30 456 7890</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
