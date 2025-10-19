import { BookOpen, Upload, Megaphone, Calendar } from "lucide-react";

const quickActions = [
  {
    icon: <BookOpen className="w-5 h-5 text-gray-700" />,
    text: "Manage Electives",
  },
  {
    icon: <Upload className="w-5 h-5 text-gray-700" />,
    text: "Upload Materials",
  },
  {
    icon: <Megaphone className="w-5 h-5 text-gray-700" />,
    text: "Send Announcement",
  },
  {
    icon: <Calendar className="w-5 h-5 text-gray-700" />,
    text: "Schedule Meeting",
  },
];

const QuickActions = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
      <div className="space-y-3">
        {quickActions.map((action, index) => (
          <button
            key={index}
            className="w-full bg-gray-50 hover:bg-yellow-400 rounded-lg p-3 flex items-center gap-3 transition-colors group"
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              {action.icon}
            </div>
            <span className="text-sm font-medium text-gray-900 group-hover:text-yellow-800">{action.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
