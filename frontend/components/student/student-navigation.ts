interface NavItem {
  title: string;
  href: string;
  icon: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

export const studentNavigation = {
  title: "Student Portal",
  subtitle: "Ghana SHS",
  icon: "LayoutDashboard",
  menuItems: [
    { title: "Dashboard", href: "/student/dashboard", icon: "LayoutDashboard" },
    { title: "Academics", href: "/student/academics", icon: "BookOpen" },
    { title: "Assignments & Exams", href: "/student/assignment-exams", icon: "ClipboardCheck" },
    { title: "Attendance", href: "/student/attendance", icon: "Calendar" },
  ],
  additionalGroups: [
    {
      title: "Student Life",
      items: [
        { title: "Clubs & Leadership", href: "/student/clubs-leadership", icon: "Award" },
        { title: "Discipline & Conduct", href: "/student/discipline-conduct", icon: "Shield" },
        { title: "Fees & Payments", href: "/student/fees-payments", icon: "DollarSign" },
        { title: "Library", href: "/student/library", icon: "BookOpen" },
        { title: "Communications", href: "/student/communications", icon: "MessageSquare" },
        { title: "Timetable", href: "/student/timetable", icon: "Calendar" },
      ],
    },
  ],
};
