import { FileText, Send, Calendar, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const shortcuts = [
  {
    title: "Reports Hub",
    description: "Academic, Financial, HR & More",
    icon: FileText,
    color: "bg-chart-1",
  },
  {
    title: "Send School Notice",
    description: "SMS / Email to Students & Staff",
    icon: Send,
    color: "bg-chart-2",
  },
  {
    title: "Academic Calendar",
    description: "View & Manage School Events",
    icon: Calendar,
    color: "bg-chart-3",
  },
  {
    title: "Top Performers",
    description: "Students & Teachers Recognition",
    icon: Trophy,
    color: "bg-chart-4",
  },
]

export function QuickShortcuts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {shortcuts.map((shortcut, index) => {
        const Icon = shortcut.icon
        return (
          <Card key={index} className="border-border bg-card hover:shadow-lg transition-all cursor-pointer group">
            <CardContent className="px-6">
              <div
                className={`w-10 h-10 rounded-lg ${shortcut.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}
              >
                <Icon className="h-4 w-4 text-background" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{shortcut.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{shortcut.description}</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Open
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
export default QuickShortcuts