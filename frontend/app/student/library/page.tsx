import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Search, Download, Calendar, AlertCircle, FileText, ExternalLink } from "lucide-react"

export default function LibraryPage() {
  const borrowedBooks = [
    {
      title: "Advanced Physics for Senior High Schools",
      author: "Dr. K. Mensah",
      isbn: "978-9988-1-2345-6",
      borrowDate: "Mar 1, 2024",
      dueDate: "Mar 22, 2024",
      status: "active",
      daysLeft: 7,
    },
    {
      title: "Chemistry: A Modern Approach",
      author: "Prof. A. Adjei",
      isbn: "978-9988-2-3456-7",
      borrowDate: "Feb 28, 2024",
      dueDate: "Mar 21, 2024",
      status: "active",
      daysLeft: 6,
    },
    {
      title: "Mathematics for SHS - Elective",
      author: "Mr. J. Owusu",
      isbn: "978-9988-3-4567-8",
      borrowDate: "Feb 15, 2024",
      dueDate: "Mar 8, 2024",
      status: "overdue",
      daysLeft: -7,
    },
  ]

  const digitalResources = [
    {
      title: "WASSCE Past Questions - Mathematics (2015-2023)",
      type: "PDF",
      size: "12.5 MB",
      category: "Past Questions",
    },
    {
      title: "Physics Practical Manual",
      type: "PDF",
      size: "8.2 MB",
      category: "Laboratory Guides",
    },
    {
      title: "English Language Comprehension Exercises",
      type: "PDF",
      size: "5.8 MB",
      category: "Study Materials",
    },
    {
      title: "Chemistry Periodic Table (Interactive)",
      type: "PDF",
      size: "2.1 MB",
      category: "Reference Materials",
    },
    {
      title: "Social Studies Notes - West African History",
      type: "PDF",
      size: "15.3 MB",
      category: "Study Materials",
    },
    {
      title: "WASSCE Past Questions - Integrated Science",
      type: "PDF",
      size: "10.7 MB",
      category: "Past Questions",
    },
  ]

  const recommendedBooks = [
    {
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      category: "Literature",
      available: true,
    },
    {
      title: "The Beautiful Ones Are Not Yet Born",
      author: "Ayi Kwei Armah",
      category: "Literature",
      available: true,
    },
    {
      title: "Introduction to Calculus",
      author: "Dr. P. Boateng",
      category: "Mathematics",
      available: false,
    },
    {
      title: "Organic Chemistry Simplified",
      author: "Prof. E. Osei",
      category: "Chemistry",
      available: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div>
            <h1 className="text-3xl font-bold text-balance">Library</h1>
            <p className="text-muted-foreground mt-1">Browse books, access digital resources, and manage your loans</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {/* Overdue Alert */}
        <Card className="mb-6 border-destructive/50 bg-destructive/5">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-destructive mb-1">Overdue Book</h3>
                <p className="text-sm text-muted-foreground">
                  You have 1 overdue book. Please return it to avoid late fees.
                </p>
              </div>
              <Button variant="destructive" size="sm">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Books Borrowed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">3</span>
                <span className="text-sm text-muted-foreground">/ 5 max</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Loans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">2</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Overdue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">1</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Late Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">GH₵ 7</div>
            </CardContent>
          </Card>
        </div>

        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search for books, authors, or ISBN..." className="pl-10" />
              </div>
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="borrowed" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[450px]">
            <TabsTrigger value="borrowed">Borrowed Books</TabsTrigger>
            <TabsTrigger value="digital">Digital Resources</TabsTrigger>
            <TabsTrigger value="browse">Browse Catalog</TabsTrigger>
          </TabsList>

          {/* Borrowed Books */}
          <TabsContent value="borrowed" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Currently Borrowed Books</CardTitle>
                <CardDescription>Books you have checked out from the library</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {borrowedBooks.map((book, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border ${book.status === "overdue" ? "border-destructive/50 bg-destructive/5" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-16 h-20 rounded bg-primary/10 shrink-0">
                        <BookOpen className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h4 className="font-semibold text-lg">{book.title}</h4>
                            <p className="text-sm text-muted-foreground">{book.author}</p>
                            <p className="text-xs text-muted-foreground mt-1">ISBN: {book.isbn}</p>
                          </div>
                          {book.status === "overdue" ? (
                            <Badge variant="destructive">Overdue</Badge>
                          ) : (
                            <Badge variant="outline">Active</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-6 text-sm mt-3">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Borrowed: {book.borrowDate}</span>
                          </div>
                          <div
                            className={`flex items-center gap-2 ${book.status === "overdue" ? "text-destructive" : "text-muted-foreground"}`}
                          >
                            <Calendar className="h-4 w-4" />
                            <span>Due: {book.dueDate}</span>
                          </div>
                        </div>
                        {book.status === "overdue" ? (
                          <div className="mt-3 p-2 rounded bg-destructive/10 text-sm text-destructive">
                            <AlertCircle className="h-4 w-4 inline mr-1" />
                            {Math.abs(book.daysLeft)} days overdue • Late fee: GH₵ {Math.abs(book.daysLeft)}
                          </div>
                        ) : (
                          <div className="mt-3 text-sm text-muted-foreground">
                            {book.daysLeft} days remaining until due date
                          </div>
                        )}
                        <div className="flex gap-2 mt-4">
                          <Button size="sm">Renew Loan</Button>
                          <Button size="sm" variant="outline">
                            Return Book
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Loan History */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Loan History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <div>
                    <p className="font-medium">Introduction to Mechanics</p>
                    <p className="text-sm text-muted-foreground">Returned on Feb 28, 2024</p>
                  </div>
                  <Badge variant="outline">Returned</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <div>
                    <p className="font-medium">English Grammar in Use</p>
                    <p className="text-sm text-muted-foreground">Returned on Feb 20, 2024</p>
                  </div>
                  <Badge variant="outline">Returned</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Digital Resources */}
          <TabsContent value="digital" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Digital Resources & eBooks
                </CardTitle>
                <CardDescription>Access study materials, past questions, and reference documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {digitalResources.map((resource, idx) => (
                  <div key={idx} className="p-4 rounded-lg border">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 shrink-0">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{resource.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <Badge variant="outline">{resource.type}</Badge>
                            <span>{resource.size}</span>
                            <span>•</span>
                            <span>{resource.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <Button size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Browse by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                    <div className="text-left">
                      <p className="font-semibold">Past Questions</p>
                      <p className="text-sm text-muted-foreground">WASSCE & Mock Exams</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                    <div className="text-left">
                      <p className="font-semibold">Study Materials</p>
                      <p className="text-sm text-muted-foreground">Notes & Guides</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                    <div className="text-left">
                      <p className="font-semibold">Reference Materials</p>
                      <p className="text-sm text-muted-foreground">Tables & Charts</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                    <div className="text-left">
                      <p className="font-semibold">Laboratory Guides</p>
                      <p className="text-sm text-muted-foreground">Practical Manuals</p>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Browse Catalog */}
          <TabsContent value="browse" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>Based on your current subjects and reading history</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recommendedBooks.map((book, idx) => (
                  <div key={idx} className="p-4 rounded-lg border">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex items-center justify-center w-12 h-16 rounded bg-accent/10 shrink-0">
                          <BookOpen className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{book.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{book.category}</Badge>
                            {book.available ? (
                              <Badge className="bg-primary text-primary-foreground">Available</Badge>
                            ) : (
                              <Badge variant="destructive">Checked Out</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" disabled={!book.available}>
                        {book.available ? "Borrow" : "Reserve"}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Popular Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Browse by Subject</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-3">
                  <Button variant="outline" className="h-auto p-4 bg-transparent">
                    <div className="text-center w-full">
                      <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="font-semibold">Mathematics</p>
                      <p className="text-xs text-muted-foreground">245 books</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 bg-transparent">
                    <div className="text-center w-full">
                      <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="font-semibold">Sciences</p>
                      <p className="text-xs text-muted-foreground">312 books</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 bg-transparent">
                    <div className="text-center w-full">
                      <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="font-semibold">Literature</p>
                      <p className="text-xs text-muted-foreground">189 books</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 bg-transparent">
                    <div className="text-center w-full">
                      <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="font-semibold">History</p>
                      <p className="text-xs text-muted-foreground">156 books</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 bg-transparent">
                    <div className="text-center w-full">
                      <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="font-semibold">Languages</p>
                      <p className="text-xs text-muted-foreground">98 books</p>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 bg-transparent">
                    <div className="text-center w-full">
                      <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="font-semibold">Reference</p>
                      <p className="text-xs text-muted-foreground">67 books</p>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
