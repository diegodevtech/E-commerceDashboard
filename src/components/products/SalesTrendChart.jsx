import { motion } from 'framer-motion';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const salesData = [
  { month: "Jan", sales: 500 },
  { month: "Fev", sales: 400 },
  { month: "Mar", sales: 600 },
  { month: "Apr", sales: 100 },
  { month: "May", sales: 200 },
  { month: "Jun", sales: 300 },
  { month: "Jul", sales: 700 },
  { month: "Aug", sales: 400 },
  { month: "Sep", sales: 200 },
  { month: "Oct", sales: 600 },
  // { month: "Nov", sales: 700 },
  // { month: "Dec", sales: 600 },
];

const SalesTrendChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
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
              type={"bump"}
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
  )
}

export default SalesTrendChart