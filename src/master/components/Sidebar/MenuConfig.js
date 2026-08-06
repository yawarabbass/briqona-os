import {
  House,
  LayoutDashboard,
  Building2,
  Package,
  Factory,
  Boxes,
  Users,
  CreditCard,
  BarChart3,
  Bot,
  Settings,
} from "lucide-react";

const menuConfig = [
  {
    id: 1,
    title: "Home",
    path: "/master/home",
    icon: House,
  },

  {
    id: 2,
    title: "Dashboard",
    path: "/master/dashboard",
    icon: LayoutDashboard,
  },

  {
    id: 3,
    title: "Companies",
    path: "/master/companies",
    icon: Building2,
  },

  {
    id: 4,
    title: "Plans",
    path: "/master/plans",
    icon: Package,
  },

  {
    id: 5,
    title: "Industries",
    path: "/master/industries",
    icon: Factory,
  },

  {
    id: 6,
    title: "Modules",
    path: "/master/modules",
    icon: Boxes,
  },

  {
    id: 7,
    title: "Users",
    path: "/master/users",
    icon: Users,
  },

  {
    id: 8,
    title: "Billing",
    path: "/master/billing",
    icon: CreditCard,
  },

  {
    id: 9,
    title: "Reports",
    path: "/master/reports",
    icon: BarChart3,
  },

  {
    id: 10,
    title: "AI Center",
    path: "/master/ai",
    icon: Bot,
  },

  {
    id: 11,
    title: "Settings",
    path: "/master/settings",
    icon: Settings,
  },
];

export default menuConfig;
