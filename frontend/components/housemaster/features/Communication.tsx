"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import { Search, Plus, Send, Mail, Bell, MessageSquare } from "lucide-react";

export default function Communication() {
  const { data } = useHouseMaster();
  const [activeTab, setActiveTab] = useState("announcements");
  const [newMessage, setNewMessage] = useState({
    title: "",
    message: "",
    recipient: "all",
  });

  const announcements = [
    {
      id: "A001",
      title: "Weekly House Meeting",
      message:
        "There will be a house meeting this Friday at 4 PM in the common room.",
      date: "2024-01-18",
      priority: "High",
      sentBy: "House Master",
    },
    {
      id: "A002",
      title: "Room Inspection",
      message:
        "Room inspection will be conducted tomorrow morning. Please ensure your rooms are tidy.",
      date: "2024-01-17",
      priority: "Medium",
      sentBy: "House Master",
    },
  ];

  const sendMessage = () => {
    if (newMessage.title && newMessage.message) {
      // Implementation for sending message
      console.log("Sending message:", newMessage);
      setNewMessage({ title: "", message: "", recipient: "all" });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Communication</h1>
          <p className="text-gray-600">
            Send announcements and communicate with students
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Send Message Card */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Send Message
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Recipient
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  value={newMessage.recipient}
                  onChange={(e) =>
                    setNewMessage({ ...newMessage, recipient: e.target.value })
                  }
                >
                  <option value="all">All Students</option>
                  <option value="prefects">Prefects Only</option>
                  <option value="specific">Specific Students</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  value={newMessage.title}
                  onChange={(e) =>
                    setNewMessage({ ...newMessage, title: e.target.value })
                  }
                  placeholder="Message title"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="w-full border rounded-lg px-3 py-2 mt-1 h-32"
                  value={newMessage.message}
                  onChange={(e) =>
                    setNewMessage({ ...newMessage, message: e.target.value })
                  }
                  placeholder="Type your message here..."
                />
              </div>
              <Button
                onClick={sendMessage}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Announcements List */}
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Recent Announcements
              </h2>
              <Button variant="outline">
                <Bell className="h-4 w-4 mr-2" />
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {announcement.title}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              announcement.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {announcement.priority}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {announcement.message}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>Sent by: {announcement.sentBy}</span>
                          <span>{announcement.date}</span>
                        </div>
                      </div>
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Communication */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Quick Communication
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col">
              <Mail className="h-5 w-5 mb-1" />
              <span className="text-xs">Email Parents</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col">
              <Bell className="h-5 w-5 mb-1" />
              <span className="text-xs">Emergency Alert</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col">
              <MessageSquare className="h-5 w-5 mb-1" />
              <span className="text-xs">Group Message</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col">
              <Send className="h-5 w-5 mb-1" />
              <span className="text-xs">Broadcast</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
