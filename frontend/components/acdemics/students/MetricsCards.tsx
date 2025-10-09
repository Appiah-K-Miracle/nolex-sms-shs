import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MetricsCards = () => {
  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2,847</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">2,789</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Suspended
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">58</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average GPA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">3.45</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MetricsCards;
