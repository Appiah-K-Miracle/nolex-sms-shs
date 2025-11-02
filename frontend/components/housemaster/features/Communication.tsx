"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Eye, Send, MessageSquare, Users, User } from "lucide-react";

// Mock data for communications
const mockCommunicationData = {
  statistics: {
    totalMessages: 156,
    broadcasts: 12,
    individual: 144,
    sentToday: 8,
  },
  broadcastMessages: [
    {
      id: "B001",
      title: "Weekly House Meeting Reminder",
      message:
        "This is to remind all students about the weekly house meeting scheduled for tomorrow at 4:00 PM in the main hall. Attendance is compulsory for all boarders.",
      status: "sent",
      recipients: "All house members",
      date: "2024-01-25 14:30",
    },
    {
      id: "B002",
      title: "Room Inspection Schedule",
      message:
        "Room inspection will be conducted this Friday from 2:00 PM to 4:00 PM. Ensure your rooms are tidy and beds properly made.",
      status: "sent",
      recipients: "All house members",
      date: "2024-01-24 10:15",
    },
    {
      id: "B003",
      title: "Sports Practice Cancellation",
      message:
        "Due to the ongoing renovations at the sports field, all sports practices for this week are cancelled. New schedule will be communicated soon.",
      status: "sent",
      recipients: "All house members",
      date: "2024-01-23 16:45",
    },
  ],
  individualMessages: [
    {
      id: "M001",
      recipientId: "SHS2024001",
      recipientName: "Kwame Asare",
      recipientType: "student",
      subject: "Academic Performance Review",
      message:
        "Your recent mathematics test results show significant improvement. Keep up the good work and continue to focus on your studies.",
      sentDate: "2024-01-25 09:20",
      status: "delivered",
      sentBy: "House Master",
      deliveryMethod: "In-app notification",
    },
    {
      id: "M002",
      recipientId: "SHS2024002",
      recipientName: "Ama Serwaa",
      recipientType: "student",
      subject: "Sports Achievement",
      message:
        "Congratulations on your outstanding performance in the inter-house athletics competition. You have made the house proud.",
      sentDate: "2024-01-24 14:30",
      status: "read",
      sentBy: "House Master",
      deliveryMethod: "In-app notification + SMS",
    },
    {
      id: "M003",
      recipientId: "SHS2024003",
      recipientName: "Kofi Mensah",
      recipientType: "guardian",
      subject: "Attendance Concern",
      message:
        "We have noticed that Kofi has been absent from morning assemblies three times this week. Please ensure he arrives at school on time.",
      sentDate: "2024-01-23 11:15",
      status: "sent",
      sentBy: "House Master",
      deliveryMethod: "SMS + Email",
    },
  ],
};

