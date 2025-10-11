"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Sidebar } from "@/components/headmaster/layout/Sidebar"
import Header from "@/components/headmaster/layout/Header"

export default function EditStaffPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock staff data
  const staff = {
    firstName: "Kwabena",
    lastName: "Agyeman",
    middleName: "Yaw",
    dateOfBirth: "1980-07-12",
    gender: "male",
    nationality: "Ghanaian",
    staffId: "STF2024001",
    employmentDate: "2018-01-15",
    employmentType: "permanent",
    position: "librarian",
    department: "library",
    salary: "3200",
    highestQualification: "bachelors",
    institution: "University of Ghana",
    certifications: "Library Science Certificate, Digital Archives Management",
    email: "kwabena.agyeman@school.edu.gh",
    phone: "+233 24 789 0123",
    address: "78 Ring Road, Accra, Ghana",
    emergencyName: "Abena Agyeman",
    emergencyRelation: "Spouse",
    emergencyPhone: "+233 20 456 7890",
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to staff view
    router.push(`/headmaster/school/staff/${params.id}`)
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
          <Link href={`/headmaster/school/staff/${params.id}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Edit Staff Member</h1>
            <p className="text-muted-foreground">Update staff information</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Basic details about the staff member</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" name="firstName" required defaultValue={staff.firstName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" name="lastName" required defaultValue={staff.lastName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="middleName">Middle Name</Label>
                <Input id="middleName" name="middleName" defaultValue={staff.middleName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input id="dateOfBirth" name="dateOfBirth" type="date" required defaultValue={staff.dateOfBirth} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select name="gender" required defaultValue={staff.gender}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality *</Label>
                <Input id="nationality" name="nationality" required defaultValue={staff.nationality} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Employment Information */}
        <Card>
          <CardHeader>
            <CardTitle>Employment Information</CardTitle>
            <CardDescription>Staff employment details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="staffId">Staff ID *</Label>
                <Input id="staffId" name="staffId" required defaultValue={staff.staffId} disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employmentDate">Employment Date *</Label>
                <Input
                  id="employmentDate"
                  name="employmentDate"
                  type="date"
                  required
                  defaultValue={staff.employmentDate}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employmentType">Employment Type *</Label>
                <Select name="employmentType" required defaultValue={staff.employmentType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="permanent">Permanent</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="temporary">Temporary</SelectItem>
                    <SelectItem value="part-time">Part-Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position *</Label>
                <Select name="position" required defaultValue={staff.position}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="administrator">Administrator</SelectItem>
                    <SelectItem value="librarian">Librarian</SelectItem>
                    <SelectItem value="lab-technician">Lab Technician</SelectItem>
                    <SelectItem value="accountant">Accountant</SelectItem>
                    <SelectItem value="secretary">Secretary</SelectItem>
                    <SelectItem value="security">Security Officer</SelectItem>
                    <SelectItem value="maintenance">Maintenance Staff</SelectItem>
                    <SelectItem value="nurse">School Nurse</SelectItem>
                    <SelectItem value="counselor">Counselor</SelectItem>
                    <SelectItem value="driver">Driver</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department *</Label>
                <Select name="department" required defaultValue={staff.department}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="administration">Administration</SelectItem>
                    <SelectItem value="library">Library</SelectItem>
                    <SelectItem value="laboratory">Laboratory</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="health">Health Services</SelectItem>
                    <SelectItem value="transport">Transport</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Monthly Salary (GHS)</Label>
                <Input id="salary" name="salary" type="number" defaultValue={staff.salary} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Qualifications */}
        <Card>
          <CardHeader>
            <CardTitle>Qualifications</CardTitle>
            <CardDescription>Educational background and certifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="highestQualification">Highest Qualification *</Label>
                <Select name="highestQualification" required defaultValue={staff.highestQualification}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="certificate">Certificate</SelectItem>
                    <SelectItem value="shs">SHS/Secondary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution">Institution</Label>
                <Input id="institution" name="institution" defaultValue={staff.institution} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="certifications">Professional Certifications</Label>
              <Textarea id="certifications" name="certifications" defaultValue={staff.certifications} rows={3} />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" required defaultValue={staff.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" required defaultValue={staff.phone} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Home Address *</Label>
                <Textarea id="address" name="address" required defaultValue={staff.address} rows={3} />
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-semibold mb-4">Emergency Contact</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emergencyName">Contact Name *</Label>
                  <Input id="emergencyName" name="emergencyName" required defaultValue={staff.emergencyName} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyRelation">Relationship *</Label>
                  <Input
                    id="emergencyRelation"
                    name="emergencyRelation"
                    required
                    defaultValue={staff.emergencyRelation}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone">Contact Phone *</Label>
                  <Input
                    id="emergencyPhone"
                    name="emergencyPhone"
                    type="tel"
                    required
                    defaultValue={staff.emergencyPhone}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4">
          <Link href={`/headmaster/school/staff/${params.id}`}>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
          <Button type="submit" disabled={isSubmitting}>
            <Save className="w-4 h-4 mr-2" />
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
        </main>
      </div>
    </div>
  )
}
