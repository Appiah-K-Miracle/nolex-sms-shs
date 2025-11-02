"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, BookOpen, AlertTriangle, FileText, Plus, X } from 'lucide-react';

export interface FollowUpAction {
  action: string;
  dueDate: string;
}

export interface TeacherReportData {
  teacherName: string;
  subject: string;
  reportTitle: string;
  reportType: string;
  priority: string;
  description: string;
  details: string[];
  recommendations: string[];
  followUpActions: FollowUpAction[];
}

interface TeacherReportFormProps {
  onSubmit?: (data: TeacherReportData) => void;
  onCancel?: () => void;
  initialData?: TeacherReportData;
}

export default function TeacherReportForm({ onSubmit, onCancel, initialData }: TeacherReportFormProps) {
  const [formData, setFormData] = useState<TeacherReportData>({
    teacherName: initialData?.teacherName || '',
    subject: initialData?.subject || '',
    reportTitle: initialData?.reportTitle || '',
    reportType: initialData?.reportType || '',
    priority: initialData?.priority || '',
    description: initialData?.description || '',
    details: initialData?.details || [],
    recommendations: initialData?.recommendations || [],
    followUpActions: initialData?.followUpActions || [{ action: '', dueDate: '' }]
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: keyof Omit<TeacherReportData, 'followUpActions'>, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).map((item: string, i: number) => 
        i === index ? value : item
      )
    }));
  };

  const handleFollowUpChange = (index: number, field: keyof FollowUpAction, value: string) => {
    setFormData(prev => ({
      ...prev,
      followUpActions: prev.followUpActions.map((item: FollowUpAction, i: number) =>
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  function addArrayItem(field: "details" | "recommendations"): void;
  function addArrayItem(field: "followUpActions"): void;
  function addArrayItem(field: keyof TeacherReportData): void {
    setFormData(prev => {
      if (field === "details" || field === "recommendations") {
        return {
          ...prev,
          [field]: [...prev[field], '']
        };
      } else if (field === "followUpActions") {
        return {
          ...prev,
          [field]: [...prev[field], { action: '', dueDate: '' }]
        };
      }
      return prev;
    });
  }

  function removeArrayItem(field: "details" | "recommendations", index: number): void;
  function removeArrayItem(field: "followUpActions", index: number): void;
  function removeArrayItem(field: keyof TeacherReportData, index: number): void {
    setFormData(prev => {
      if (field === "details" || field === "recommendations") {
        return {
          ...prev,
          [field]: prev[field].filter((_: string, i: number) => i !== index)
        };
      } else if (field === "followUpActions") {
        return {
          ...prev,
          [field]: prev[field].filter((_: FollowUpAction, i: number) => i !== index)
        };
      }
      return prev;
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const teachers = [
    "Mr. Osei Bonsu",
    "Mrs. Ama Serwaa", 
    "Mr. Kofi Asante",
    "Dr. Akosua Frimpong",
    "Mrs. Efua Asante",
    "Mr. Kwabena Mensah"
  ];

  const subjects = [
    "Physics",
    "Chemistry",
    "Biology",
    "Mathematics",
    "English Language",
    "Elective Mathematics"
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Basic Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="teacherName">Teacher Name</Label>
              <Select value={formData.teacherName} onValueChange={(value) => handleInputChange('teacherName', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select teacher" />
                </SelectTrigger>
                <SelectContent>
                  {teachers.map((teacher) => (
                    <SelectItem key={teacher} value={teacher}>
                      {teacher}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reportTitle">Report Title</Label>
            <Input
              id="reportTitle"
              value={formData.reportTitle}
              onChange={(e) => handleInputChange('reportTitle', e.target.value)}
              placeholder="Enter report title"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="reportType">Report Type</Label>
              <Select value={formData.reportType} onValueChange={(value) => handleInputChange('reportType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Concern">Concern</SelectItem>
                  <SelectItem value="Commendation">Commendation</SelectItem>
                  <SelectItem value="Investigation">Investigation</SelectItem>
                  <SelectItem value="Performance Review">Performance Review</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Report Description */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Report Description
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Provide a detailed description of the report..."
              rows={4}
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.details.map((detail: string, index: number) => (
            <div key={index} className="flex gap-2">
              <Input
                value={detail}
                onChange={(e) => handleArrayChange('details', index, e.target.value)}
                placeholder={`Detail ${index + 1}`}
                className="flex-1"
              />
              {formData.details.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeArrayItem('details', index)}
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => addArrayItem('details')}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Detail
          </Button>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.recommendations.map((recommendation: string, index: number) => (
            <div key={index} className="flex gap-2">
              <Input
                value={recommendation}
                onChange={(e) => handleArrayChange('recommendations', index, e.target.value)}
                placeholder={`Recommendation ${index + 1}`}
                className="flex-1"
              />
              {formData.recommendations.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeArrayItem('recommendations', index)}
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => addArrayItem('recommendations')}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Recommendation
          </Button>
        </CardContent>
      </Card>

      {/* Follow-up Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Follow-up Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.followUpActions.map((action: FollowUpAction, index: number) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input
                value={action.action}
                onChange={(e) => handleFollowUpChange(index, 'action', e.target.value)}
                placeholder="Action description"
              />
              <div className="flex gap-2">
                <Input
                  type="date"
                  value={action.dueDate}
                  onChange={(e) => handleFollowUpChange(index, 'dueDate', e.target.value)}
                  className="flex-1"
                />
                {formData.followUpActions.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => removeArrayItem('followUpActions', index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => addArrayItem('followUpActions')}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Follow-up Action
          </Button>
        </CardContent>
      </Card>

      {/* Form Actions */}
      <div className="flex justify-end gap-4">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit">
          Submit Report
        </Button>
      </div>
    </form>
  );
}