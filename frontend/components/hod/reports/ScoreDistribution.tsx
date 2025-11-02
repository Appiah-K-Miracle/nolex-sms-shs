"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ScoreDistributionProps {
  scoreData: {
    range: string;
    count: number;
  }[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    payload: {
      range: string;
    };
    value: number;
  }[];
  label?: string;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-md">
          <p className="font-medium">{`${payload[0].payload.range}: ${payload[0].value} students`}</p>
        </div>
      );
    }
    return null;
  };

const ScoreDistribution: React.FC<ScoreDistributionProps> = ({ scoreData }) => {
  // Define colors for the bars based on score ranges
  const getBarColor = (range: string) => {
    if (range === '90-100') return '#16a34a'; // green-700
    if (range === '80-89') return '#22c55e'; // green-600
    if (range === '70-79') return '#4ade80'; // green-500
    if (range === '60-69') return '#eab308'; // yellow-500
    if (range === '50-59') return '#ca8a04'; // yellow-600
    return '#ef4444'; // red-500 (for 0-49)
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Score Distribution</h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={scoreData}
            margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="range" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="count"
              radius={[4, 4, 0, 0]}
            >
              {scoreData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getBarColor(entry.range)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ScoreDistribution;