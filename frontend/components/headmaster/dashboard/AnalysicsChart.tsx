"use client";

import React from 'react';
import { LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const dataEnrollment = [
  { year: '2022', students: 2250 },
  { year: '2023', students: 2250 },
  { year: '2024', students: 2250 },
];

const dataFeeCollection = [
  { term: 'Term 1', collected: 750000, target: 1000000 },
  { term: 'Term 2', collected: 900000, target: 1000000 },
  { term: 'Term 3', collected: 850000, target: 1000000 },
];

const dataSubjectPerformance = [
  { subject: 'Mathematics', score: 90 },
  { subject: 'English', score: 85 },
  { subject: 'Science', score: 80 },

  { subject: 'ICT', score: 95 },

];

const dataAttendance = [
  { week: 'Week 1', attendance: 93 },
  { week: 'Week 2', attendance: 97 },
  { week: 'Week 3', attendance: 89 },
];

const HeadmasterAnalyticsChart = () => {
  return (
   <div>
    <h2 className="text-lg md:text-xl font-bold mb-6 text-gray-900">Analytics Overview</h2>
     <div className="grid grid-cols-2 gap-4">
      {/* Enrollment Trend Chart */}
      <div className="border rounded-lg shadow-md p-4">
        <h2>Enrollment Trend (Last 5 Years)</h2>
        <LineChart width={400} height={300} data={dataEnrollment}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="students" stroke="#8884d8" />
        </LineChart>
      </div>

      {/* Fee Collection Progress Chart */}
      <div className="border rounded-lg shadow-md p-4">
        <h2>Fee Collection Progress (Per Term)</h2>
        <BarChart width={400} height={300} data={dataFeeCollection}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="term" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="collected" fill="#8884d8" />
          <Bar dataKey="target" fill="#82ca9d" />
        </BarChart>
      </div>
      

      {/* Subject Performance Overview Chart */}
      <div className="border rounded-lg shadow-md p-4">
        <h2>Subject Performance Overview</h2>
        <BarChart width={400} height={300} data={dataSubjectPerformance} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="subject" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#8884d8" />
        </BarChart>
      </div>

      {/* Weekly Attendance Trend Chart */}
      <div className="border rounded-lg shadow-md p-4">
        <h2>Weekly Attendance Trend</h2>
        <LineChart width={400} height={300} data={dataAttendance}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="attendance" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
   </div>
  );
};

export default HeadmasterAnalyticsChart;