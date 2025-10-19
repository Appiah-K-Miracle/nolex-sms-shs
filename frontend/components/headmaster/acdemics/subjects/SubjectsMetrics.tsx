import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SubjectsMetrics = () => {
  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Subjects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">42</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Core Subjects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Elective Subjects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">34</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Departments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubjectsMetrics;
