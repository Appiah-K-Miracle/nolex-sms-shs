import { Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const activities = [
  {
    id: 1,
    action: "Form 3A attendance recorded at 92%",
    time: "5 minutes ago",
    type: "attendance",
  },
  {
    id: 2,
    action: "₵12,500 collected in fee payments today",
    time: "15 minutes ago",
    type: "finance",
  },
  {
    id: 3,
    action: "Teacher Sarah Asante approved leave request",
    time: "1 hour ago",
    type: "hr",
  },
  {
    id: 4,
    action: "Two disciplinary cases awaiting judgment",
    time: "2 hours ago",
    type: "discipline",
  },
  {
    id: 5,
    action: "New admission application from Kwame Osei",
    time: "3 hours ago",
    type: "admission",
  },
  {
    id: 6,
    action: "Form 2B Mathematics exam results uploaded",
    time: "4 hours ago",
    type: "academic",
  },
  {
    id: 7,
    action: "Library purchase request submitted (₵8,500)",
    time: "5 hours ago",
    type: "purchase",
  },
  {
    id: 8,
    action: "Staff meeting scheduled for tomorrow at 10:00 AM",
    time: "6 hours ago",
    type: "event",
  },
  {
    id: 9,
    action: "Form 1C attendance recorded at 95%",
    time: "7 hours ago",
    type: "attendance",
  },
  {
    id: 10,
    action: "Payroll processing initiated for this month",
    time: "8 hours ago",
    type: "finance",
  },
]

const typeColors: Record<string, string> = {
  attendance: "bg-chart-1",
  finance: "bg-chart-2",
  hr: "bg-chart-3",
  discipline: "bg-destructive",
  admission: "bg-chart-4",
  academic: "bg-chart-5",
  purchase: "bg-chart-2",
  event: "bg-chart-1",
}

export function ActivityFeed() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[340px] pr-4">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={activity.id} className="flex gap-4">
                <div className="relative">
                  <div className={`w-2 h-2 rounded-full ${typeColors[activity.type]} mt-2`} />
                  {index < activities.length - 1 && (
                    <div className="absolute left-1/2 top-4 w-px h-full bg-border -translate-x-1/2" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm text-foreground font-medium">{activity.action}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
