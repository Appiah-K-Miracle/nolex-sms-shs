import { DashboardLayout } from "@/components/teacher/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Upload, Search, FileText, ImageIcon, Video } from "lucide-react"

const materials = [
  {
    id: "1",
    name: "Quadratic Equations Worksheet.pdf",
    type: "pdf",
    subject: "Mathematics",
    class: "Form 2B",
    uploadDate: "2024-01-10",
    size: "2.4 MB",
  },
  {
    id: "2",
    name: "Physics Lab Manual.docx",
    type: "document",
    subject: "Physics",
    class: "Form 3A",
    uploadDate: "2024-01-12",
    size: "1.8 MB",
  },
  {
    id: "3",
    name: "Cell Structure Diagram.png",
    type: "image",
    subject: "Biology",
    class: "Form 2B",
    uploadDate: "2024-01-14",
    size: "856 KB",
  },
  {
    id: "4",
    name: "Chemical Reactions Demo.mp4",
    type: "video",
    subject: "Chemistry",
    class: "Form 3A",
    uploadDate: "2024-01-15",
    size: "45.2 MB",
  },
]

const getFileIcon = (type: string) => {
  switch (type) {
    case "pdf":
    case "document":
      return FileText
    case "image":
      return ImageIcon
    case "video":
      return Video
    default:
      return FileText
  }
}

export default function TeachingMaterialsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Teaching Materials</h1>
            <p className="text-gray-600">Upload and manage study notes, assignments, and resources</p>
          </div>
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            <Upload className="mr-2 h-4 w-4" />
            Upload Material
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />
                <Input placeholder="Search materials..." className="pl-10" />
              </div>
              <Button variant="outline" className="bg-white hover:bg-gray-50 text-green-700">Filter by Subject</Button>
              <Button variant="outline" className="bg-white hover:bg-gray-50 text-green-700">Filter by Class</Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Total Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">48</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">32</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Videos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">4</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4">
          {materials.map((material) => {
            const Icon = getFileIcon(material.type)
            return (
              <Card key={material.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-green-100 p-2">
                        <Icon className="h-6 w-6 text-green-700" />
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-base text-gray-900">{material.name}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {material.subject} • {material.class}
                        </CardDescription>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <span>{new Date(material.uploadDate).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{material.size}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="capitalize text-green-700 border-green-700">
                      {material.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 bg-white hover:bg-gray-50">
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
