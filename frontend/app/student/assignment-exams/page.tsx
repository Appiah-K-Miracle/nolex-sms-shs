import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileText, CheckCircle, Clock, AlertCircle, Calendar, BookOpen } from "lucide-react"

export default function AssignmentsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div>
            <h1 className="text-3xl font-bold text-balance">Assignments & Exams</h1>
            <p className="text-muted-foreground mt-1">Manage your homework, projects, and view teacher feedback</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">5</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Submitted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Graded</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">85%</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="submitted">Submitted</TabsTrigger>
            <TabsTrigger value="graded">Graded</TabsTrigger>
          </TabsList>

          {/* Pending Assignments */}
          <TabsContent value="pending" className="space-y-4">
            {/* Urgent Assignment */}
            <Card className="border-destructive/50 bg-destructive/5">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="destructive">Due Tomorrow</Badge>
                      <Badge variant="outline">Chemistry</Badge>
                    </div>
                    <CardTitle className="text-xl">Chemistry Lab Report</CardTitle>
                    <CardDescription className="mt-2">
                      Write a comprehensive report on the Acid-Base Titration experiment conducted in class
                    </CardDescription>
                  </div>
                  <AlertCircle className="h-6 w-6 text-destructive shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Assigned: Mar 10, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Due: Mar 16, 2024 (11:59 PM)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Teacher:</span>
                  <span className="font-medium">Dr. Adjei</span>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3">Submit Your Work</h4>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="file-upload-1">Upload Document (PDF, DOCX)</Label>
                      <div className="mt-2 flex items-center gap-2">
                        <Input id="file-upload-1" type="file" accept=".pdf,.docx" />
                        <Button size="icon" variant="outline">
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="comments-1">Additional Comments (Optional)</Label>
                      <Textarea id="comments-1" placeholder="Add any notes for your teacher..." className="mt-2" />
                    </div>
                    <Button className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      Submit Assignment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regular Assignments */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Due in 5 days</Badge>
                      <Badge variant="outline">History</Badge>
                    </div>
                    <CardTitle className="text-xl">History Essay</CardTitle>
                    <CardDescription className="mt-2">
                      Write a 1500-word essay on &quot;The Independence Movement in Ghana and its Key Figures&quot;
                    </CardDescription>
                  </div>
                  <FileText className="h-6 w-6 text-primary shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Assigned: Mar 8, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Due: Mar 20, 2024 (11:59 PM)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Teacher:</span>
                  <span className="font-medium">Mr. Appiah</span>
                </div>
                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full bg-transparent">
                    <BookOpen className="mr-2 h-4 w-4" />
                    View Full Instructions
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Due in 1 week</Badge>
                      <Badge variant="outline">Mathematics</Badge>
                    </div>
                    <CardTitle className="text-xl">Mathematics Problem Set</CardTitle>
                    <CardDescription className="mt-2">
                      Complete all exercises from Chapter 5: Calculus (Questions 1-25)
                    </CardDescription>
                  </div>
                  <FileText className="h-6 w-6 text-primary shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Assigned: Mar 12, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Due: Mar 22, 2024 (11:59 PM)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Teacher:</span>
                  <span className="font-medium">Mr. Mensah</span>
                </div>
                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full bg-transparent">
                    <BookOpen className="mr-2 h-4 w-4" />
                    View Full Instructions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Submitted Assignments */}
          <TabsContent value="submitted" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary text-primary-foreground">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Submitted
                      </Badge>
                      <Badge variant="outline">Physics</Badge>
                    </div>
                    <CardTitle className="text-xl">Physics Practical Report</CardTitle>
                    <CardDescription className="mt-2">Experiment on Simple Harmonic Motion</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Submitted: Mar 14, 2024 (10:30 AM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Due: Mar 15, 2024</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-muted">
                  <p className="text-sm font-medium mb-1">Submitted Files:</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>physics_practical_kwame_asante.pdf</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Teacher:</span>
                  <span className="font-medium">Dr. Boateng</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-primary">Awaiting feedback</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary text-primary-foreground">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Submitted
                      </Badge>
                      <Badge variant="outline">English</Badge>
                    </div>
                    <CardTitle className="text-xl">Literature Analysis</CardTitle>
                    <CardDescription className="mt-2">
                      Character analysis of &quot;Things Fall Apart&quot; by Chinua Achebe
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Submitted: Mar 10, 2024 (3:45 PM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Due: Mar 12, 2024</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-muted">
                  <p className="text-sm font-medium mb-1">Submitted Files:</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>literature_analysis_kwame.docx</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Teacher:</span>
                  <span className="font-medium">Mrs. Osei</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-primary">Awaiting feedback</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Graded Assignments */}
          <TabsContent value="graded" className="space-y-4">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary text-primary-foreground">A</Badge>
                      <Badge variant="outline">Chemistry</Badge>
                    </div>
                    <CardTitle className="text-xl">Organic Chemistry Assignment</CardTitle>
                    <CardDescription className="mt-2">Nomenclature and reactions of hydrocarbons</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">92</div>
                    <p className="text-sm text-muted-foreground">/ 100</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Graded: Mar 8, 2024</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    Teacher Feedback
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Excellent work, Kwame! Your understanding of organic nomenclature is impressive. The reaction
                    mechanisms were well explained. Keep up the good work!
                  </p>
                  <p className="text-sm font-medium mt-3">- Dr. Adjei</p>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <FileText className="mr-2 h-4 w-4" />
                  View Detailed Feedback
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary text-primary-foreground">A+</Badge>
                      <Badge variant="outline">Physics</Badge>
                    </div>
                    <CardTitle className="text-xl">Mechanics Problem Set</CardTitle>
                    <CardDescription className="mt-2">Newton's Laws and applications</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">98</div>
                    <p className="text-sm text-muted-foreground">/ 100</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Graded: Mar 5, 2024</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    Teacher Feedback
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Outstanding performance! Your problem-solving approach is methodical and clear. All solutions were
                    correct with proper working shown. Excellent!
                  </p>
                  <p className="text-sm font-medium mt-3">- Dr. Boateng</p>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <FileText className="mr-2 h-4 w-4" />
                  View Detailed Feedback
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-chart-3">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">B+</Badge>
                      <Badge variant="outline">Mathematics</Badge>
                    </div>
                    <CardTitle className="text-xl">Trigonometry Assignment</CardTitle>
                    <CardDescription className="mt-2">Trigonometric identities and equations</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">78</div>
                    <p className="text-sm text-muted-foreground">/ 100</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Graded: Mar 3, 2024</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Teacher Feedback
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Good effort, but there were some errors in questions 8-10. Review the compound angle formulas. Come
                    see me during office hours if you need clarification.
                  </p>
                  <p className="text-sm font-medium mt-3">- Mr. Mensah</p>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <FileText className="mr-2 h-4 w-4" />
                  View Detailed Feedback
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
