import { motion } from "framer-motion";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const userGrowthData = [
  { month: "Jan", users: 500 },
  { month: "Fev", users: 400 },
  { month: "Mar", users: 600 },
  { month: "Apr", users: 100 },
  { month: "May", users: 200 },
  { month: "Jun", users: 300 },
];

const UserGrowthChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>
      <div className="h-[320px]">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray={"3 3"} stroke="#374151" />
            <XAxis dataKey={"month"} stroke="#9ca3af"/>
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
              dataKey={"users"}
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default UserGrowthChart;
