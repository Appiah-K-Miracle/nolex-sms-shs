"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowLeft,
  Edit,
  Trash2,
  Phone,
  Mail,
  MapPin,
  Building2,
  CreditCard,
  FileText,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/headmaster/layout/Header";
import {Sidebar} from "@/components/headmaster/layout/Sidebar";

// Mock supplier data
const supplier = {
  id: "SUP001",
  name: "ECG Ghana",
  category: "Utilities",
  contactPerson: "John Mensah",
  phone: "+233 24 123 4567",
  alternatePhone: "+233 20 987 6543",
  email: "contact@ecg.com.gh",
  address: "123 Independence Avenue",
  city: "Accra",
  region: "Greater Accra",
  postalCode: "GA-123-4567",
  taxId: "C0012345678",
  registrationNumber: "CS123456789",
  bankName: "GCB Bank",
  accountNumber: "1234567890",
  accountName: "ECG Ghana Limited",
  paymentTerms: "Net 30 Days",
  creditLimit: 50000.0,
  status: "active",
  notes:
    "Primary electricity supplier for the school. Reliable service with monthly billing.",
  totalTransactions: 12,
  totalAmount: 30000.0,
  createdDate: "2023-01-15",
  lastTransaction: "2024-01-10",
};

// Mock transaction history
const transactions = [
  {
    id: "EXP001",
    date: "2024-01-10",
    description: "Electricity Bill - December 2023",
    amount: 2500.0,
    status: "paid",
  },
  {
    id: "EXP002",
    date: "2023-12-10",
    description: "Electricity Bill - November 2023",
    amount: 2300.0,
    status: "paid",
  },
  {
    id: "EXP003",
    date: "2023-11-10",
    description: "Electricity Bill - October 2023",
    amount: 2700.0,
    status: "paid",
  },
  {
    id: "EXP004",
    date: "2023-10-10",
    description: "Electricity Bill - September 2023",
    amount: 2400.0,
    status: "paid",
  },
];

export default function ViewSupplierPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        {/* Dashboard content */}
        <main className="flex-1">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.back()}
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    {supplier.name}
                  </h1>
                  <p className="text-muted-foreground">
                    Supplier ID: {supplier.id}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() =>
                    router.push(`/headmaster/reports/suppliers/${supplier.id}/edit`)
                  }
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button variant="destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant={
                      supplier.status === "active" ? "default" : "secondary"
                    }
                    className="text-sm"
                  >
                    {supplier.status}
                  </Badge>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Transactions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    {supplier.totalTransactions}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Amount
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    GH₵ {supplier.totalAmount.toLocaleString()}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Credit Limit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    GH₵ {supplier.creditLimit.toLocaleString()}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Information */}
            <Tabs defaultValue="details" className="space-y-4">
              <TabsList>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                {/* Basic Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Basic Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Supplier Name
                        </p>
                        <p className="font-semibold">{supplier.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Category
                        </p>
                        <p className="font-semibold">{supplier.category}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Tax ID</p>
                        <p className="font-semibold">{supplier.taxId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Registration Number
                        </p>
                        <p className="font-semibold">
                          {supplier.registrationNumber}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Created Date
                        </p>
                        <p className="font-semibold">
                          {new Date(supplier.createdDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Last Transaction
                        </p>
                        <p className="font-semibold">
                          {new Date(
                            supplier.lastTransaction
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Contact Person
                        </p>
                        <p className="font-semibold">
                          {supplier.contactPerson}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Phone Number
                        </p>
                        <p className="font-semibold flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {supplier.phone}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Alternate Phone
                        </p>
                        <p className="font-semibold flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {supplier.alternatePhone}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Email Address
                        </p>
                        <p className="font-semibold flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {supplier.email}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Address Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Address Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Street Address
                        </p>
                        <p className="font-semibold">{supplier.address}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">City</p>
                        <p className="font-semibold">{supplier.city}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Region</p>
                        <p className="font-semibold">{supplier.region}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Postal Code
                        </p>
                        <p className="font-semibold">{supplier.postalCode}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Banking Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Banking Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Bank Name
                        </p>
                        <p className="font-semibold">{supplier.bankName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Account Number
                        </p>
                        <p className="font-semibold">
                          {supplier.accountNumber}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Account Name
                        </p>
                        <p className="font-semibold">{supplier.accountName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Payment Terms
                        </p>
                        <p className="font-semibold">{supplier.paymentTerms}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Notes */}
                {supplier.notes && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Additional Notes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{supplier.notes}</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="transactions" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Transaction History
                    </CardTitle>
                    <CardDescription>
                      All transactions with this supplier
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Transaction ID</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {transactions.map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell className="font-medium">
                              {transaction.id}
                            </TableCell>
                            <TableCell>
                              {new Date(transaction.date).toLocaleDateString()}
                            </TableCell>
                            <TableCell>{transaction.description}</TableCell>
                            <TableCell className="font-semibold">
                              GH₵ {transaction.amount.toLocaleString()}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  transaction.status === "paid"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {transaction.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Documents</CardTitle>
                    <CardDescription>
                      Contracts, certificates, and other documents
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-muted-foreground">
                      <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No documents uploaded yet</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
