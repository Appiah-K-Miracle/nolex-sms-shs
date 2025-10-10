import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


const DepartmentSummary = () => {
  return (
    <div>
         {/* Department Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Department Summary</CardTitle>
            <CardDescription>Overview of academic departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Sciences</h4>
                  <Badge className="bg-yellow-600 text-white">8 Programs</Badge>
                </div>
                <p className="text-2xl font-bold text-green-700">842</p>
                <p className="text-xs text-muted-foreground mt-1">Students enrolled</p>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Arts</h4>
                  <Badge className="bg-yellow-600 text-white">6 Programs</Badge>
                </div>
                <p className="text-2xl font-bold text-green-700">654</p>
                <p className="text-xs text-muted-foreground mt-1">Students enrolled</p>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Business</h4>
                  <Badge className="bg-yellow-600 text-white">5 Programs</Badge>
                </div>
                <p className="text-2xl font-bold text-green-700">721</p>
                <p className="text-xs text-muted-foreground mt-1">Students enrolled</p>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">Technical</h4>
                  <Badge className="bg-yellow-600 text-white">5 Programs</Badge>
                </div>
                <p className="text-2xl font-bold text-green-700">630</p>
                <p className="text-xs text-muted-foreground mt-1">Students enrolled</p>
              </div>
            </div>
          </CardContent>
        </Card>
    </div>
  )
}

export default DepartmentSummary