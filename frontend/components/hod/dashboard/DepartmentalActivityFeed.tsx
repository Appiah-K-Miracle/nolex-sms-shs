import { FileText, TrendingUp, AlertTriangle, Users, CheckCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    icon: <FileText className="w-4 h-4 text-white" />,
    iconBg: "bg-blue-500",
    description: "Mr. Mensah submitted lesson plan for Biology",
    time: "10 minutes ago",
  },
  {
    id: 2,
    icon: <TrendingUp className="w-4 h-4 text-white" />,
    iconBg: "bg-green-500",
    description: "Form 2A scored 72% average in Physics test",
    time: "1 hour ago",
  },
  {
    id: 3,
    icon: <AlertTriangle className="w-4 h-4 text-white" />,
    iconBg: "bg-orange-500",
    description: "Three students flagged for repeated low performance",
    time: "2 hours ago",
  },
  {
    id: 4,
    icon: <Users className="w-4 h-4 text-white" />,
    iconBg: "bg-green-500",
    description: "Mrs. Serwaa assigned to Form 3C Chemistry",
    time: "3 hours ago",
  },
  {
    id: 5,
    icon: <CheckCircle className="w-4 h-4 text-white" />,
    iconBg: "bg-blue-500",
    description: "Dr. Frimpong submitted marks for Mathematics midterm",
    time: "5 hours ago",
  },
  {
    id: 6,
    icon: <TrendingUp className="w-4 h-4 text-white" />,
    iconBg: "bg-green-500",
    description: "Form 1B improved attendance by 15% this week",
    time: "1 day ago",
  },
];

const DepartmentalActivityFeed = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Departmental Activity Feed</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`w-8 h-8 ${activity.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 mb-1">{activity.description}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentalActivityFeed;
