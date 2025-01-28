import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

const USERS_DATA = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    imgUrl:
      "https://media.istockphoto.com/id/1181083533/photo/portrait-of-men-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=4Q8kZgvBGnu3A6AjzEI4efYeNvcrL4jJd7z_fG0XH6Y=",
    role: "Customer",
    status: "Active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    imgUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V29tYW4lMjBmYWNlfGVufDB8fDB8fHww",
    role: "Admin",
    status: "Active",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    imgUrl:
      "https://media.istockphoto.com/id/1312105172/photo/happy-african-man-looking-at-camera-indoors-at-home-focus-on-face.webp?a=1&b=1&s=612x612&w=0&k=20&c=jBOvbqtpTU13lpCWt4QWQSHFPbm3EBGIfnmcaEfpjHU=",
    role: "Customer",
    status: "Inactive",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    imgUrl:
      "https://media.istockphoto.com/id/2162095372/photo/woman-portrait-and-happy-in-office-with-arms-crossed-fashion-mogul-and-pride-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=PKx9Y48TC3V_RKQs4HGVKz74MtQAnSZ0yADKJjYOVTs=",
    role: "Customer",
    status: "Active",
  },
  {
    id: "5",
    name: "Charlie Wilson",
    email: "charlie@example.com",
    imgUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    role: "Moderator",
    status: "Active",
  },
];
const UsersTable = () => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(USERS_DATA);

  const handleSearch = (e) => {
    const searched = e.target.value.toLowerCase();
    setSearch(searched);
    const filtered = USERS_DATA.filter(
      (users) =>
        users.name.toLowerCase().includes(searched) ||
        users.email.toLowerCase().includes(searched)
    );
    setFilteredUsers(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Users List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Users..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={search}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredUsers.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-100">
                          {user.name}
                        </div>
                      </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100">{user.role}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'}`}>{user.role}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <button className="text-indigo-400 hover:text-indigo-300 mr-2 cursor-pointer">
                      Edit
                    </button>
                    <button className="text-red-400 hover:text-red-300 cursor-pointer">
                      Delete
                    </button>
                  </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default UsersTable;
