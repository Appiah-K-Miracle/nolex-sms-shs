import { Sidebar } from '@/components/hod/layout/Sidebar'
import Header from '@/components/hod/layout/Header'
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Megaphone, Users, Calendar } from "lucide-react"

const announcements = [
    {
        id: 1,
        title: "Department Meeting - Curriculum Review",
        message: "All teachers are required to attend the department meeting on Friday to discuss curriculum updates.",
        date: "2024-02-20",
        audience: "All Teachers",
        status: "Sent",
    },
    {
        id: 2,
        title: "Midterm Exam Schedule Released",
        message: "The midterm examination schedule has been finalized. Please check your assigned invigilation duties.",
        date: "2024-02-18",
        audience: "All Teachers",
        status: "Sent",
    },
    {
        id: 3,
        title: "Laboratory Equipment Maintenance",
        message: "The science laboratory will be closed for equipment maintenance from March 1-3.",
        date: "2024-02-15",
        audience: "Science Teachers",
        status: "Sent",
    },
]

export default function AnnouncementsPage() {
    return (
    <div className="flex min-h-screen bg-gray-50">
        <div className="hidden lg:block w-64 flex-shrink-0">
            <Sidebar />
        </div>
        <div className="flex-1 flex flex-col">
            <Header title="Announcements" subtitle="Send announcements to department teachers and students" actionButton={
            <Button asChild className="bg-green-700 text-white rounded-md hover:bg-green-800">
                <a href="/hod/systems/announcements/new">
                <Plus className="mr-2 h-4 w-4" />
                New Announcement
                </a>
            </Button>
            } />

            <main className="flex-1 space-y-4 p-8">
                {announcements.map((announcement) => (
                <Card key={announcement.id}>
                    <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Megaphone className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                        <div className="flex items-start justify-between">
                            <div>
                            <h3 className="font-semibold text-lg">{announcement.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{announcement.message}</p>
                            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{announcement.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                <span>{announcement.audience}</span>
                                </div>
                            </div>
                            </div>
                            <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                            {announcement.status}
                            </Badge>
                        </div>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </main>
        </div>
    </div>
    )
}
