import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, Calendar } from "lucide-react";

const AttentionRequired = () => {
  return (
    <div>
      {/* Alerts & Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-destructive" />
              Attention Required
            </CardTitle>
            <CardDescription>Items needing immediate action</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Pending Fee Payments
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    342 students with outstanding fees
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-100 border border-yellow-200">
                <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Staff Evaluations Due
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    23 evaluations pending review
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-100 border border-yellow-200">
                <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Facility Maintenance
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    5 maintenance requests open
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              Upcoming Events
            </CardTitle>
            <CardDescription>Important dates and activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-center flex-shrink-0">
                  <div className="text-xl font-bold text-green-800">15</div>
                  <div className="text-xs text-muted-foreground">JAN</div>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm font-medium text-foreground">
                    Mid-Term Examinations Begin
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    All forms - 2 weeks duration
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-center flex-shrink-0">
                  <div className="text-xl font-bold text-green-800">22</div>
                  <div className="text-xs text-muted-foreground">JAN</div>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm font-medium text-foreground">
                    Parent-Teacher Conference
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Form 1 & 2 parents
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-center flex-shrink-0">
                  <div className="text-xl font-bold text-green-800">28</div>
                  <div className="text-xs text-muted-foreground">JAN</div>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm font-medium text-foreground">
                    Staff Development Workshop
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Teaching methodologies training
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-center flex-shrink-0">
                  <div className="text-xl font-bold text-green-800">05</div>
                  <div className="text-xs text-muted-foreground">FEB</div>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm font-medium text-foreground">
                    Inter-House Sports Competition
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    All houses participating
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AttentionRequired;
