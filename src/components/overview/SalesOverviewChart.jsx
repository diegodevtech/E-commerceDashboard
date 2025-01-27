import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 1000 },
  { month: "Fev", sales: 2000 },
  { month: "Mar", sales: 3000 },
  { month: "Apr", sales: 4000 },
  { month: "May", sales: 5000 },
  { month: "Jun", sales: 6000 },
  { month: "Jul", sales: 7000 },
  { month: "Aug", sales: 8000 },
  { month: "Sep", sales: 9000 },
  { month: "Oct", sales: 1000 },
  { month: "Nov", sales: 2000 },
  { month: "Dec", sales: 3000 },
];
const SalesOverviewChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg roundex-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray={"3 3"} stroke="#4b5563" />
            <XAxis dataKey={"month"} />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55, 0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Line
              type={"monotone"}
              dataKey={"sales"}
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ fill: "#6366f1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
