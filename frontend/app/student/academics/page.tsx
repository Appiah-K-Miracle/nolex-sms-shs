import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, TrendingUp, TrendingDown, Award, FileText, BarChart3 } from "lucide-react"

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-balance">Academic Performance</h1>
              <p className="text-muted-foreground mt-1">View your results, rankings, and download transcripts</p>
            </div>
            <Button className="w-fit">
              <Download className="mr-2 h-4 w-4" />
              Download Report Card
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {/* Current Performance Overview */}
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">3.45</span>
                <span className="text-sm text-muted-foreground">/ 4.00</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                <TrendingUp className="h-3 w-3" />
                <span>+0.12 from last term</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Class Ranking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-accent-foreground">5th</span>
                <span className="text-sm text-muted-foreground">of 45</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                <TrendingUp className="h-3 w-3" />
                <span>Improved 2 positions</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-chart-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Aggregate Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">12</span>
                <span className="text-sm text-muted-foreground">Best 6</span>
              </div>
              <Badge className="mt-2 bg-primary text-primary-foreground">Excellent</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for Different Views */}
        <Tabs defaultValue="current" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="current">Current Term</TabsTrigger>
            <TabsTrigger value="yearly">Yearly Results</TabsTrigger>
            <TabsTrigger value="ranking">Rankings</TabsTrigger>
          </TabsList>

          {/* Current Term Results */}
          <TabsContent value="current" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Term 2 Results - 2023/2024 Academic Year</CardTitle>
                <CardDescription>Your performance across all subjects this term</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Core Subjects */}
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      Core Subjects
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 p-4 rounded-lg border">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">Mathematics</h4>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-bold text-primary">85</span>
                              <Badge className="bg-primary text-primary-foreground">A</Badge>
                            </div>
                          </div>
                          <Progress value={85} className="h-2" />
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">Class Average: 72</span>
                            <span className="text-xs text-primary flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              +5 from mid-term
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 rounded-lg border">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">English Language</h4>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-bold text-primary">78</span>
                              <Badge className="bg-primary text-primary-foreground">B+</Badge>
                            </div>
                          </div>
                          <Progress value={78} className="h-2" />
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">Class Average: 70</span>
                            <span className="text-xs text-primary flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              +3 from mid-term
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 rounded-lg border">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">Integrated Science</h4>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-bold text-primary">82</span>
                              <Badge className="bg-primary text-primary-foreground">A</Badge>
                            </div>
                          </div>
                          <Progress value={82} className="h-2" />
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">Class Average: 68</span>
                            <span className="text-xs text-primary flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              +7 from mid-term
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 rounded-lg border">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">Social Studies</h4>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-bold text-primary">88</span>
                              <Badge className="bg-primary text-primary-foreground">A</Badge>
                            </div>
                          </div>
                          <Progress value={88} className="h-2" />
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">Class Average: 75</span>
                            <span className="text-xs text-primary flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              +2 from mid-term
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Elective Subjects */}
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-accent" />
                      Elective Subjects
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 p-4 rounded-lg border">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">Physics</h4>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-bold text-primary">90</span>
                              <Badge className="bg-primary text-primary-foreground">A+</Badge>
                            </div>
                          </div>
                          <Progress value={90} className="h-2" />
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">Class Average: 71</span>
                            <span className="text-xs text-primary flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              +4 from mid-term
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 rounded-lg border">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">Chemistry</h4>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-bold text-primary">86</span>
                              <Badge className="bg-primary text-primary-foreground">A</Badge>
                            </div>
                          </div>
                          <Progress value={86} className="h-2" />
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">Class Average: 69</span>
                            <span className="text-xs text-primary flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              +6 from mid-term
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 rounded-lg border">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">Elective Mathematics</h4>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-bold">72</span>
                              <Badge variant="outline">B</Badge>
                            </div>
                          </div>
                          <Progress value={72} className="h-2" />
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">Class Average: 65</span>
                            <span className="text-xs text-destructive flex items-center gap-1">
                              <TrendingDown className="h-3 w-3" />
                              -3 from mid-term
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Overall Performance</h4>
                      <p className="text-sm text-muted-foreground">Term 2 Average</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">83.0%</div>
                      <Badge className="mt-1 bg-primary text-primary-foreground">Excellent</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Download Documents
                </CardTitle>
                <CardDescription>Get your academic documents in PDF format</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download Term 2 Report Card
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download Academic Transcript
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download Progress Report
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Yearly Results */}
          <TabsContent value="yearly" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>2023/2024 Academic Year Performance</CardTitle>
                <CardDescription>Your performance across all three terms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm">Term 1</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-primary">81.5%</div>
                        <p className="text-xs text-muted-foreground mt-1">Average Score</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm">Term 2</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-primary">83.0%</div>
                        <p className="text-xs text-muted-foreground mt-1">Average Score</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm">Term 3</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-muted-foreground">Pending</div>
                        <p className="text-xs text-muted-foreground mt-1">Not yet available</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="font-semibold mb-2">Year-to-Date Performance</h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">82.25%</span>
                      <span className="text-sm text-muted-foreground">Overall Average</span>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-sm text-primary">
                      <TrendingUp className="h-4 w-4" />
                      <span>Consistent improvement throughout the year</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Class Rankings */}
          <TabsContent value="ranking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Class Rankings - Form 3A</CardTitle>
                <CardDescription>Your position among 45 students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Your Current Position</h4>
                        <p className="text-sm text-muted-foreground mt-1">Based on Term 2 results</p>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold text-accent-foreground">5th</div>
                        <p className="text-sm text-muted-foreground">of 45 students</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Top 10 Students</h4>

                    <div className="flex items-center gap-4 p-3 rounded-lg bg-chart-2/10 border border-chart-2/20">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-chart-2 text-chart-2 font-bold text-sm">
                        1
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Ama Serwaa</p>
                        <p className="text-sm text-muted-foreground">GPA: 3.92</p>
                      </div>
                      <Badge className="bg-chart-2 text-secondary-foreground">92.5%</Badge>
                    </div>

                    <div className="flex items-center gap-4 p-3 rounded-lg bg-muted border">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted-foreground text-background font-bold text-sm">
                        2
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Kofi Mensah</p>
                        <p className="text-sm text-muted-foreground">GPA: 3.85</p>
                      </div>
                      <Badge variant="outline">90.2%</Badge>
                    </div>

                    <div className="flex items-center gap-4 p-3 rounded-lg bg-muted border">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted-foreground text-background font-bold text-sm">
                        3
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Abena Osei</p>
                        <p className="text-sm text-muted-foreground">GPA: 3.78</p>
                      </div>
                      <Badge variant="outline">88.8%</Badge>
                    </div>

                    <div className="flex items-center gap-4 p-3 rounded-lg bg-muted border">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted-foreground text-background font-bold text-sm">
                        4
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Yaw Boateng</p>
                        <p className="text-sm text-muted-foreground">GPA: 3.65</p>
                      </div>
                      <Badge variant="outline">86.5%</Badge>
                    </div>

                    <div className="flex items-center gap-4 p-3 rounded-lg bg-primary/10 border-2 border-primary">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        5
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Kwame Asante (You)</p>
                        <p className="text-sm text-muted-foreground">GPA: 3.45</p>
                      </div>
                      <Badge className="bg-primary text-primary-foreground">83.0%</Badge>
                    </div>

                    <div className="text-center py-4">
                      <Button variant="outline">View Full Rankings</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
