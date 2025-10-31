import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Download, DollarSign, Receipt, CreditCard, Calendar } from "lucide-react"

export default function FeesPage() {
  const feeBreakdown = [
    { item: "Tuition Fee", amount: 2500, status: "paid", dueDate: "Jan 15, 2024" },
    { item: "Boarding Fee", amount: 1800, status: "paid", dueDate: "Jan 15, 2024" },
    { item: "PTA Dues", amount: 150, status: "paid", dueDate: "Jan 15, 2024" },
    { item: "Library Fee", amount: 100, status: "paid", dueDate: "Jan 15, 2024" },
    { item: "Sports & Recreation", amount: 200, status: "paid", dueDate: "Jan 15, 2024" },
    { item: "ICT Lab Fee", amount: 150, status: "paid", dueDate: "Jan 15, 2024" },
    { item: "Medical Insurance", amount: 300, status: "paid", dueDate: "Jan 15, 2024" },
  ]

  const paymentHistory = [
    {
      date: "Jan 10, 2024",
      description: "Term 2 Fees Payment",
      amount: 5200,
      method: "Bank Transfer",
      reference: "TRX-2024-001234",
      status: "completed",
    },
    {
      date: "Sep 5, 2023",
      description: "Term 1 Fees Payment",
      amount: 5200,
      method: "Mobile Money",
      reference: "TRX-2023-009876",
      status: "completed",
    },
    {
      date: "May 8, 2023",
      description: "Term 3 Fees Payment (2022/2023)",
      amount: 4800,
      method: "Bank Transfer",
      reference: "TRX-2023-005432",
      status: "completed",
    },
  ]

  const totalFees = feeBreakdown.reduce((sum, fee) => sum + fee.amount, 0)
  const paidAmount = feeBreakdown.filter((fee) => fee.status === "paid").reduce((sum, fee) => sum + fee.amount, 0)
  const balance = totalFees - paidAmount

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-balance">Fees & Payments</h1>
              <p className="text-muted-foreground mt-1">View your fee breakdown, payment history, and receipts</p>
            </div>
            <Button>
              <CreditCard className="mr-2 h-4 w-4" />
              Make Payment
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {/* Payment Status Alert */}
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary shrink-0">
                <CheckCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">Fees Fully Paid</h3>
                <p className="text-muted-foreground">
                  All fees for Term 2 (2023/2024 Academic Year) have been paid in full. Thank you for your prompt
                  payment!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">GH₵ {totalFees.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">Term 2 - 2023/2024</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Amount Paid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">GH₵ {paidAmount.toLocaleString()}</div>
              <div className="flex items-center gap-1 mt-1 text-xs text-primary">
                <CheckCircle className="h-3 w-3" />
                <span>Fully paid</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-chart-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Outstanding Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-chart-2">GH₵ {balance.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">No arrears</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="breakdown" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="breakdown">Fee Breakdown</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
            <TabsTrigger value="receipts">Receipts</TabsTrigger>
          </TabsList>

          {/* Fee Breakdown */}
          <TabsContent value="breakdown" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Term 2 Fee Breakdown</CardTitle>
                <CardDescription>2023/2024 Academic Year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feeBreakdown.map((fee, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{fee.item}</h4>
                          <Badge className="bg-primary text-primary-foreground">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Paid
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Due: {fee.dueDate}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">GH₵ {fee.amount.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}

                  <div className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border-2 border-primary/20 mt-4">
                    <div>
                      <h4 className="font-bold text-lg">Total Amount</h4>
                      <p className="text-sm text-muted-foreground">All fees included</p>
                    </div>
                    <div className="text-3xl font-bold text-primary">GH₵ {totalFees.toLocaleString()}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Available Payment Methods</CardTitle>
                <CardDescription>Choose your preferred payment option</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start h-auto p-4 bg-transparent">
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-semibold">Bank Transfer</p>
                      <p className="text-sm text-muted-foreground">Transfer to school account</p>
                    </div>
                  </div>
                </Button>

                <Button variant="outline" className="w-full justify-start h-auto p-4 bg-transparent">
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                      <DollarSign className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-semibold">Mobile Money</p>
                      <p className="text-sm text-muted-foreground">MTN, Vodafone, AirtelTigo</p>
                    </div>
                  </div>
                </Button>

                <Button variant="outline" className="w-full justify-start h-auto p-4 bg-transparent">
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-chart-2/10">
                      <Receipt className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-semibold">Pay at Bursar's Office</p>
                      <p className="text-sm text-muted-foreground">Cash or cheque payment</p>
                    </div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment History */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>All your payment transactions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentHistory.map((payment, idx) => (
                  <div key={idx} className="p-4 rounded-lg border">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{payment.description}</h4>
                          <Badge className="bg-primary text-primary-foreground">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Completed
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{payment.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            <span>{payment.method}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Receipt className="h-4 w-4" />
                            <span>Ref: {payment.reference}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">GH₵ {payment.amount.toLocaleString()}</div>
                        <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                          <Download className="mr-1 h-3 w-3" />
                          Receipt
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Receipts */}
          <TabsContent value="receipts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="h-5 w-5 text-primary" />
                  Payment Receipts
                </CardTitle>
                <CardDescription>Download your payment receipts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <Receipt className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Term 2 Payment Receipt</h4>
                        <p className="text-sm text-muted-foreground">Jan 10, 2024 • GH₵ 5,200</p>
                      </div>
                    </div>
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>

                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted">
                        <Receipt className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Term 1 Payment Receipt</h4>
                        <p className="text-sm text-muted-foreground">Sep 5, 2023 • GH₵ 5,200</p>
                      </div>
                    </div>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>

                <div className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted">
                        <Receipt className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Term 3 Payment Receipt (2022/2023)</h4>
                        <p className="text-sm text-muted-foreground">May 8, 2023 • GH₵ 4,800</p>
                      </div>
                    </div>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  For any payment-related queries, please contact the Bursar's Office:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>
                      <strong>Phone:</strong> +233 24 123 4567
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>
                      <strong>Email:</strong> bursar@schoolname.edu.gh
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>
                      <strong>Office Hours:</strong> Mon-Fri, 8:00 AM - 4:00 PM
                    </span>
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
