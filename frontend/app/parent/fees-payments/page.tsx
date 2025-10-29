import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreditCard, Download, AlertCircle, CheckCircle, Smartphone } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FeesPage() {
  const feeBreakdown = [
    { item: "Tuition Fees", amount: 1200, status: "paid" },
    { item: "Boarding Fees", amount: 800, status: "paid" },
    { item: "PTA Dues", amount: 150, status: "paid" },
    { item: "Sports & Games", amount: 100, status: "paid" },
    { item: "Library Fees", amount: 50, status: "paid" },
    { item: "ICT Lab Fees", amount: 200, status: "partial", paid: 100 },
    { item: "Examination Fees", amount: 300, status: "outstanding" },
    { item: "Development Levy", amount: 150, status: "outstanding" },
  ]

  const transactions = [
    {
      date: "Jan 15, 2025",
      description: "Tuition & Boarding Payment",
      method: "Mobile Money",
      amount: 2000,
      reference: "MM2025011501",
    },
    {
      date: "Jan 10, 2025",
      description: "PTA Dues & Sports Fees",
      method: "Bank Transfer",
      amount: 250,
      reference: "BT2025011002",
    },
    {
      date: "Jan 5, 2025",
      description: "Partial ICT Lab Payment",
      method: "Mobile Money",
      amount: 100,
      reference: "MM2025010503",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fees & Payments</h1>
          <p className="text-muted-foreground">Manage school fees and view payment history</p>
        </div>
        <Select defaultValue="term3-2025">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select term" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="term3-2025">Term 3, 2024/25</SelectItem>
            <SelectItem value="term2-2025">Term 2, 2024/25</SelectItem>
            <SelectItem value="term1-2025">Term 1, 2024/25</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Payment Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Fees</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">GH₵ 2,950</div>
            <p className="text-xs text-muted-foreground mt-1">This term</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Amount Paid</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">GH₵ 2,500</div>
            <p className="text-xs text-muted-foreground mt-1">84.7% paid</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">GH₵ 450</div>
            <p className="text-xs text-muted-foreground mt-1">Due: Feb 20, 2025</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Arrears</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">GH₵ 0</div>
            <p className="text-xs text-muted-foreground mt-1">No arrears</p>
          </CardContent>
        </Card>
      </div>

      {/* Payment Alert */}
      <Card className="border-yellow-200 dark:border-yellow-900 bg-yellow-50 dark:bg-yellow-950/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-yellow-900 dark:text-yellow-100">Outstanding Balance Due</p>
              <p className="text-sm text-yellow-700 dark:text-yellow-200 mt-1">
                Please clear the outstanding balance of GH₵ 450 before February 20, 2025 to avoid any disruption to
                Kwame's education. You can pay using Mobile Money or Bank Transfer.
              </p>
              <div className="flex gap-2 mt-3">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Pay with Mobile Money
                </Button>
                <Button size="sm" variant="outline">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Bank Transfer Details
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fees Breakdown */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Fees Breakdown</CardTitle>
              <CardDescription>Detailed breakdown of all fees</CardDescription>
            </div>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Invoice
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fee Item</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Paid</TableHead>
                <TableHead className="text-right">Balance</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeBreakdown.map((fee, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{fee.item}</TableCell>
                  <TableCell className="text-right">GH₵ {fee.amount}</TableCell>
                  <TableCell className="text-right">
                    GH₵ {fee.status === "paid" ? fee.amount : fee.status === "partial" ? fee.paid : 0}
                  </TableCell>
                  <TableCell className="text-right">
                    GH₵{" "}
                    {fee.status === "paid" ? 0 : fee.status === "partial" ? fee.amount - (fee.paid || 0) : fee.amount}
                  </TableCell>
                  <TableCell className="text-right">
                    {fee.status === "paid" && (
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-100">Paid</Badge>
                    )}
                    {fee.status === "partial" && (
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-100">Partial</Badge>
                    )}
                    {fee.status === "outstanding" && (
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-100">
                        Outstanding
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="font-bold">
                <TableCell>Total</TableCell>
                <TableCell className="text-right">GH₵ 2,950</TableCell>
                <TableCell className="text-right">GH₵ 2,500</TableCell>
                <TableCell className="text-right text-yellow-600">GH₵ 450</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Recent payment transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Reference</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{transaction.method}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground font-mono text-xs">{transaction.reference}</TableCell>
                  <TableCell className="text-right font-medium">GH₵ {transaction.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Available payment options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3 p-4 rounded-lg border">
              <Smartphone className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">Mobile Money</p>
                <p className="text-sm text-muted-foreground mt-1">MTN: *170# | Vodafone: *110# | AirtelTigo: *185#</p>
                <p className="text-sm text-muted-foreground">
                  Merchant Code: <span className="font-mono">GHS-001234</span>
                </p>
                <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                  Make Payment
                </Button>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border">
              <CreditCard className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">Bank Transfer</p>
                <p className="text-sm text-muted-foreground mt-1">Bank: Ghana Commercial Bank</p>
                <p className="text-sm text-muted-foreground">
                  Account: <span className="font-mono">1234567890</span>
                </p>
                <p className="text-sm text-muted-foreground">Account Name: Ghana SHS Fees Account</p>
                <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Bank Details
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
