import { Sidebar } from '@/components/hod/layout/Sidebar'
import Header from '@/components/hod/layout/Header'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Building, Mail, Phone } from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="hidden lg:block w-64 flex-shrink-0">
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col">
            <Header title="Settings" subtitle="Manage your profile and department settings" />

                <main className="flex-1 space-y-6 p-8">
                    <div className="mx-auto max-w-3xl space-y-6">
                    {/* Profile Settings */}
                        <Card>
                            <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input id="name" defaultValue="Dr. Kwame Mensah" className="pl-10" />
                                </div>
                                </div>
                                <div className="space-y-2">
                                <Label htmlFor="department">Department</Label>
                                <div className="relative">
                                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input id="department" defaultValue="Science Department" className="pl-10" />
                                </div>
                                </div>
                                <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input id="email" type="email" defaultValue="kwame.mensah@school.edu.gh" className="pl-10" />
                                </div>
                                </div>
                                <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input id="phone" type="tel" defaultValue="+233 24 123 4567" className="pl-10" />
                                </div>
                                </div>
                            </div>
                            <Button className="bg-green-700">Save Changes</Button>
                            </CardContent>
                        </Card>

                    {/* Department Settings */}
                        <Card>
                            <CardHeader>
                            <CardTitle>Department Settings</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="dept-name">Department Name</Label>
                                <Input id="dept-name" defaultValue="Science Department" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="dept-code">Department Code</Label>
                                <Input id="dept-code" defaultValue="SCI" />
                            </div>
                            <Button className="bg-green-700">Update Department</Button>
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    )
}
