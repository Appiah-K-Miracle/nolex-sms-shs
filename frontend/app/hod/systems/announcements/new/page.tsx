"use client"

import type React from "react"

import { Sidebar } from '@/components/hod/layout/Sidebar'
import Header from '@/components/hod/layout/Header'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function NewAnnouncementPage() {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    audiences: [] as string[],
  })

  const audiences = ["All Teachers", "Science Teachers", "Math Teachers", "All Students", "Form 3 Students"]

  const toggleAudience = (audience: string) => {
    setFormData((prev) => ({
      ...prev,
      audiences: prev.audiences.includes(audience)
        ? prev.audiences.filter((a) => a !== audience)
        : [...prev.audiences, audience],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Announcement submitted:", formData)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header title="New Announcement" subtitle="Create and send announcement to department" />
        <main className="flex-1 p-8">
          <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Announcement Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter announcement title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your announcement message"
                    rows={6}
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label>Select Audience</Label>
                  <div className="space-y-3">
                    {audiences.map((audience) => (
                      <div key={audience} className="flex items-center space-x-2">
                        <Checkbox
                          id={audience}
                          checked={formData.audiences.includes(audience)}
                          onCheckedChange={() => toggleAudience(audience)}
                        />
                        <label
                          htmlFor={audience}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {audience}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1" disabled={formData.audiences.length === 0}>
                    Send Announcement
                  </Button>
                  <Button type="button" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href="/hod/systems/announcements">Cancel</a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        </main>
      </div>
    </div>
  )
}
