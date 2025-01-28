import { useState } from "react";
import SettingsSection from "./SettingsSection";
import { HelpCircle, Plus } from "lucide-react";

const ConnectedAccounts = () => {
	const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "Google",
			connected: true,
			icon: "https://github.com/burakorkmez/react-admin-dashboard/blob/master/public/google.png?raw=true",
		},
		{
			id: 2,
			name: "Facebook",
			connected: false,
			icon: "https://imgs.search.brave.com/_ESHqrMWEPDAPGUVjKM_TW5v5c5XZ5szqR8Lniw56o8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTI0LzEyNDAx/MC5wbmc",
		},
		{
			id: 3,
			name: "Github",
			connected: true,
			icon: "https://imgs.search.brave.com/ChKaCV4dvS-XpWwhnvk6XfJVKlJvOEF4WrHpEjyRrAM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9naXRodWIt/aWNvbi01MTJ4NDk3/LW9wcHRocmUyLnBu/Zw",
		},
	]);
	return (
		<SettingsSection icon={HelpCircle} title={"Connected Accounts"}>
			{connectedAccounts.map((account) => (
				<div key={account.id} className='flex items-center justify-between py-3'>
					<div className='flex gap-1'>
						<img src={account.icon} alt='Social img' className='size-6 object-cover rounded-full mr-2' />
						<span className='text-gray-300'>{account.name}</span>
					</div>
					<button
						className={`px-3 py-1 rounded ${
							account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
						} transition duration-200`}
						onClick={() => {
							setConnectedAccounts(
								connectedAccounts.map((acc) => {
									if (acc.id === account.id) {
										return {
											...acc,
											connected: !acc.connected,
										};
									}
									return acc;
								})
							);
						}}
					>
						{account.connected ? "Connected" : "Connect"}
					</button>
				</div>
			))}
			<button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
				<Plus size={18} className='mr-2' /> Add Account
			</button>
		</SettingsSection>
	);
};
export default ConnectedAccounts;