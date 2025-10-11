import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Save, Building2, Bell, Shield, Palette, Globe } from "lucide-react"
import { Sidebar } from "@/components/headmaster/layout/Sidebar"
import Header from "@/components/headmaster/layout/Header"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        {/* Page content */}
        <main className="flex-1 p-6 md:p-8">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Settings</h1>
                <p className="text-muted-foreground mt-1">
                  Manage school configuration and preferences
                </p>
              </div>
              <Button size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>

            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:w-auto">
                <TabsTrigger value="general" className="gap-2">
                  <Building2 className="w-4 h-4" />
                  <span className="hidden sm:inline">General</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="gap-2">
                  <Bell className="w-4 h-4" />
                  <span className="hidden sm:inline">Notifications</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="hidden sm:inline">Security</span>
                </TabsTrigger>
                <TabsTrigger value="appearance" className="gap-2">
                  <Palette className="w-4 h-4" />
                  <span className="hidden sm:inline">Appearance</span>
                </TabsTrigger>
                <TabsTrigger value="regional" className="gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">Regional</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      School Information
                    </CardTitle>
                    <CardDescription>
                      Basic information about your school
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="school-name">School Name</Label>
                        <Input
                          id="school-name"
                          defaultValue="Ghana Senior High School"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="school-code">School Code</Label>
                        <Input id="school-code" defaultValue="GSHS-001" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        defaultValue="123 Education Avenue, Accra, Ghana"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="+233 24 123 4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="info@gshs.edu.gh"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motto">School Motto</Label>
                      <Input
                        id="motto"
                        defaultValue="Excellence Through Education"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Academic Configuration
                    </CardTitle>
                    <CardDescription>
                      Configure academic year and term settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="academic-year">
                          Current Academic Year
                        </Label>
                        <Select defaultValue="2024-2025">
                          <SelectTrigger id="academic-year">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2024-2025">2024/2025</SelectItem>
                            <SelectItem value="2025-2026">2025/2026</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="current-term">Current Term</Label>
                        <Select defaultValue="term1">
                          <SelectTrigger id="current-term">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="term1">Term 1</SelectItem>
                            <SelectItem value="term2">Term 2</SelectItem>
                            <SelectItem value="term3">Term 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="term-start">Term Start Date</Label>
                        <Input
                          id="term-start"
                          type="date"
                          defaultValue="2025-01-06"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="term-end">Term End Date</Label>
                        <Input
                          id="term-end"
                          type="date"
                          defaultValue="2025-04-15"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Email Notifications
                    </CardTitle>
                    <CardDescription>
                      Configure email notification preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Student Absences</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when students are absent
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Fee Payments</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified about fee payment updates
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Academic Performance</Label>
                        <p className="text-sm text-muted-foreground">
                          Alerts for significant grade changes
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Staff Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Notifications about staff changes
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      SMS Notifications
                    </CardTitle>
                    <CardDescription>
                      Configure SMS notification preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Emergency Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Send SMS for emergency situations
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Event Reminders</Label>
                        <p className="text-sm text-muted-foreground">
                          SMS reminders for upcoming events
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Password Policy
                    </CardTitle>
                    <CardDescription>
                      Configure password requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Require Strong Passwords</Label>
                        <p className="text-sm text-muted-foreground">
                          Enforce minimum password complexity
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="min-length">
                        Minimum Password Length
                      </Label>
                      <Select defaultValue="8">
                        <SelectTrigger id="min-length">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">6 characters</SelectItem>
                          <SelectItem value="8">8 characters</SelectItem>
                          <SelectItem value="10">10 characters</SelectItem>
                          <SelectItem value="12">12 characters</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-expiry">Password Expiry</Label>
                      <Select defaultValue="90">
                        <SelectTrigger id="password-expiry">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="60">60 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Two-Factor Authentication
                    </CardTitle>
                    <CardDescription>
                      Additional security for administrator accounts
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Require 2FA for Admins</Label>
                        <p className="text-sm text-muted-foreground">
                          Mandatory two-factor authentication
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="appearance" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Theme Settings
                    </CardTitle>
                    <CardDescription>
                      Customize the appearance of the system
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="theme">Color Theme</Label>
                      <Select defaultValue="dark">
                        <SelectTrigger id="theme">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="auto">Auto (System)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="primary-color">Primary Color</Label>
                      <div className="flex gap-2">
                        <Input
                          id="primary-color"
                          type="color"
                          defaultValue="#4ade80"
                          className="w-20 h-10"
                        />
                        <Input defaultValue="#4ade80" className="flex-1" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondary-color">Secondary Color</Label>
                      <div className="flex gap-2">
                        <Input
                          id="secondary-color"
                          type="color"
                          defaultValue="#fbbf24"
                          className="w-20 h-10"
                        />
                        <Input defaultValue="#fbbf24" className="flex-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="regional" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Regional Settings
                    </CardTitle>
                    <CardDescription>
                      Configure language, timezone, and currency
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger id="language">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="tw">Twi</SelectItem>
                          <SelectItem value="ga">Ga</SelectItem>
                          <SelectItem value="ee">Ewe</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="gmt">
                        <SelectTrigger id="timezone">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gmt">GMT (Ghana)</SelectItem>
                          <SelectItem value="wat">
                            WAT (West Africa Time)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue="ghs">
                        <SelectTrigger id="currency">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ghs">GH₵ (Ghana Cedi)</SelectItem>
                          <SelectItem value="usd">$ (US Dollar)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date-format">Date Format</Label>
                      <Select defaultValue="dd-mm-yyyy">
                        <SelectTrigger id="date-format">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
