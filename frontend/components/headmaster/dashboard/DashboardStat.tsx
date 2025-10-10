
import {
  Users,
  GraduationCap,
  TrendingUp,
  DollarSign,
  BadgeCheck,
  UserPlus,
  AlertTriangle,
  Wallet,
} from "lucide-react";

const stats = [
  {
    icon: <Users className="w-8 h-8 text-green-700" />, title: "Total Students", value: "2,847", sub: "+12% from last term", subClass: "text-green-700", subBold: false,
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-green-700" />, title: "Total Staff", value: "186", sub: "142 Teaching / 44 Non-Teaching", subClass: "text-gray-500", subBold: false,
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-700" />, title: "Attendance Rate", value: "94.2%", sub: "Today: 92.8%", subClass: "text-gray-500", subBold: false,
  },
  {
    icon: <DollarSign className="w-8 h-8 text-green-700" />, title: "Fees Collection", value: "₵1.2M", sub: "Outstanding: ₵340K", subClass: "text-gray-500", subBold: false,
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-green-700" />, title: "Avg. Performance", value: "72.5%", sub: "+3.2% from last term", subClass: "text-green-700", subBold: false,
  },
  {
    icon: <UserPlus className="w-8 h-8 text-green-700" />, title: "Pending Admissions", value: "47", sub: "Awaiting approval", subClass: "text-gray-500", subBold: false,
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-red-400" />, title: "Disciplinary Alerts", value: "8", sub: "3 urgent cases", subClass: "text-red-400", subBold: false, iconBg: "bg-red-50" },
  {
    icon: <Wallet className="w-8 h-8 text-green-700" />, title: "Payroll Status", value: "On Track", sub: "Due in 5 days", subClass: "text-gray-500", subBold: true,
  },
];

const HeadmasterDashboardStat = () => {
  return (
    <section className="bg-[#f8fbf4]  rounded-xl">
      <h2 className="text-lg md:text-xl font-bold mb-6 text-gray-900">School Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat, i) => (
          <div
            key={stat.title}
            className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col gap-4 min-h-[130px] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${stat.iconBg || 'bg-green-50'}`}>
                {stat.icon}
              </div>
              <div className="flex-1 flex items-center justify-end">
                <div className="text-gray-700 text-sm font-medium">{stat.title}</div>
              </div>
            </div>
            <div className="flex-1">
              <div className={`text-2xl font-bold text-gray-900 mb-1 ${stat.subBold ? 'tracking-tight' : ''}`}>{stat.value}</div>
              <div className={`text-[12px] ${stat.subClass}`}>{stat.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeadmasterDashboardStat;