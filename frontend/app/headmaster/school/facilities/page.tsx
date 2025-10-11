import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Building2, AlertCircle, CheckCircle, Clock, MoreVertical, Eye, Edit, Download } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Sidebar } from "@/components/headmaster/layout/Sidebar"
import Header from "@/components/headmaster/layout/Header"

const facilities = [
  {
    id: "FAC001",
    name: "Science Laboratory Block",
    type: "Academic",
    capacity: 120,
    status: "Operational",
    condition: "Good",
    lastMaintenance: "2024-12-15",
  },
  {
    id: "FAC002",
    name: "Main Library",
    type: "Academic",
    capacity: 200,
    status: "Operational",
    condition: "Excellent",
    lastMaintenance: "2025-01-05",
  },
  {
    id: "FAC003",
    name: "Computer Laboratory",
    type: "Academic",
    capacity: 60,
    status: "Under Maintenance",
    condition: "Fair",
    lastMaintenance: "2024-11-20",
  },
  {
    id: "FAC004",
    name: "Sports Complex",
    type: "Recreation",
    capacity: 500,
    status: "Operational",
    condition: "Good",
    lastMaintenance: "2024-10-10",
  },
  {
    id: "FAC005",
    name: "Dining Hall",
    type: "Amenity",
    capacity: 800,
    status: "Operational",
    condition: "Good",
    lastMaintenance: "2024-12-01",
  },
  {
    id: "FAC006",
    name: "Dormitory Block A",
    type: "Residential",
    capacity: 250,
    status: "Operational",
    condition: "Fair",
    lastMaintenance: "2024-09-15",
  },
]

const maintenanceRequests = [
  {
    id: 1,
    facility: "Computer Laboratory",
    issue: "Air conditioning not working",
    priority: "High",
    date: "2025-01-08",
  },
  { id: 2, facility: "Dormitory Block A", issue: "Plumbing repairs needed", priority: "Medium", date: "2025-01-07" },
  { id: 3, facility: "Sports Complex", issue: "Lighting replacement", priority: "Low", date: "2025-01-06" },
  { id: 4, facility: "Main Library", issue: "Roof leak inspection", priority: "High", date: "2025-01-05" },
]

export default function FacilitiesPage() {
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
              <h1 className="text-3xl font-bold text-foreground">Facilities</h1>
              <p className="text-muted-foreground mt-1">Manage school buildings and infrastructure</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Facility
              </Button>
            </div>
          </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">24</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Operational</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">22</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Under Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">2</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">4</div>
            </CardContent>
          </Card>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {facilities.map((facility) => (
            <Card key={facility.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-5 h-5 text-primary" />
                      <CardTitle className="text-foreground">{facility.name}</CardTitle>
                    </div>
                    <CardDescription className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {facility.type}
                      </Badge>
                      <span className="text-xs">Capacity: {facility.capacity}</span>
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
                        Edit Facility
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge
                    variant={
                      facility.status === "Operational"
                        ? "default"
                        : facility.status === "Under Maintenance"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {facility.status === "Operational" && <CheckCircle className="w-3 h-3 mr-1" />}
                    {facility.status === "Under Maintenance" && <Clock className="w-3 h-3 mr-1" />}
                    {facility.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Condition</span>
                  <Badge
                    variant={
                      facility.condition === "Excellent"
                        ? "default"
                        : facility.condition === "Good"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {facility.condition}
                  </Badge>
                </div>
                <div className="pt-2 border-t border-border">
                  <div className="text-xs text-muted-foreground">
                    Last Maintenance: {new Date(facility.lastMaintenance).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Maintenance Requests */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                  Maintenance Requests
                </CardTitle>
                <CardDescription>Pending facility maintenance and repairs</CardDescription>
              </div>
              <Button size="sm" variant="outline">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {maintenanceRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-start justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-foreground">{request.facility}</h4>
                      <Badge
                        variant={
                          request.priority === "High"
                            ? "destructive"
                            : request.priority === "Medium"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {request.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{request.issue}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Reported: {new Date(request.date).toLocaleDateString()}
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Assign
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Facility Utilization */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Facility Utilization</CardTitle>
            <CardDescription>Current usage rates of major facilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Main Library", utilization: 85 },
                { name: "Computer Laboratory", utilization: 72 },
                { name: "Science Laboratory", utilization: 68 },
                { name: "Sports Complex", utilization: 55 },
                { name: "Dining Hall", utilization: 92 },
                { name: "Dormitory Block A", utilization: 95 },
              ].map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{item.name}</span>
                    <span className="text-sm font-bold text-foreground">{item.utilization}%</span>
                  </div>
                  <Progress value={item.utilization} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        </main>
      </div>
    </div>
  )
}
