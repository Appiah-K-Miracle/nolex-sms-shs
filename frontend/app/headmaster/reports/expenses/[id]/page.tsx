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
import { ArrowLeft, Edit, Trash2, Download, Receipt } from "lucide-react";
import Header from "@/components/headmaster/layout/Header";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";

// Mock data - in real app, fetch based on params.id
const expense = {
  id: "EXP001",
  date: "2024-01-15",
  category: "Utilities",
  description: "Electricity Bill - January",
  amount: 2500.0,
  supplier: "ECG Ghana",
  status: "paid",
  paymentMethod: "Bank Transfer",
  invoiceNumber: "INV-2024-001",
  approvedBy: "Dr. Kwame Mensah",
  approvalDate: "2024-01-14",
  paidDate: "2024-01-15",
  notes:
    "Monthly electricity bill for all school buildings. Payment made on time to avoid disconnection.",
  createdBy: "Finance Officer",
  createdAt: "2024-01-10",
};

export default function ViewExpensePage() {
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
        <main className="flex-1 p-6 md:p-8 space-y-6">
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
                    Expense Details
                  </h1>
                  <p className="text-muted-foreground">
                    View complete expense information
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Download className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    router.push(`/headmaster/reports/expenses/${expense.id}/edit`)
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

            <div className="grid gap-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Basic Information</CardTitle>
                      <CardDescription>
                        Expense ID: {expense.id}
                      </CardDescription>
                    </div>
                    <Badge className={`text-sm text-white ${
                      expense.status === "paid" ? "bg-green-700" : "bg-yellow-700"
                    }`}>
                      {expense.status.toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Date</p>
                      <p className="font-medium">
                        {new Date(expense.date).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Category
                      </p>
                      <p className="font-medium">{expense.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Description
                      </p>
                      <p className="font-medium">{expense.description}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Amount
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        GH₵ {expense.amount.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Supplier/Vendor
                      </p>
                      <p className="font-medium">{expense.supplier}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Invoice Number
                      </p>
                      <p className="font-medium">{expense.invoiceNumber}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Payment Method
                      </p>
                      <p className="font-medium">{expense.paymentMethod}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Payment Status
                      </p>
                      <Badge className={`text-white ${
                        expense.status === "paid" ? "bg-green-700" : "bg-yellow-700"
                      }`}>
                        {expense.status.charAt(0).toUpperCase() + expense.status.slice(1)}
                      </Badge>
                    </div>
                    {expense.paidDate && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Paid Date
                        </p>
                        <p className="font-medium">
                          {new Date(expense.paidDate).toLocaleDateString(
                            "en-GB"
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Approval Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Approval Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Approved By
                      </p>
                      <p className="font-medium">{expense.approvedBy}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Approval Date
                      </p>
                      <p className="font-medium">
                        {new Date(expense.approvalDate).toLocaleDateString(
                          "en-GB"
                        )}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Created By
                      </p>
                      <p className="font-medium">{expense.createdBy}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Created At
                      </p>
                      <p className="font-medium">
                        {new Date(expense.createdAt).toLocaleDateString(
                          "en-GB"
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Notes */}
              {expense.notes && (
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{expense.notes}</p>
                  </CardContent>
                </Card>
              )}

              {/* Documents Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Attached Documents</CardTitle>
                  <CardDescription>
                    Invoices, receipts, and supporting documents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 p-4 border rounded-lg">
                    <Receipt className="w-8 h-8 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="font-medium">
                        Invoice_{expense.invoiceNumber}.pdf
                      </p>
                      <p className="text-sm text-muted-foreground">245 KB</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
