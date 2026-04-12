import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import ProductForm from "./pages/ProductForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/add" element={<ProductForm />} />
            <Route path="/edit/:id" element={<ProductForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
