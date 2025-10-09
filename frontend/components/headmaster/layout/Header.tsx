"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, Settings, User as UserIcon } from "lucide-react";


export default function Header() {
  const [open, setOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-white border-b border-gray-200">
      {/* Left: School logo and name */}
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-10 h-10 rounded-xl bg-green-700 flex items-center justify-center">
          <span className="text-white text-lg font-extrabold">GH</span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-lg font-bold text-gray-900 truncate">
            Ghana Senior High School
          </span>
          <span className="text-green-700 text-sm font-medium">
            Headmaster Dashboard
          </span>
        </div>
      </div>
      {/* Right: Notification, settings, user */}
      <div className="flex items-center gap-6">
        {/* Notification bell with red dot */}
        <div className="relative">
          <Bell className="w-4 h-4 text-gray-900" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
        </div>
        {/* Settings icon */}
        <Settings className="w-4 h-4 text-gray-900" />
        {/* User avatar and name with dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            className="flex items-center gap-2 focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="true"
            aria-expanded={open}
          >
            <div className="w-7 h-7 rounded-full bg-green-700 flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-900 font-medium whitespace-nowrap">
              Dr. Kwame Mensah
            </span>
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fade-in">
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
