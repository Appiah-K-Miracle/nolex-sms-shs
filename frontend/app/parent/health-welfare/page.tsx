import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Heart, Activity, Pill, AlertCircle, CheckCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HealthPage() {
  const sickBayVisits = [
    {
      date: "Feb 7, 2025",
      complaint: "Headache",
      treatment: "Paracetamol administered, rest for 2 hours",
      nurse: "Nurse Abena Osei",
      returnTime: "11:30 AM",
    },
    {
      date: "Jan 20, 2025",
      complaint: "Minor stomach upset",
      treatment: "Oral rehydration solution, light meals advised",
      nurse: "Nurse Abena Osei",
      returnTime: "2:00 PM",
    },
  ]

  const medications = [
    {
      name: "Vitamin C Supplement",
      dosage: "500mg daily",
      frequency: "Once daily with breakfast",
      startDate: "Jan 1, 2025",
      endDate: "Mar 31, 2025",
      status: "active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Health & Welfare</h1>
          <p className="text-muted-foreground">Medical records and sick bay visits</p>
        </div>
        <Select defaultValue="term3-2025">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select term" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="term3-2025">Term 3, 2024/25</SelectItem>
            <SelectItem value="term2-2025">Term 2, 2024/25</SelectItem>
            <SelectItem value="term1-2025">Term 1, 2024/25</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Health Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Health Status</CardTitle>
            <Heart className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Good</div>
            <p className="text-xs text-muted-foreground mt-1">No major concerns</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sick Bay Visits</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1">This term</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Medications</CardTitle>
            <Pill className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground mt-1">Vitamin supplement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Allergies</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">None</div>
            <p className="text-xs text-muted-foreground mt-1">No known allergies</p>
          </CardContent>
        </Card>
      </div>

      {/* Health Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Current Health Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
              <Heart className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-green-900 dark:text-green-100">Good Overall Health</p>
                <p className="text-sm text-green-700 dark:text-green-200 mt-1">
                  Kwame is in good health with no major medical concerns. He maintains regular physical activity through
                  sports and games. The school nurse monitors his well-being regularly.
                </p>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Vaccinations</p>
                  <p className="text-xs text-muted-foreground">Up to date</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Physical Fitness</p>
                  <p className="text-xs text-muted-foreground">Active & healthy</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Vision</p>
                  <p className="text-xs text-muted-foreground">Normal</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Dental Health</p>
                  <p className="text-xs text-muted-foreground">Good condition</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sick Bay Visits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Sick Bay Visits & Return Notes
          </CardTitle>
          <CardDescription>Record of medical attention received at school</CardDescription>
        </CardHeader>
        <CardContent>
          {sickBayVisits.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Complaint</TableHead>
                  <TableHead>Treatment</TableHead>
                  <TableHead>Attended By</TableHead>
                  <TableHead>Return Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sickBayVisits.map((visit, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{visit.date}</TableCell>
                    <TableCell>{visit.complaint}</TableCell>
                    <TableCell className="max-w-xs">{visit.treatment}</TableCell>
                    <TableCell className="text-muted-foreground">{visit.nurse}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{visit.returnTime}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mb-3" />
              <p className="font-medium text-lg">No Sick Bay Visits</p>
              <p className="text-sm text-muted-foreground mt-1">Kwame has not required medical attention this term.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Medications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="h-5 w-5" />
            Current Medications
          </CardTitle>
          <CardDescription>Prescribed medications and supplements</CardDescription>
        </CardHeader>
        <CardContent>
          {medications.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Medication</TableHead>
                  <TableHead>Dosage</TableHead>
                  <TableHead>Frequency</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medications.map((med, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{med.name}</TableCell>
                    <TableCell>{med.dosage}</TableCell>
                    <TableCell>{med.frequency}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {med.startDate} - {med.endDate}
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-100">
                        Active
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Pill className="h-12 w-12 text-muted-foreground mb-3" />
              <p className="font-medium text-lg">No Active Medications</p>
              <p className="text-sm text-muted-foreground mt-1">No medications currently prescribed.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Medical Information */}
      <Card>
        <CardHeader>
          <CardTitle>Medical Information on File</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm font-medium">Blood Type</p>
              <p className="text-sm text-muted-foreground">O+</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Known Allergies</p>
              <p className="text-sm text-muted-foreground">None</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Emergency Contact</p>
              <p className="text-sm text-muted-foreground">Mr. Kwame Mensah - +233 24 123 4567</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Family Doctor</p>
              <p className="text-sm text-muted-foreground">Dr. Ama Asante - Ridge Hospital</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* School Nurse Note */}
      <Card>
        <CardHeader>
          <CardTitle>School Nurse's Note</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="font-medium">Nurse Abena Osei - School Nurse</p>
            <p className="text-sm text-muted-foreground">
              "Kwame maintains good health and hygiene practices. He reports to the sick bay promptly when feeling
              unwell and follows medical advice. His parents are responsive to health-related communications. Continue
              encouraging healthy eating habits and regular physical activity."
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
