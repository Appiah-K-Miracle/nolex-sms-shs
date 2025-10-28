"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"

const data = [
  {
    subject: "Math",
    average: 75,
    highest: 95,
  },
  {
    subject: "English",
    average: 82,
    highest: 98,
  },
  {
    subject: "Science",
    average: 68,
    highest: 88,
  },
  {
    subject: "History",
    average: 79,
    highest: 92,
  },
  {
    subject: "Physics",
    average: 71,
    highest: 89,
  },
]

export function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Class Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
            <XAxis dataKey="subject" className="text-xs" tick={{ fill: "#6b7280" }} />
            <YAxis className="text-xs" tick={{ fill: "#6b7280" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="average" fill="#047857" name="Class Average" radius={[8, 8, 0, 0]} />
            <Bar dataKey="highest" fill="#34d399" name="Highest Score" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
