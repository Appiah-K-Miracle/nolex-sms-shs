import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Home,
  Users,
  Heart,
  BookOpen,
  Award,
  Download,
  Edit,
  AlertCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">Student Profile</h1>
          <p className="text-muted-foreground">Complete information about your ward</p>
        </div>
        <Button className="gap-2">
          <Edit className="h-4 w-4" />
          Request Update
        </Button>
      </div>

      {/* Profile Header Card */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-32 w-32 rounded-full overflow-hidden bg-muted">
                <Image src="/african-student-in-school-uniform.jpg" alt="Student Photo" fill className="object-cover" />
              </div>
              <Badge className="bg-green-600 hover:bg-green-700">Active Student</Badge>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold">Kwame Mensah</h2>
                <p className="text-muted-foreground">Form 2A - Science Programme</p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Student ID:</span>
                  <span className="font-medium">SHS/2023/0456</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Date of Birth:</span>
                  <span className="font-medium">March 15, 2008</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Home className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">House:</span>
                  <span className="font-medium">Nkrumah House</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Gender:</span>
                  <span className="font-medium">Male</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button asChild variant="outline" size="sm">
                  <Link href="/academic">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Academic Records
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/health">
                    <Heart className="h-4 w-4 mr-2" />
                    Health Records
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  Download Profile
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Academic Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Current Class Position</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">3rd</div>
            <p className="text-xs text-muted-foreground mt-1">Out of 45 students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Overall Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">82.5%</div>
            <p className="text-xs text-muted-foreground mt-1">Current term performance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">95%</div>
            <p className="text-xs text-muted-foreground mt-1">38 of 40 days present</p>
          </CardContent>
        </Card>
      </div>

      {/* Contact & Personal Information */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Home Address</p>
                  <p className="text-sm text-muted-foreground">House No. 23, Kokomlemle Road, Accra, Ghana</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-muted-foreground mt-1" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Email Address</p>
                  <p className="text-sm text-muted-foreground">kwame.mensah@student.ghshs.edu.gh</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-muted-foreground mt-1" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Phone Number</p>
                  <p className="text-sm text-muted-foreground">+233 24 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground mt-1" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Admission Date</p>
                  <p className="text-sm text-muted-foreground">September 5, 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-4 w-4 text-muted-foreground mt-1" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Religion</p>
                  <p className="text-sm text-muted-foreground">Christianity</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Guardian Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium mb-2">Primary Guardian</p>
                <div className="space-y-2 pl-4 border-l-2 border-primary">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm">Mr. Kofi Mensah (Father)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm">+233 24 987 6543</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm">kofi.mensah@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm">Civil Engineer</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Secondary Guardian</p>
                <div className="space-y-2 pl-4 border-l-2 border-muted">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm">Mrs. Ama Mensah (Mother)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm">+233 24 876 5432</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm">ama.mensah@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm">Teacher</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Contact & Medical Info */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              Emergency Contact
            </CardTitle>
            <CardDescription>To be contacted in case of emergency</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-orange-600" />
                  <span className="font-medium text-sm">Dr. Kwabena Osei</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">+233 24 555 1234</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">Uncle (Father&apos;s Brother)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-600" />
              Medical Information
            </CardTitle>
            <CardDescription>Important health details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Blood Group</p>
                <p className="text-sm text-muted-foreground">O+</p>
              </div>
              <div>
                <p className="text-sm font-medium">Genotype</p>
                <p className="text-sm text-muted-foreground">AA</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Known Allergies</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  Peanuts
                </Badge>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Medical Conditions</p>
              <p className="text-sm text-muted-foreground">None reported</p>
            </div>
            <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
              <Link href="/health">View Full Medical Records</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Academic Programme & Subjects */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Academic Programme & Subjects
          </CardTitle>
          <CardDescription>Current course of study</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border">
              <div>
                <p className="font-medium">Science Programme</p>
                <p className="text-sm text-muted-foreground">General Science Track</p>
              </div>
              <Badge className="bg-primary">Active</Badge>
            </div>
            <div>
              <p className="text-sm font-medium mb-3">Enrolled Subjects (8)</p>
              <div className="grid gap-2 md:grid-cols-2">
                {[
                  { name: "Core Mathematics", code: "MATH 201" },
                  { name: "English Language", code: "ENG 201" },
                  { name: "Integrated Science", code: "SCI 201" },
                  { name: "Social Studies", code: "SOC 201" },
                  { name: "Physics", code: "PHY 201" },
                  { name: "Chemistry", code: "CHEM 201" },
                  { name: "Biology", code: "BIO 201" },
                  { name: "Elective Mathematics", code: "MATH 202" },
                ].map((subject) => (
                  <div key={subject.code} className="flex items-center justify-between p-2 rounded border bg-card">
                    <span className="text-sm font-medium">{subject.name}</span>
                    <span className="text-xs text-muted-foreground">{subject.code}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Awards & Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-600" />
            Awards & Achievements
          </CardTitle>
          <CardDescription>Recognition and accomplishments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                title: "Best Student in Mathematics",
                date: "Term 2, 2024",
                description: "Achieved highest score in mathematics",
              },
              {
                title: "Perfect Attendance Award",
                date: "Term 1, 2024",
                description: "100% attendance throughout the term",
              },
              {
                title: "Science Quiz Competition - 2nd Place",
                date: "December 2024",
                description: "Inter-house science competition",
              },
            ].map((award, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/20">
                  <Award className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{award.title}</p>
                  <p className="text-xs text-muted-foreground">{award.date}</p>
                  <p className="text-sm text-muted-foreground mt-1">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