export default function Communication() {
  const { data } = useHouseMaster();
  const [activeView, setActiveView] = useState("dashboard");
  const [activeTab, setActiveTab] = useState("broadcasts");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [messageForm, setMessageForm] = useState<Partial<Message>>({
    recipientType: "student",
    recipientId: "",
    subject: "",
    message: "",
    sendImmediately: true,
    sendSMS: false,
    sendEmail: false,
  });

  const { statistics, broadcastMessages, individualMessages } =
    mockCommunicationData;

  const handleViewMessage = (message: Message) => {
    setSelectedMessage(message);
    setActiveView("messageDetails");
  };

  const handleBackToDashboard = () => {
    setActiveView("dashboard");
    setSelectedMessage(null);
  };

  const handleBackToCompose = () => {
    setActiveView("dashboard");
  };

  const handleComposeBroadcast = () => {
    setActiveView("broadcastCompose");
    setMessageForm({
      recipientType: "student",
      recipientId: "",
      subject: "",
      message: "",
      sendImmediately: true,
      sendSMS: false,
      sendEmail: false,
    });
  };

  const handleComposeIndividual = () => {
    setActiveView("individualCompose");
    setMessageForm({
      recipientType: "student",
      recipientId: "",
      subject: "",
      message: "",
      sendImmediately: true,
      sendSMS: false,
      sendEmail: false,
    });
  };

  const handleSendMessage = () => {
    console.log("Sending message:", messageForm);
    // Implementation for sending message
    setActiveView("dashboard");
  };

  const handleInputChange = <K extends keyof Partial<Message>>(
    field: K,
    value: Partial<Message>[K]
  ) => {
    setMessageForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      sent: "bg-blue-100 text-blue-800",
      delivered: "bg-green-100 text-green-800",
      read: "bg-purple-100 text-purple-800",
      failed: "bg-red-100 text-red-800",
    };

    const statusText = status.charAt(0).toUpperCase() + status.slice(1);

    return (
      <Badge
        className={
          styles[status as keyof typeof styles] || "bg-gray-100 text-gray-800"
        }
      >
        {statusText}
      </Badge>
    );
  };

  // Broadcast Message Compose View
  if (activeView === "broadcastCompose") {
    return (
      <div className="space-y-6">
        {/* Back Button and Title */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleBackToCompose}
            className="flex items-center space-x-2 hover:bg-amber-400 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Broadcast Message
            </h1>
            <p className="text-gray-600">Send a message to all house members</p>
          </div>
        </div>

        {/* Compose Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Compose Broadcast
            </h3>

            <div className="space-y-6">
              {/* Recipients */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Recipients
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    className="h-4 w-4 text-green-800 focus:ring-green-800 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    All house members ({data.students.length} students)
                  </span>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  placeholder="Enter message subject..."
                  value={messageForm.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 h-32"
                  placeholder="Type your message here..."
                  value={messageForm.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
              </div>

              {/* Delivery Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Delivery Options
                </label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={messageForm.sendImmediately}
                      onChange={(e) =>
                        handleInputChange("sendImmediately", e.target.checked)
                      }
                      className="h-4 w-4 text-green-800 focus:ring-green-800 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      Send immediately
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={messageForm.sendSMS}
                      onChange={(e) =>
                        handleInputChange("sendSMS", e.target.checked)
                      }
                      className="h-4 w-4 text-green-800 focus:ring-green-800 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      Also send via SMS
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={messageForm.sendEmail}
                      onChange={(e) =>
                        handleInputChange("sendEmail", e.target.checked)
                      }
                      className="h-4 w-4 text-green-800 focus:ring-green-800 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      Also send via email
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 pt-6">
                <Button
                  onClick={handleBackToCompose}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-amber-400 hover:text-black px-6"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSendMessage}
                  className="bg-green-800 hover:bg-green-700 text-white px-6"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Broadcast
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Individual Message Compose View
  if (activeView === "individualCompose") {
    return (
      <div className="space-y-6">
        {/* Back Button and Title */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleBackToCompose}
            className="flex items-center space-x-2 hover:bg-amber-400 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Individual Message
            </h1>
            <p className="text-gray-600">
              Send a message to a specific student or guardian
            </p>
          </div>
        </div>

        {/* Compose Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Compose Message
            </h3>

            <div className="space-y-6">
              {/* Recipient Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Recipient Type
                </label>
                <div className="flex space-x-6">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="recipientType"
                      value="student"
                      checked={messageForm.recipientType === "student"}
                      onChange={(e) =>
                        handleInputChange("recipientType", e.target.value)
                      }
                      className="h-4 w-4 text-green-800 focus:ring-green-800"
                    />
                    <span className="text-sm text-gray-700">Student</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="recipientType"
                      value="guardian"
                      checked={messageForm.recipientType === "guardian"}
                      onChange={(e) =>
                        handleInputChange("recipientType", e.target.value)
                      }
                      className="h-4 w-4 text-green-800 focus:ring-green-800"
                    />
                    <span className="text-sm text-gray-700">Guardian</span>
                  </div>
                </div>
              </div>

              {/* Recipient */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recipient
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={messageForm.recipientId}
                  onChange={(e) =>
                    handleInputChange("recipientId", e.target.value)
                  }
                >
                  <option value="">
                    Select a {messageForm.recipientType}...
                  </option>
                  {data.students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.name} ({student.id}) - {student.grade}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  placeholder="Enter message subject..."
                  value={messageForm.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 h-32"
                  placeholder="Type your message here..."
                  value={messageForm.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
              </div>

              {/* Delivery Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Delivery Options
                </label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={messageForm.sendImmediately}
                      onChange={(e) =>
                        handleInputChange("sendImmediately", e.target.checked)
                      }
                      className="h-4 w-4 text-green-800 focus:ring-green-800 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      Send immediately
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={messageForm.sendSMS}
                      onChange={(e) =>
                        handleInputChange("sendSMS", e.target.checked)
                      }
                      className="h-4 w-4 text-green-800 focus:ring-green-800 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      Also send via SMS
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={messageForm.sendEmail}
                      onChange={(e) =>
                        handleInputChange("sendEmail", e.target.checked)
                      }
                      className="h-4 w-4 text-green-800 focus:ring-green-800 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      Also send via email
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 pt-6">
                <Button
                  onClick={handleBackToCompose}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-amber-400 hover:text-black px-6"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSendMessage}
                  className="bg-green-800 hover:bg-green-700 text-white px-6"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Message Details View
  if (activeView === "messageDetails") {
    return (
      <div className="space-y-6">
        {/* Back Button and Title */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleBackToDashboard}
            className="flex items-center space-x-2 hover:bg-amber-400 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Message Details
            </h1>
            <p className="text-gray-600">Message {selectedMessage.id}</p>
          </div>
        </div>

        {/* Message Content Card */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Subject and Recipient */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {selectedMessage.subject}
                </h3>
                <p className="text-sm text-gray-600">
                  TO: {selectedMessage.recipientName} (
                  {selectedMessage.recipientType})
                </p>
              </div>

              {/* Message Content */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">
                  Message Content
                </h4>
                <Card className="bg-gray-50 border-gray-200">
                  <CardContent className="p-4">
                    <p className="text-gray-700 whitespace-pre-wrap">
                      {selectedMessage.message}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Delivery Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    Delivery Information
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sent Date:</span>
                      <span className="font-medium text-gray-900">
                        {selectedMessage.sentDate}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sent By:</span>
                      <span className="font-medium text-gray-900">
                        {selectedMessage.sentBy}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Method:</span>
                      <span className="font-medium text-gray-900">
                        {selectedMessage.deliveryMethod}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Student ID:</span>
                      <span className="font-medium text-gray-900">
                        {selectedMessage.recipientId}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Status</h4>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(selectedMessage.status)}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render different content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "broadcasts":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Broadcast History
            </h3>
            {broadcastMessages.map((message) => (
              <Card key={message.id}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2 flex-1">
                        <h4 className="font-semibold text-gray-900 text-lg">
                          {message.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {message.message}
                        </p>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(message.status)}
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{message.recipients}</span>
                      </div>
                      <span>{message.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case "individual":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Individual Message History
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Recipient
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Subject
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Sent Date
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {individualMessages.map((message) => (
                    <tr
                      key={message.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {message.recipientName}
                          </p>
                          <p className="text-xs text-gray-600">
                            {message.recipientId}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-900">
                        {message.subject}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {message.sentDate}
                      </td>
                      <td className="py-3 px-4">
                        {getStatusBadge(message.status)}
                      </td>
                      <td className="py-3 px-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-black hover:bg-amber-400 hover:text-black"
                          onClick={() => handleViewMessage(message)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Main Communication Dashboard
  return (
    <div className="space-y-6">
      {/* Title and Compose Buttons */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Communication</h1>
          <p className="text-gray-600 mt-1">
            Manage messages and communications with students and guardians
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-3 md:space-x-3 mx-2">
          <Button
            onClick={handleComposeBroadcast}
            className="bg-green-800 hover:bg-green-700 text-white px-6"
          >
            <Users className="h-4 w-4 mr-2" />
            Broadcast Message
          </Button>
          <Button
            onClick={handleComposeIndividual}
            className="bg-green-800 hover:bg-green-700 text-white px-6"
          >
            <User className="h-4 w-4 mr-2" />
            Individual Message
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between space-x-4">
              <div>
                <h3 className="mb-6">Total Messages</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.totalMessages}
                </p>
                <p className="text-sm text-gray-600">All time</p>
              </div>
              <div className="p-3">
                <MessageSquare className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Broadcasts</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.broadcasts}
                </p>
                <p className="text-sm text-gray-600">House-wide messages</p>
              </div>
              <div className="p-3">
                <Users className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Individual</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.individual}
                </p>
                <p className="text-sm text-gray-600">Personal messages</p>
              </div>
              <div className="p-3">
                <User className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Sent Today</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.sentToday}
                </p>
                <p className="text-sm text-gray-600">Messages sent today</p>
              </div>
              <div className="p-3">
                <Send className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <Card className="border-none shadow-md rounded-2xl bg-white">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <Button
              onClick={() => setActiveTab("broadcasts")}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "broadcasts"
                  ? "bg-green-800 text-white shadow-md hover:bg-green-700"
                  : "bg-gray-100 text-gray-800 hover:bg-amber-400 hover:text-black"
              }`}
            >
              <Users className="h-4 w-4" />
              Broadcast Messages
            </Button>

            <Button
              onClick={() => setActiveTab("individual")}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "individual"
                  ? "bg-green-800 text-white shadow-md hover:bg-green-700"
                  : "bg-gray-100 text-gray-800 hover:bg-amber-400 hover:text-black"
              }`}
            >
              <User className="h-4 w-4" />
              Individual Messages
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Content Card */}
      <Card>
        <CardContent className="p-6">{renderTabContent()}</CardContent>
      </Card>
    </div>
  );
}
