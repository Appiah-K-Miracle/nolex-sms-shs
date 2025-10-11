"use client"

import { ArrowLeft, Edit, Mail, Phone, MapPin, Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar } from "@/components/headmaster/layout/Sidebar"
import Header from "@/components/headmaster/layout/Header"

export default function ViewStaffPage({ params }: { params: { id: string } }) {
  // Mock staff data
  const staff = {
    id: params.id,
    firstName: "Kwabena",
    lastName: "Agyeman",
    middleName: "Yaw",
    staffId: "STF2024001",
    photo: "/placeholder.svg?height=200&width=200",
    dateOfBirth: "1980-07-12",
    gender: "Male",
    nationality: "Ghanaian",
    employmentDate: "2018-01-15",
    employmentType: "Permanent",
    position: "Librarian",
    department: "Library",
    salary: "3200",
    highestQualification: "Bachelor's Degree",
    institution: "University of Ghana",
    certifications: "Library Science Certificate, Digital Archives Management",
    email: "kwabena.agyeman@school.edu.gh",
    phone: "+233 24 789 0123",
    address: "78 Ring Road, Accra, Ghana",
    emergencyName: "Abena Agyeman",
    emergencyRelation: "Spouse",
    emergencyPhone: "+233 20 456 7890",
    status: "Active",
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-background">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-8 space-y-6">
          {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/headmaster/school/staff">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Staff Profile</h1>
            <p className="text-muted-foreground">View staff member information</p>
          </div>
        </div>
        <Link href={`/headmaster/school/staff/${params.id}/edit`}>
          <Button>
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={staff.photo || "/placeholder.svg"}
                    alt={`${staff.firstName} ${staff.lastName}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{`${staff.firstName} ${staff.middleName} ${staff.lastName}`}</h2>
                  <p className="text-muted-foreground">{staff.staffId}</p>
                </div>
                <Badge variant={staff.status === "Active" ? "default" : "secondary"}>{staff.status}</Badge>
                <div className="w-full pt-4 border-t space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span>{staff.position}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                    <span>{staff.department} Department</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="personal" className="space-y-4">
            <TabsList>
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="employment">Employment</TabsTrigger>
              <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">First Name</p>
                      <p className="font-medium">{staff.firstName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Last Name</p>
                      <p className="font-medium">{staff.lastName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Middle Name</p>
                      <p className="font-medium">{staff.middleName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date of Birth</p>
                      <p className="font-medium">{new Date(staff.dateOfBirth).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Gender</p>
                      <p className="font-medium">{staff.gender}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Nationality</p>
                      <p className="font-medium">{staff.nationality}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="employment" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Employment Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Staff ID</p>
                      <p className="font-medium">{staff.staffId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Employment Date</p>
                      <p className="font-medium">{new Date(staff.employmentDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Employment Type</p>
                      <p className="font-medium">{staff.employmentType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Position</p>
                      <p className="font-medium">{staff.position}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Department</p>
                      <p className="font-medium">{staff.department}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Monthly Salary</p>
                      <p className="font-medium">GHS {staff.salary}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="qualifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Qualifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Highest Qualification</p>
                      <p className="font-medium">{staff.highestQualification}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Institution</p>
                      <p className="font-medium">{staff.institution}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-muted-foreground">Professional Certifications</p>
                      <p className="font-medium">{staff.certifications}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{staff.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">{staff.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="font-medium">{staff.address}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3">Emergency Contact</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-medium">{staff.emergencyName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Relationship</p>
                        <p className="font-medium">{staff.emergencyRelation}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="font-medium">{staff.emergencyPhone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
        </main>
      </div>
    </div>
  )
}
