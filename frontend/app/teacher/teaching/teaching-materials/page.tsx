import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { File, Download, Search, Link as LinkIcon, Trash, Pencil } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Upload } from "lucide-react"

const teachingMaterials = [
  {
    id: "1",
    title: "Mathematics Form 2 - Algebra Basics",
    type: "Notes",
    subject: "Mathematics",
    uploadDate: "2024-01-20",
    fileSize: "2.5 MB",
  },
  {
    id: "2",
    title: "English Language - Essay Writing Guide",
    type: "Guide",
    subject: "English Language",
    uploadDate: "2024-01-18",
    fileSize: "1.2 MB",
  },
  {
    id: "3",
    title: "Integrated Science - Photosynthesis Lab",
    type: "Assignment",
    subject: "Integrated Science",
    uploadDate: "2024-01-15",
    fileSize: "3.1 MB",
  },
  {
    id: "4",
    title: "History - Ghanaian Independence Era",
    type: "Reading",
    subject: "History",
    uploadDate: "2024-01-10",
    fileSize: "4.8 MB",
  },
]

export default function TeachingMaterialsPage() {
  return (
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
            <Button variant="outline" className="bg-white hover:bg-gray-50 text-green-700">Filter</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teachingMaterials.map((material) => (
              <div
                key={material.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4"
              >
                <div className="flex items-center gap-4">
                  <File className="h-8 w-8 text-green-700" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{material.title}</h3>
                    <p className="text-sm text-gray-600">
                      {material.subject} • {material.type} • {material.fileSize}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Uploaded: {new Date(material.uploadDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:bg-gray-50">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
