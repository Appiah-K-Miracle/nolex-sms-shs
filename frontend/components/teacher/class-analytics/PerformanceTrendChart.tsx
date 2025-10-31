"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"

const performanceTrendData = [
  {
    term: "1st Term",
    average: 72,
    highest: 90,
  },
  {
    term: "2nd Term",
    average: 78,
    highest: 95,
  },
  {
    term: "3rd Term",
    average: 81,
    highest: 98,
  },
]

export function PerformanceTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Trend Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceTrendData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
            <XAxis dataKey="term" className="text-xs" tick={{ fill: "#6b7280" }} />
            <YAxis className="text-xs" tick={{ fill: "#6b7280" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="average" stroke="#047857" name="Class Average" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="highest" stroke="#34d399" name="Highest Score" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
