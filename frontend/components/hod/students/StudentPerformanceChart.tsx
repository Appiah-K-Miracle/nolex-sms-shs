"use client";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

// Different performance data for each student
const performanceDataByStudent = {
  "1": [
    { term: 'Term 1', physics: 82, chemistry: 78, mathematics: 76 },
    { term: 'Term 2', physics: 84, chemistry: 80, mathematics: 78 },
    { term: 'Term 3', physics: 87, chemistry: 83, mathematics: 82 },
  ],
  "2": [
    { term: 'Term 1', physics: 75, chemistry: 72, biology: 70 },
    { term: 'Term 2', physics: 78, chemistry: 75, biology: 73 },
    { term: 'Term 3', physics: 80, chemistry: 78, biology: 76 },
  ],
  "3": [
    { term: 'Term 1', physics: 88, chemistry: 85, mathematics: 90 },
    { term: 'Term 2', physics: 90, chemistry: 87, mathematics: 92 },
    { term: 'Term 3', physics: 92, chemistry: 89, mathematics: 94 },
  ],
  "4": [
    { term: 'Term 1', physics: 60, chemistry: 55, biology: 58 },
    { term: 'Term 2', physics: 58, chemistry: 53, biology: 56 },
    { term: 'Term 3', physics: 55, chemistry: 50, biology: 53 },
  ],
  "5": [
    { term: 'Term 1', physics: 45, chemistry: 42, mathematics: 48 },
    { term: 'Term 2', physics: 43, chemistry: 40, mathematics: 46 },
    { term: 'Term 3', physics: 41, chemistry: 38, mathematics: 44 },
  ],
  "6": [
    { term: 'Term 1', physics: 85, chemistry: 82, biology: 88 },
    { term: 'Term 2', physics: 87, chemistry: 84, biology: 90 },
    { term: 'Term 3', physics: 89, chemistry: 86, biology: 92 },
  ]
};

interface StudentPerformanceChartProps {
  studentId: string;
}

export default function StudentPerformanceChart({ studentId }: StudentPerformanceChartProps) {
  const performanceData = performanceDataByStudent[studentId as keyof typeof performanceDataByStudent] || performanceDataByStudent["1"];
  return (
    <div className="h-80">
      <LineChart width={800} height={300} data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={true} />
        <XAxis dataKey="term" />
        <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} />
        <Tooltip />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="physics" 
          stroke="#16a34a" 
          strokeWidth={3}
          dot={{ fill: '#16a34a', strokeWidth: 2, r: 6 }}
          name="Physics"
        />
        <Line 
          type="monotone" 
          dataKey="chemistry" 
          stroke="#22c55e" 
          strokeWidth={3}
          dot={{ fill: '#22c55e', strokeWidth: 2, r: 6 }}
          name="Chemistry"
        />
        <Line 
          type="monotone" 
          dataKey="mathematics" 
          stroke="#eab308" 
          strokeWidth={3}
          dot={{ fill: '#eab308', strokeWidth: 2, r: 6 }}
          name="Mathematics"
        />
      </LineChart>
    </div>
  );
}
