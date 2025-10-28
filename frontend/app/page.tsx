import Link from "next/link";
import {
  UserCog,
  Users,
  BookUser,
  User,
  GraduationCap,
  HeartHandshake,
  Home as HomeIcon,
  Building,
  Archive,
} from "lucide-react";

const roles = [
  {
    title: "Headmaster",
    href: "/headmaster/dashboard",
    description: "Manage school operations and oversee academic activities.",
    icon: "UserCog",
  },
  {
    title: "Head of Department (HOD)",
    href: "/hod/main/dashboard",
    description: "Oversee a department's academic activities and staff.",
    icon: "Users",
  },
  {
    title: "Headmaster Academics",
    href: "/headmaster-academics/dashboard",
    description: "Manage academic curriculum and student performance.",
    icon: "BookUser",
  },
  {
    title: "Teacher",
    href: "/teacher/teaching/dashboard",
    description: "Access class schedules, student information, and manage assignments.",
    icon: "User",
  },
  {
    title: "Students",
    href: "/student/dashboard",
    description: "View your courses, grades, and school announcements.",
    icon: "GraduationCap",
  },
  {
    title: "Parents",
    href: "/parent/dashboard",
    description: "Monitor your child's academic progress and communicate with teachers.",
    icon: "HeartHandshake",
  },
  {
    title: "Senior House Master",
    href: "/senior-house-master/dashboard",
    description: "Manage student housing and related activities.",
    icon: "Home",
  },
  {
    title: "Housemaster",
    href: "/housemaster/dashboard",
    description: "Oversee a specific student house and its residents.",
    icon: "Building",
  },
  {
    title: "Inventory (Store)",
    href: "/inventory/dashboard",
    description: "Manage school supplies and inventory.",
    icon: "Archive",
  },
];

const iconMap: { [key: string]: React.ElementType } = {
  UserCog,
  Users,
  BookUser,
  User,
  GraduationCap,
  HeartHandshake,
  Home: HomeIcon,
  Building,
  Archive,
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-green-400 via-blue-200 to-yellow-100 animate-gradient-x" />
      {/* Glassmorphism card container */}
      <div className="relative z-10 w-full max-w-7xl px-4 py-12 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-3 drop-shadow-lg tracking-tight">
          Nolex <span className="text-green-600">SMS</span> for <span className="text-yellow-600">SHS</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12 font-medium text-center max-w-2xl drop-shadow-sm">
          Your complete school management solution.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
          {roles.map((role) => {
            const Icon = iconMap[role.icon];
            return (
              <Link
                key={role.href}
                href={role.href}
                className="group relative p-7 rounded-2xl shadow-2xl bg-white/60 backdrop-blur-md border border-white/40 hover:bg-white/80 transition-all duration-300 ease-in-out flex flex-col items-center text-center hover:scale-[1.04] hover:shadow-yellow-200/60"
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              >
                <div className="p-3 bg-gradient-to-tr from-green-200 via-yellow-100 to-white rounded-full mb-3 border-2 border-green-400 group-hover:border-yellow-400 transition-colors shadow-md">
                  <Icon className="w-10 h-10 text-green-600 group-hover:text-yellow-500 transition-colors" />
                </div>
                <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-yellow-500 transition-colors">
                  {role.title}
                </h2>
                <p className="text-sm md:text-base text-gray-700 group-hover:text-green-700 transition-colors">
                  {role.description}
                </p>
                <span className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 text-xs text-yellow-500 font-semibold transition-opacity">Go &rarr;</span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Decorative blurred circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-300 rounded-full filter blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full filter blur-2xl opacity-40 z-0" />
    </div>
  );
}
