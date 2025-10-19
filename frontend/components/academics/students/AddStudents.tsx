"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Upload } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/headmaster/layout/Header";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";

export default function AddStudent() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasDisability, setHasDisability] = useState(false);
  const [onMedication, setOnMedication] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to students list
    router.push("/academics/students");
  };

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
        {/* Dashboard content */}
        <main className="flex-1 p-6 space-y-6">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/headmaster/academics/students">
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </Link>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Add New Student
                  </h1>
                  <p className="text-muted-foreground">
                    Enter student information to register
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Basic details about the student
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Enter first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Enter last name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="middleName">Middle Name</Label>
                      <Input
                        id="middleName"
                        name="middleName"
                        placeholder="Enter middle name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <Select name="gender" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality *</Label>
                      <Input
                        id="nationality"
                        name="nationality"
                        required
                        placeholder="Enter nationality"
                        defaultValue="Ghanaian"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="photo">Student Photo</Label>
                    <div className="flex items-center gap-4">
                      <Button type="button" variant="outline" size="sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Photo
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        Max file size: 2MB
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Academic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Academic Information</CardTitle>
                  <CardDescription>Student's academic details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentId">Student ID *</Label>
                      <Input
                        id="studentId"
                        name="studentId"
                        required
                        placeholder="Auto-generated"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admissionDate">Admission Date *</Label>
                      <Input
                        id="admissionDate"
                        name="admissionDate"
                        type="date"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="class">Class *</Label>
                      <Select name="class" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="form1a">Form 1A</SelectItem>
                          <SelectItem value="form1b">Form 1B</SelectItem>
                          <SelectItem value="form2a">Form 2A</SelectItem>
                          <SelectItem value="form2b">Form 2B</SelectItem>
                          <SelectItem value="form3a">Form 3A</SelectItem>
                          <SelectItem value="form3b">Form 3B</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="program">Program *</Label>
                      <Select name="program" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general-science">
                            General Science
                          </SelectItem>
                          <SelectItem value="general-arts">
                            General Arts
                          </SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="visual-arts">
                            Visual Arts
                          </SelectItem>
                          <SelectItem value="home-economics">
                            Home Economics
                          </SelectItem>
                          <SelectItem value="agriculture">
                            Agriculture
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="house">House</Label>
                      <Select name="house">
                        <SelectTrigger>
                          <SelectValue placeholder="Select house" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="red">Red House</SelectItem>
                          <SelectItem value="blue">Blue House</SelectItem>
                          <SelectItem value="green">Green House</SelectItem>
                          <SelectItem value="yellow">Yellow House</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="residentialStatus">
                        Residential Status *
                      </Label>
                      <Select name="residentialStatus" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="boarding">Boarding</SelectItem>
                          <SelectItem value="day">Day Student</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Student and guardian contact details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="student@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Home Address *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        required
                        placeholder="Enter full address"
                        rows={3}
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-4">Guardian Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="guardianName">Guardian Name *</Label>
                        <Input
                          id="guardianName"
                          name="guardianName"
                          required
                          placeholder="Enter guardian name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guardianRelation">Relationship *</Label>
                        <Select name="guardianRelation" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select relationship" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="father">Father</SelectItem>
                            <SelectItem value="mother">Mother</SelectItem>
                            <SelectItem value="guardian">Guardian</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guardianPhone">Guardian Phone *</Label>
                        <Input
                          id="guardianPhone"
                          name="guardianPhone"
                          type="tel"
                          required
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guardianEmail">Guardian Email</Label>
                        <Input
                          id="guardianEmail"
                          name="guardianEmail"
                          type="email"
                          placeholder="guardian@example.com"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Medical Information</CardTitle>
                  <CardDescription>Health and medical details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bloodGroup">Blood Group</Label>
                      <Select name="bloodGroup">
                        <SelectTrigger>
                          <SelectValue placeholder="Select blood group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="a+">A+</SelectItem>
                          <SelectItem value="a-">A-</SelectItem>
                          <SelectItem value="b+">B+</SelectItem>
                          <SelectItem value="b-">B-</SelectItem>
                          <SelectItem value="ab+">AB+</SelectItem>
                          <SelectItem value="ab-">AB-</SelectItem>
                          <SelectItem value="o+">O+</SelectItem>
                          <SelectItem value="o-">O-</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="allergies">Allergies</Label>
                      <Input
                        id="allergies"
                        name="allergies"
                        placeholder="List any allergies"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="medicalConditions">
                        Medical Conditions
                      </Label>
                      <Textarea
                        id="medicalConditions"
                        name="medicalConditions"
                        placeholder="List any medical conditions"
                        rows={3}
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasDisability"
                        checked={hasDisability}
                        onCheckedChange={(checked) =>
                          setHasDisability(checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="hasDisability"
                        className="font-semibold cursor-pointer"
                      >
                        Student has a disability
                      </Label>
                    </div>

                    {hasDisability && (
                      <div className="pl-6 space-y-4 border-l-2 border-primary/20">
                        <div className="space-y-2">
                          <Label htmlFor="disabilityType">
                            Type of Disability *
                          </Label>
                          <Select
                            name="disabilityType"
                            required={hasDisability}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select disability type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="physical">
                                Physical Disability
                              </SelectItem>
                              <SelectItem value="visual">
                                Visual Impairment
                              </SelectItem>
                              <SelectItem value="hearing">
                                Hearing Impairment
                              </SelectItem>
                              <SelectItem value="learning">
                                Learning Disability
                              </SelectItem>
                              <SelectItem value="autism">
                                Autism Spectrum
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="disabilityDetails">
                            Disability Details *
                          </Label>
                          <Textarea
                            id="disabilityDetails"
                            name="disabilityDetails"
                            required={hasDisability}
                            placeholder="Provide detailed information about the disability"
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="specialAccommodations">
                            Special Accommodations Required
                          </Label>
                          <Textarea
                            id="specialAccommodations"
                            name="specialAccommodations"
                            placeholder="List any special accommodations needed (e.g., wheelchair access, assistive devices)"
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="supportServices">
                            Support Services
                          </Label>
                          <Input
                            id="supportServices"
                            name="supportServices"
                            placeholder="List any support services required"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="onMedication"
                        checked={onMedication}
                        onCheckedChange={(checked) =>
                          setOnMedication(checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="onMedication"
                        className="font-semibold cursor-pointer"
                      >
                        Student is on medication
                      </Label>
                    </div>

                    {onMedication && (
                      <div className="pl-6 space-y-4 border-l-2 border-primary/20">
                        <div className="space-y-2">
                          <Label htmlFor="medicationName">
                            Medication Name *
                          </Label>
                          <Input
                            id="medicationName"
                            name="medicationName"
                            required={onMedication}
                            placeholder="Enter medication name"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="dosage">Dosage *</Label>
                            <Input
                              id="dosage"
                              name="dosage"
                              required={onMedication}
                              placeholder="e.g., 500mg"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="frequency">Frequency *</Label>
                            <Select name="frequency" required={onMedication}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select frequency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="once-daily">
                                  Once Daily
                                </SelectItem>
                                <SelectItem value="twice-daily">
                                  Twice Daily
                                </SelectItem>
                                <SelectItem value="three-times-daily">
                                  Three Times Daily
                                </SelectItem>
                                <SelectItem value="as-needed">
                                  As Needed
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="medicationReason">
                            Reason for Medication *
                          </Label>
                          <Textarea
                            id="medicationReason"
                            name="medicationReason"
                            required={onMedication}
                            placeholder="Explain why the student is taking this medication"
                            rows={2}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="prescribingDoctor">
                            Prescribing Doctor
                          </Label>
                          <Input
                            id="prescribingDoctor"
                            name="prescribingDoctor"
                            placeholder="Doctor's name and contact"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="medicationInstructions">
                            Special Instructions
                          </Label>
                          <Textarea
                            id="medicationInstructions"
                            name="medicationInstructions"
                            placeholder="Any special instructions for administering the medication"
                            rows={2}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-4">
                <Link href="/academics/students">
                  <Button type="button" variant="outline" className="bg-red-700 hover:bg-red-800 text-white">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" disabled={isSubmitting} className="bg-green-700 hover:bg-green-800 text-white">
                  <Save className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Saving..." : "Save Student"}
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
