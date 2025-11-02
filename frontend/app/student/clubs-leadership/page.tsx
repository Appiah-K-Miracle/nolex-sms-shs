import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Trophy, Star, Clock, MapPin, UserPlus, FileText } from "lucide-react"

export default function ClubsPage() {
  const myClubs = [
    {
      name: "Debate Society",
      role: "Member",
      meetingDay: "Wednesday",
      meetingTime: "3:30 PM",
      location: "Room 204",
      nextMeeting: "Jan 15, 2025",
      members: 24,
      status: "Active",
    },
    {
      name: "Science Club",
      role: "Secretary",
      meetingDay: "Friday",
      meetingTime: "4:00 PM",
      location: "Science Lab",
      nextMeeting: "Jan 17, 2025",
      members: 18,
      status: "Active",
    },
  ]

  const availableClubs = [
    {
      name: "Drama Club",
      description: "Explore theatrical arts and stage performances",
      meetingDay: "Tuesday",
      meetingTime: "3:30 PM",
      members: 32,
      category: "Arts",
    },
    {
      name: "Football Team",
      description: "Competitive football training and matches",
      meetingDay: "Monday & Thursday",
      meetingTime: "4:00 PM",
      members: 28,
      category: "Sports",
    },
    {
      name: "Coding Club",
      description: "Learn programming and build projects",
      meetingDay: "Wednesday",
      meetingTime: "4:00 PM",
      members: 15,
      category: "Technology",
    },
    {
      name: "Environmental Club",
      description: "Promote sustainability and environmental awareness",
      meetingDay: "Friday",
      meetingTime: "3:30 PM",
      members: 20,
      category: "Service",
    },
  ]

  const upcomingEvents = [
    {
      title: "Inter-School Debate Competition",
      club: "Debate Society",
      date: "Jan 20, 2025",
      time: "10:00 AM",
      location: "Main Hall",
    },
    {
      title: "Science Fair Preparation",
      club: "Science Club",
      date: "Jan 22, 2025",
      time: "2:00 PM",
      location: "Science Lab",
    },
    {
      title: "Football Match vs St. Mary's",
      club: "Football Team",
      date: "Jan 25, 2025",
      time: "3:00 PM",
      location: "School Field",
    },
  ]

  const achievements = [
    {
      title: "1st Place - Regional Debate",
      club: "Debate Society",
      date: "Dec 2024",
      icon: Trophy,
    },
    {
      title: "Best Science Project Award",
      club: "Science Club",
      date: "Nov 2024",
      icon: Star,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-balance">Clubs & Societies</h1>
        <p className="text-muted-foreground mt-1">Join clubs, participate in activities, and develop your talents</p>
      </div>

      {/* My Clubs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">My Clubs</h2>
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            View Attendance
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {myClubs.map((club, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{club.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">{club.role}</Badge>
                      <Badge variant="outline" className="bg-ghana-green/10 text-ghana-green border-ghana-green">
                        {club.status}
                      </Badge>
                    </CardDescription>
                  </div>
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {club.meetingDay}s at {club.meetingTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Next meeting: {club.nextMeeting}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{club.members} members</span>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    Leave Club
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Club activities and competitions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-start justify-between p-3 rounded-lg border">
                <div className="space-y-1">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.club}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </span>
                  </div>
                </div>
                <Button size="sm">RSVP</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
          <CardDescription>Awards and recognitions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg border bg-ghana-gold/5">
                  <div className="h-10 w-10 rounded-full bg-ghana-gold/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-ghana-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{achievement.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {achievement.club} • {achievement.date}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Available Clubs */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Available Clubs</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {availableClubs.map((club, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{club.name}</CardTitle>
                    <Badge variant="outline" className="mt-2">
                      {club.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{club.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {club.meetingDay} at {club.meetingTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{club.members} members</span>
                  </div>
                </div>
                <Button size="sm" className="w-full">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Join Club
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
