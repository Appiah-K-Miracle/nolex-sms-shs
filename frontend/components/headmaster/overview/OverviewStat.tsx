
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, BookOpen, DollarSign, TrendingUp } from "lucide-react";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import { Line } from 'react-chartjs-2';

const OverviewStat = () => {
  return (
     <div className="container mx-auto  py-6 space-y-6">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
              <GraduationCap className="w-4 h-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">2,847</div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+5.2% from last year</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Teaching Staff</CardTitle>
              <Users className="w-4 h-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">156</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <span>Student-Teacher Ratio: 18:1</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Programs</CardTitle>
              <BookOpen className="w-4 h-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">24</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <span>Across 8 departments</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Budget Utilization</CardTitle>
              <DollarSign className="w-4 h-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">68%</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <span>GH₵ 4.2M of GH₵ 6.2M</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>    
  )
}

export default OverviewStat