import { Route, Routes } from "react-router-dom"
import OverviewPage from "./pages/OverviewPage"
import ProductsPage from "./pages/ProductsPage"

function App() {

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <Routes>
        <Route path="/" element={<OverviewPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
      </Routes>
    </div>
  )
}

export default App
