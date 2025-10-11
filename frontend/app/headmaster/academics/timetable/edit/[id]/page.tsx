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

export default function EditTimetableEntryPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock timetable entry data
  const entry = {
    class: "form2a",
    subject: "mathematics",
    teacher: "TCH001",
    room: "A201",
    day: "monday",
    period: "1",
    startTime: "07:30",
    endTime: "08:30",
    type: "regular",
    academicYear: "2024/2025",
    term: "1",
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to timetable
    router.push("/academics/timetable")
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/academics/timetable">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Edit Timetable Entry</h1>
            <p className="text-muted-foreground">Update timetable period</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Period Information</CardTitle>
            <CardDescription>Basic details about the timetable entry</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="class">Class *</Label>
                <Select name="class" required defaultValue={entry.class}>
                  <SelectTrigger>
                    <SelectValue />
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
                <Label htmlFor="subject">Subject *</Label>
                <Select name="subject" required defaultValue={entry.subject}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="english">English Language</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                    <SelectItem value="social-studies">Social Studies</SelectItem>
                    <SelectItem value="ict">ICT</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="teacher">Teacher *</Label>
                <Select name="teacher" required defaultValue={entry.teacher}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TCH001">Mr. Kwame Asante - Mathematics</SelectItem>
                    <SelectItem value="TCH002">Mrs. Akosua Osei - English</SelectItem>
                    <SelectItem value="TCH003">Mr. Kofi Mensah - Science</SelectItem>
                    <SelectItem value="TCH004">Ms. Ama Boateng - Social Studies</SelectItem>
                    <SelectItem value="TCH005">Mr. Yaw Owusu - ICT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="room">Room *</Label>
                <Input id="room" name="room" required defaultValue={entry.room} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Information */}
        <Card>
          <CardHeader>
            <CardTitle>Schedule Details</CardTitle>
            <CardDescription>When this period occurs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="day">Day of Week *</Label>
                <Select name="day" required defaultValue={entry.day}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monday">Monday</SelectItem>
                    <SelectItem value="tuesday">Tuesday</SelectItem>
                    <SelectItem value="wednesday">Wednesday</SelectItem>
                    <SelectItem value="thursday">Thursday</SelectItem>
                    <SelectItem value="friday">Friday</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="period">Period Number *</Label>
                <Select name="period" required defaultValue={entry.period}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Period 1 (7:30 - 8:30)</SelectItem>
                    <SelectItem value="2">Period 2 (8:30 - 9:30)</SelectItem>
                    <SelectItem value="3">Period 3 (9:30 - 10:30)</SelectItem>
                    <SelectItem value="4">Period 4 (11:00 - 12:00)</SelectItem>
                    <SelectItem value="5">Period 5 (12:00 - 1:00)</SelectItem>
                    <SelectItem value="6">Period 6 (2:00 - 3:00)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startTime">Start Time *</Label>
                <Input id="startTime" name="startTime" type="time" required defaultValue={entry.startTime} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endTime">End Time *</Label>
                <Input id="endTime" name="endTime" type="time" required defaultValue={entry.endTime} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Details</CardTitle>
            <CardDescription>Optional information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type">Period Type</Label>
                <Select name="type" defaultValue={entry.type}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular">Regular Class</SelectItem>
                    <SelectItem value="practical">Practical/Lab</SelectItem>
                    <SelectItem value="tutorial">Tutorial</SelectItem>
                    <SelectItem value="exam">Examination</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="academicYear">Academic Year *</Label>
                <Input id="academicYear" name="academicYear" required defaultValue={entry.academicYear} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="term">Term *</Label>
                <Select name="term" required defaultValue={entry.term}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">First Term</SelectItem>
                    <SelectItem value="2">Second Term</SelectItem>
                    <SelectItem value="3">Third Term</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4">
          <Link href="/academics/timetable">
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
    </div>
  )
}
