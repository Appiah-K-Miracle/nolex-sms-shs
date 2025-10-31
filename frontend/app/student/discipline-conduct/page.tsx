import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Award, Shield, TrendingUp, Star } from "lucide-react"

export default function DisciplinePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div>
            <h1 className="text-3xl font-bold text-balance">Discipline & Conduct</h1>
            <p className="text-muted-foreground mt-1">View your conduct record, merit points, and house standing</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {/* Current Status */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <CheckCircle className="h-5 w-5 text-primary" />
          <AlertDescription className="text-base">
            <span className="font-semibold">Excellent Standing!</span> You have maintained good conduct throughout the
            term with no infractions.
          </AlertDescription>
        </Alert>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Conduct Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="bg-primary text-primary-foreground text-base px-3 py-1">
                <CheckCircle className="mr-1 h-4 w-4" />
                Good Standing
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Merit Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">45</span>
                <span className="text-sm text-muted-foreground">points</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">House Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-accent-foreground">32</span>
                <span className="text-sm text-muted-foreground">points</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Infractions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">0</span>
                <span className="text-sm text-muted-foreground">this term</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Merit Points */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent" />
                  Merit Points Earned
                </CardTitle>
                <CardDescription>Recognition for positive behavior and achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 rounded-lg border border-accent/20 bg-accent/5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold">Academic Excellence</h4>
                      <p className="text-sm text-muted-foreground mt-1">Scored 90+ in Physics exam</p>
                    </div>
                    <Badge className="bg-accent text-accent-foreground shrink-0">+10 points</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">March 10, 2024 • Awarded by Dr. Boateng</p>
                </div>

                <div className="p-4 rounded-lg border border-accent/20 bg-accent/5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold">Leadership Initiative</h4>
                      <p className="text-sm text-muted-foreground mt-1">Organized class study group for Mathematics</p>
                    </div>
                    <Badge className="bg-accent text-accent-foreground shrink-0">+8 points</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">March 5, 2024 • Awarded by Mr. Mensah</p>
                </div>

                <div className="p-4 rounded-lg border border-accent/20 bg-accent/5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold">Perfect Attendance</h4>
                      <p className="text-sm text-muted-foreground mt-1">100% attendance for the month of February</p>
                    </div>
                    <Badge className="bg-accent text-accent-foreground shrink-0">+7 points</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">March 1, 2024 • Awarded by Housemaster</p>
                </div>

                <div className="p-4 rounded-lg border">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold">Community Service</h4>
                      <p className="text-sm text-muted-foreground mt-1">Volunteered at school library organization</p>
                    </div>
                    <Badge variant="outline" className="shrink-0">
                      +5 points
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">February 20, 2024 • Awarded by Librarian</p>
                </div>

                <div className="p-4 rounded-lg border">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold">Helping Classmate</h4>
                      <p className="text-sm text-muted-foreground mt-1">Tutored fellow student in Chemistry</p>
                    </div>
                    <Badge variant="outline" className="shrink-0">
                      +5 points
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">February 15, 2024 • Awarded by Dr. Adjei</p>
                </div>
              </CardContent>
            </Card>

            {/* House Points */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  House Points Contribution
                </CardTitle>
                <CardDescription>Points earned for Kwame Nkrumah House</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Inter-House Sports Competition</h4>
                    <Badge className="bg-primary text-primary-foreground">+15 points</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">2nd place in 100m sprint</p>
                  <p className="text-xs text-muted-foreground mt-2">March 12, 2024</p>
                </div>

                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Academic Quiz Competition</h4>
                    <Badge variant="outline">+10 points</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Team member - Science category</p>
                  <p className="text-xs text-muted-foreground mt-2">February 28, 2024</p>
                </div>

                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">House Cleanliness Award</h4>
                    <Badge variant="outline">+7 points</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Contributed to weekly house inspection win</p>
                  <p className="text-xs text-muted-foreground mt-2">February 18, 2024</p>
                </div>
              </CardContent>
            </Card>

            {/* Conduct Record */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Conduct Record
                </CardTitle>
                <CardDescription>Infractions and sanctions (if any)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Clean Record!</h3>
                  <p className="text-muted-foreground">
                    You have no infractions or warnings this term. Keep up the excellent behavior!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-6">
            {/* House Information */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle>Your House</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-4">
                  <Award className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-1">Kwame Nkrumah House</h3>
                <Badge className="bg-accent text-accent-foreground mb-4">Red House</Badge>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-2 rounded bg-background/50">
                    <span className="text-muted-foreground">House Position</span>
                    <span className="font-semibold">2nd Place</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-background/50">
                    <span className="text-muted-foreground">Total Points</span>
                    <span className="font-semibold">1,245</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-background/50">
                    <span className="text-muted-foreground">Your Contribution</span>
                    <span className="font-semibold">32 points</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent">
                    <Star className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Top 5 Student</p>
                    <p className="text-xs text-muted-foreground">Class ranking</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                    <Award className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Class Prefect</p>
                    <p className="text-xs text-muted-foreground">Leadership role</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-chart-2">
                    <CheckCircle className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Perfect Conduct</p>
                    <p className="text-xs text-muted-foreground">No infractions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conduct Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Conduct Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p>Respect teachers and fellow students</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p>Maintain punctuality and attendance</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p>Follow school dress code</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p>Complete assignments on time</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p>Participate in school activities</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
