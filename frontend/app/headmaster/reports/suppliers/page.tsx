"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  Search,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Phone,
} from "lucide-react";
import Header from "@/components/headmaster/layout/Header";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";

// Mock data for suppliers
const suppliers = [
  {
    id: "SUP001",
    name: "ECG Ghana",
    category: "Utilities",
    contact: "John Mensah",
    phone: "+233 24 123 4567",
    email: "contact@ecg.com.gh",
    address: "Accra, Ghana",
    status: "active",
    totalTransactions: 12,
    totalAmount: 30000.0,
  },
  {
    id: "SUP002",
    name: "Stationery Plus",
    category: "Supplies",
    contact: "Mary Osei",
    phone: "+233 20 987 6543",
    email: "info@stationeryplus.gh",
    address: "Kumasi, Ghana",
    status: "active",
    totalTransactions: 25,
    totalAmount: 18500.0,
  },
  {
    id: "SUP003",
    name: "BuildRight Contractors",
    category: "Maintenance",
    contact: "Kwame Asante",
    phone: "+233 24 555 7890",
    email: "projects@buildright.gh",
    address: "Tema, Ghana",
    status: "active",
    totalTransactions: 8,
    totalAmount: 45000.0,
  },
  {
    id: "SUP004",
    name: "Fresh Foods Ltd",
    category: "Food",
    contact: "Abena Boateng",
    phone: "+233 27 333 2222",
    email: "sales@freshfoods.gh",
    address: "Accra, Ghana",
    status: "active",
    totalTransactions: 35,
    totalAmount: 120000.0,
  },
  {
    id: "SUP005",
    name: "Total Ghana",
    category: "Transport",
    contact: "Yaw Owusu",
    phone: "+233 20 111 4444",
    email: "support@total.gh",
    address: "Nationwide",
    status: "active",
    totalTransactions: 18,
    totalAmount: 28000.0,
  },
];

export default function SuppliersPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <main className="flex-1 p-4 space-y-3">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between bg-green-100 px-6 py-2 rounded-xl">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Suppliers
                </h1>
                <p className="text-gray-700">
                  Manage school suppliers and vendors
                </p>
              </div>
              <Button onClick={() => router.push("/headmaster/reports/suppliers/add")} className="bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Supplier
              </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Suppliers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{suppliers.length}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Active Suppliers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">
                    {suppliers.filter((s) => s.status === "active").length}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Spent
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    GH₵{" "}
                    {suppliers
                      .reduce((sum, s) => sum + s.totalAmount, 0)
                      .toLocaleString()}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Suppliers Table */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>All Suppliers</CardTitle>
                    <CardDescription>
                      A list of all registered suppliers
                    </CardDescription>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search suppliers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 w-64"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Supplier ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Contact Person</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Transactions</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSuppliers.map((supplier) => (
                      <TableRow key={supplier.id}>
                        <TableCell className="font-medium">
                          {supplier.id}
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-semibold">{supplier.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {supplier.address}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>{supplier.category}</TableCell>
                        <TableCell>{supplier.contact}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3 text-muted-foreground" />
                            <span className="text-sm">{supplier.phone}</span>
                          </div>
                        </TableCell>
                        <TableCell>{supplier.totalTransactions}</TableCell>
                        <TableCell className="font-semibold">
                          GH₵ {supplier.totalAmount.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Badge className={`text-white ${
                            supplier.status === "active"
                              ? "bg-green-800"
                              : "bg-red-600"
                          }`}>
                            {supplier.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() =>
                                  router.push(
                                    `/headmaster/reports/suppliers/${supplier.id}`
                                  )
                                }
                              >
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  router.push(
                                    `/headmaster/reports/suppliers/${supplier.id}/edit`
                                  )
                                }
                              >
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
