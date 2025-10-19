"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Communication: React.FC = () => {
  const [message, setMessage] = useState({
    recipient: "all",
    subject: "",
    content: "",
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent to ${message.recipient}`);
    setMessage({
      recipient: "all",
      subject: "",
      content: "",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-black mb-4">
          Communication Center
        </h1>
        <p className="text-lg text-gray-600">
          Send messages to staff, students, and houses
        </p>
      </div>

      {/* Compose Message Card */}
      <Card className="bg-white shadow-sm hover:shadow-md transition-all ">
        <CardContent className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-black mb-2">
              Compose Message
            </h2>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-6">
            {/* Recipients Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipients
              </label>
              <select
                value={message.recipient}
                onChange={(e) =>
                  setMessage((prev) => ({ ...prev, recipient: e.target.value }))
                }
                className="w-50 border border-gray-200 rounded-sm p-2 bg-green-50 text-gray-900"
              >
                <option value="all" className="mt-3">
                  All Housemasters
                </option>
                <option value="teachers">All Boarding Students</option>
                <option value="specificHouse">Specific House</option>
              </select>
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={message.subject}
                onChange={(e) =>
                  setMessage((prev) => ({ ...prev, subject: e.target.value }))
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-3
              shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition-all duration-200 placeholder:text-gray-400 bg-green-50 "
                placeholder="Message subject..."
                required
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                value={message.content}
                onChange={(e) =>
                  setMessage((prev) => ({ ...prev, content: e.target.value }))
                }
                rows={8}
                className="w-full border h-20 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical bg-green-50 "
                placeholder="Type your message here..."
                required
              />
            </div>

            {/* Send Button */}
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Communication;
