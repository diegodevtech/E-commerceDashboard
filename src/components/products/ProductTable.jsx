import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
  {
    id: "1",
    name: "Wireless Airbuds",
    imgUrl: 'https://images.unsplash.com/photo-1655804439989-24758d6e96b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2lyZWxlc3MlMjBlYXJwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
    category: "Eletronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: "2",
    name: "Leather Wallet",
    imgUrl: 'https://media.istockphoto.com/id/180756294/photo/wallet.webp?a=1&b=1&s=612x612&w=0&k=20&c=TLaEknZrTHzhQpX1stxfNIn6EpMpdOkkXX6JfxOpuXI=',
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: "3",
    name: "Smart Watch",
    imgUrl: 'https://images.unsplash.com/photo-1553545204-4f7d339aa06a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D',
    category: "Eletronics",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: "4",
    name: "Yoga Mat",
    imgUrl: 'https://media.istockphoto.com/id/2170986614/photo/yoga-mat.webp?a=1&b=1&s=612x612&w=0&k=20&c=uC56s5n3DCO1q-wLdLIvy67lXkwWG6rXQpRFy0vkhAE=',
    category: "Fitness",
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: "5",
    name: "Coffee Maker",
    imgUrl: 'https://images.unsplash.com/photo-1608354580875-30bd4168b351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29mZmVlJTIwbWFrZXJ8ZW58MHx8MHx8fDA%3D',
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
];

const ProductTable = () => {

  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const searched = e.target.value.toLowerCase();
    setSearch(searched);
    const filtered = PRODUCT_DATA.filter((product) => product.name.toLowerCase().includes(searched) || product.category.toLowerCase().includes(searched));
    setFilteredProducts(filtered);
  }

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Products List</h2>
        <div className="relative overflow-hidden">
          <input
            type="text"
            placeholder="Search Products..."
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
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-700">
            {
              filteredProducts.map((product) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-4 items-center">
                    <img 
                      src={product.imgUrl}
                      alt='Product Image'
                      className="size-10 rounded-full"
                    />
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {product.sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <button className="text-indigo-400 hover:text-indigo-300 mr-2 cursor-pointer">
                      <Edit size={18}/>
                    </button>
                    <button className="text-red-400 hover:text-red-300 cursor-pointer">
                      <Trash2 size={18}/>
                    </button>
                  </td>
                </motion.tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductTable;
