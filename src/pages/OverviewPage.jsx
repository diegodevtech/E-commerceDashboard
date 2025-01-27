import Header from "../components/common/Header"
import { motion } from "framer-motion"
import StatCard from "../components/common/StatCard"
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react"

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview"/>
      <main className="max-w-7xl mx-auto py-6 px-4 lx:px-8">
        <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0, y: 1 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Sales" icon={Zap} value="$12.345" color="#6366f1"/>
          <StatCard name="New Users" icon={Users} value="" color="#8b5cf6"/>
          <StatCard name="Total Products" icon={ShoppingBag} value="" color="#ec4899"/>
          <StatCard name="Conversion Rate" icon={BarChart2} value="" color="#10b981"/>
        </motion.div>
      </main>
    </div>
  )
}

export default OverviewPage