import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, BookOpen } from "lucide-react";

const PerformanceOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">
            Academic Performance
          </CardTitle>
          <CardDescription>Current term performance metrics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                Overall Pass Rate
              </span>
              <span className="text-sm font-bold text-green-700">87.5%</span>
            </div>
            <Progress value={87.5} className="h-2 bg-green-700" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                Student Attendance
              </span>
              <span className="text-sm font-bold text-green-700">92.3%</span>
            </div>
            <Progress value={92.3} className="h-2 bg-green-700" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                Teacher Attendance
              </span>
              <span className="text-sm font-bold text-green-700">96.8%</span>
            </div>
            <Progress value={96.8} className="h-2 bg-green-700" />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                Assignment Completion
              </span>
              <span className="text-sm font-bold text-green-700">78.4%</span>
            </div>
            <Progress value={78.4} className="h-2 bg-green-700" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Recent Achievements</CardTitle>
          <CardDescription>Notable accomplishments this term</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Award className="w-4 h-4 text-green-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Regional Science Competition
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  1st Place - Team of 5 students
                </p>
              </div>
              <Badge variant="secondary" className="text-xs bg-yellow-600 text-white">
                This Week
              </Badge>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  WASSCE Results Improvement
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  12% increase in A grades
                </p>
              </div>
              <Badge variant="secondary" className="text-xs bg-yellow-600 text-white">
                Last Month
              </Badge>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Award className="w-4 h-4 text-green-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Sports Championship
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Inter-school athletics meet
                </p>
              </div>
              <Badge variant="secondary" className="text-xs bg-yellow-600 text-white">
                2 Weeks Ago
              </Badge>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Library Expansion
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Added 2,000 new books
                </p>
              </div>
              <Badge variant="secondary" className="text-xs bg-yellow-600 text-white">
                Last Month
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceOverview;
