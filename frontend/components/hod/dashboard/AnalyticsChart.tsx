"use client";

import React from 'react';
import { LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataStudentPerformance = [
  { subject: 'Physics', current: 78, previous: 72 },
  { subject: 'Chemistry', current: 82, previous: 75 },
  { subject: 'Biology', current: 85, previous: 80 },
  { subject: 'Mathematics', current: 70, previous: 65 },
  { subject: 'Elective Maths', current: 88, previous: 82 },
  { subject: 'ICT', current: 90, previous: 85 },
];

const dataTeacherWorkload = [
  { week: 'Week 1', teaching: 18, planning: 6, admin: 4 },
  { week: 'Week 2', teaching: 20, planning: 8, admin: 3 },
  { week: 'Week 3', teaching: 22, planning: 7, admin: 5 },
  { week: 'Week 4', teaching: 19, planning: 9, admin: 4 },
  { week: 'Week 5', teaching: 21, planning: 6, admin: 6 },
];

const dataElectiveDistribution = [
  { subject: 'Visual Arts', students: 2 },
  { subject: 'Food & Nutrition', students: 3 },
  { subject: 'Technical Drawing', students: 2.5 },
  { subject: 'Elective ICT', students: 4 },
  { subject: 'Elective Mathematics', students: 5 },
];

const HODAnalyticsChart = () => {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-bold mb-6 text-gray-900">Analytics Overview</h2>
      
      {/* First Row - Two Charts Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Student Performance by Subjects */}
        <div className="border rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-4">Student Performance by Subjects</h3>
          <BarChart width={400} height={300} data={dataStudentPerformance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="subject" 
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
              fontSize={10}
              tick={{ fontSize: 10 }}
            />
            <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" fill="#eab308" name="Pass Rate" />
            <Bar dataKey="previous" fill="#16a34a" name="Average Score" />
          </BarChart>
        </div>

        {/* Teacher Workload & Activity */}
        <div className="border rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-4">Teacher Workload & Activity</h3>
          <LineChart width={400} height={300} data={dataTeacherWorkload}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis domain={[0, 24]} ticks={[0, 6, 12, 18, 24]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="teaching" stroke="#16a34a" strokeWidth={2} name="Teaching" />
            <Line type="monotone" dataKey="planning" stroke="#15803d" strokeWidth={2} name="Planning" />
            <Line type="monotone" dataKey="admin" stroke="#eab308" strokeWidth={2} name="Administrative" />
          </LineChart>
        </div>
      </div>

      {/* Second Row - Full Width Elective Subject Distribution */}
      <div className="border rounded-lg shadow-md p-4 w-full">
        <h3 className="text-lg font-semibold mb-4">Elective Subject Distribution</h3>
        <div className="w-full flex justify-start">
          <BarChart width={350} height={220} data={dataElectiveDistribution} margin={{ top: 10, right: 5, left: 5, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="subject" 
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
              fontSize={10}
              tick={{ fontSize: 10 }}
            />
            <YAxis domain={[0, 6]} ticks={[0, 1, 2, 3, 4, 5, 6]} />
            <Tooltip />
            <Bar dataKey="students" fill="#16a34a" maxBarSize={20} />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default HODAnalyticsChart;


