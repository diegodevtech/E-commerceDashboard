import AIPoweredInsights from "../components/analytics/AIPoweredInsights";
import ChannelPerformance from "../components/analytics/ChannelPerformance";
import CustomerSegmentation from "../components/analytics/CustomerSegmentation";
import OverviewCard from "../components/analytics/OverviewCard";
import ProductPerformance from "../components/analytics/ProductPerformance";
import RevenueChart from "../components/analytics/RevenueChart";
import UserRetention from "../components/analytics/UserRetention";
import Header from "../components/common/Header";

const AnalyticsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title={"Analytics Dashboard"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<OverviewCard />
				<RevenueChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ChannelPerformance />
					<ProductPerformance />
					<UserRetention />
					<CustomerSegmentation />
				</div>

				<AIPoweredInsights />
			</main>
		</div>
	);
};
export default AnalyticsPage;