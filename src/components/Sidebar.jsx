import { motion } from "framer-motion";
import {
  BarChart2,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    path: "/",
  },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "#8b5cf6",
    path: "/products",
  },
  {
    name: "Users",
    icon: Users,
    color: "#ec4899",
    path: "/users",
  },
  {
    name: "Sales",
    icon: DollarSign,
    color: "#10b981",
    path: "/sales",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    color: "#f59e0b",
    path: "/orders",
  },
  {
    name: "Analytics",
    icon: TrendingUp,
    color: "#3b82f6",
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#6ee7b7",
    path: "/settings",
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 265 : 80 }}
    ></motion.div>
  );
};

export default Sidebar;
