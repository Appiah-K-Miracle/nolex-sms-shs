"use client";

import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import { useState } from 'react';
import { Eye, Edit, Trash2, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const teachers = [
  {
    id: 1,
    name: "Mr. Osei Bonsu",
    email: "osei.bonsu@school.edu.gh",
    phone: "+233 24 123 4567",
    subjects: ["Physics", "Mathematics"],
    classes: ["Form 1A", "Form 2A", "+1"],
    workload: { current: 18, max: 24 },
    status: "Active"
  },
  {
    id: 2,
    name: "Mrs. Ama Serwaa",
    email: "ama.serwaa@school.edu.gh",
    phone: "+233 24 234 5678",
    subjects: ["Chemistry", "Biology"],
    classes: ["Form 1B", "Form 2B"],
    workload: { current: 15, max: 24 },
    status: "Active"
  },
  {
    id: 3,
    name: "Dr. Kwabena Mensah",
    email: "kwabena.mensah@school.edu.gh",
    phone: "+233 24 345 6789",
    subjects: ["Physics", "Elective Mathematics"],
    classes: ["Form 2B", "Form 3A"],
    workload: { current: 16, max: 24 },
    status: "Active"
  },
  {
    id: 4,
    name: "Dr. Akosua Frimpong",
    email: "akosua.frimpong@school.edu.gh",
    phone: "+233 24 456 7890",
    subjects: ["Mathematics", "Elective Mathematics"],
    classes: ["Form 1A", "Form 2A", "+1"],
    workload: { current: 20, max: 24 },
    status: "Active"
  },
  {
    id: 5,
    name: "Mr. Kofi Asante",
    email: "kofi.asante@school.edu.gh",
    phone: "+233 24 567 8901",
    subjects: ["Biology", "Elective ICT"],
    classes: ["Form 1A", "Form 2B"],
    workload: { current: 14, max: 24 },
    status: "Active"
  }
];

export default function TeachersPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header 
          title="Teachers Management" 
          subtitle="Manage department teachers, assignments, and workload."
          actionButton={
            <Link href="/hod/main/teachers/add" className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <span className="text-lg">+</span>
              Add Teacher
            </Link>
          }
        />
        <main className="flex-1 p-6 md:p-8">
          {/* Teachers Table */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subjects</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classes</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Workload</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teachers.map((teacher) => (
                    <tr key={teacher.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-gray-900">
                            <Mail className="w-4 h-4 mr-2 text-gray-400" />
                            {teacher.email}
                          </div>
                          <div className="flex items-center text-sm text-gray-900">
                            <Phone className="w-4 h-4 mr-2 text-gray-400" />
                            {teacher.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-wrap gap-1">
                          {teacher.subjects.map((subject, index) => (
                            <span key={index} className="inline-flex px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-wrap gap-1">
                          {teacher.classes.map((cls, index) => (
                            <span key={index} className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                              {cls}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(teacher.workload.current / teacher.workload.max) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-900 font-medium">{teacher.workload.current}h</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          {teacher.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
