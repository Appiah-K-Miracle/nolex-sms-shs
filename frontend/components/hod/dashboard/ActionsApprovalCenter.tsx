import { FileText, BookOpen, Users, CheckCircle, XCircle } from "lucide-react";

const approvalItems = [
  {
    id: 1,
    icon: <FileText className="w-5 h-5 text-green-700" />,
    badge: "Lesson Plan",
    time: "2 hours ago",
    title: "Biology - Cell Structure & Function",
    person: "Mr. Osei Bonsu",
  },
  {
    id: 2,
    icon: <BookOpen className="w-5 h-5 text-green-700" />,
    badge: "Study Material",
    time: "5 hours ago",
    title: "Physics - Mechanics Past Questions",
    person: "Mrs. Ama Serwaa",
  },
  {
    id: 3,
    icon: <Users className="w-5 h-5 text-green-700" />,
    badge: "Teacher Assignment",
    time: "1 day ago",
    title: "Assign to Form 3B Chemistry",
    person: "Mr. Kwabena Mensah",
  },
  {
    id: 4,
    icon: <FileText className="w-5 h-5 text-green-700" />,
    badge: "Lesson Plan",
    time: "1 day ago",
    title: "Mathematics - Quadratic Equations",
    person: "Dr. Akosua Frimpong",
  },
];

const ActionsApprovalCenter = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Action & Approval Center</h3>
      <div className="space-y-4">
        {approvalItems.map((item) => (
          <div key={item.id} className="bg-gray-50 hover:bg-yellow-200 rounded-lg border border-gray-200 p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-600">{item.person}</p>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 bg-green-100 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors group">
                <CheckCircle className="w-4 h-4 text-green-700 group-hover:text-yellow-800" />
              </button>
              <button className="w-8 h-8 bg-red-100 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors group">
                <XCircle className="w-4 h-4 text-red-700 group-hover:text-yellow-800" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionsApprovalCenter;
