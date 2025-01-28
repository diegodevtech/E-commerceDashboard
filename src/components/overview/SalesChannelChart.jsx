import { motion } from 'framer-motion';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const SALES_CHANNEL_DATA = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 38200 },
  { name: "Marketplace", value: 29800 },
  { name: "Social Media", value: 18700 },
];

const COLORS = ['#6366F1','#8B5CF6','#EC4899','#10B981','#F59E0B'];

const SalesChannelChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg roundex-xl p-6 border border-gray-700 lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales By Channel
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart
            data={SALES_CHANNEL_DATA}
          >
            <CartesianGrid strokeDasharray={'3 3'} stroke='#4b5563' />
            <XAxis dataKey={'name'} stroke='#9ca3af'/>
            <YAxis stroke='#9ca3af'/>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(31,41,55,0.8)',
                borderColor: '#4b5563'
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend />
            <Bar 
              dataKey={'value'}
              fill='#8884d8'
            >
              {
                SALES_CHANNEL_DATA.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index & COLORS.length]} />
                ))
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default SalesChannelChart