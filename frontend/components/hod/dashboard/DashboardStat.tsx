
import { BookOpen, Users, GraduationCap, TrendingUp, AlertTriangle, ClipboardCheck } from "lucide-react";

const stats = [
  {
    icon: <BookOpen className="w-8 h-8 text-green-700" />, title: "Total subjects", value: "12", sub: "Two new this term", subClass: "text-gray-500", subBold: false,
  },
  {
    icon: <Users className="w-8 h-8 text-green-700" />, title: "Total Teachers", value: "24", sub: "3 assigned recently", subClass: "text-gray-500", subBold: false,
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-green-700" />, title: "Total students", value: "486", sub: "12 more than last term", subClass: "text-green-700", subBold: false,
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-700" />, title: "Average pass rate", value: "78.5%", sub: "5.2% from last term", subClass: "text-green-700", subBold: false,
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-red-500" />, title: "Students at risk", value: "23", sub: "8 fewer than last month", subClass: "text-red-500", subBold: false, iconBg: "bg-red-50",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-orange-500" />, title: "Pending approval", value: "7", sub: "", subClass: "text-gray-500", subBold: false, iconBg: "bg-orange-50",
  },
];

const HODDashboardStat = () => {
  return (
    <section className="bg-[#f8fbf4] rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between min-h-[120px] shadow-sm"
          >
            <div className="flex-1">
              <div className="text-gray-700 text-sm font-medium mb-2">{stat.title}</div>
              <div className={`text-2xl font-bold text-gray-900 mb-1 ${stat.subBold ? 'tracking-tight' : ''}`}>{stat.value}</div>
              {stat.sub && <div className={`text-[12px] ${stat.subClass}`}>{stat.sub}</div>}
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.iconBg || 'bg-green-50'}`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HODDashboardStat;


