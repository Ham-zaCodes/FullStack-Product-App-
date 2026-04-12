import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 p-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
        >
          🗳️ PRODUCT MANAGER
        </Link>
        <Link
          to="/add"
          className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-purple-700 hover:shadow-lg transition-all active:scale-95"
        >
          Add Product
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
