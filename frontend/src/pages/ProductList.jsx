import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext.jsx";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, loading, deleteProduct } = useContext(ProductContext);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = (products || []).filter((product) => {
    const nameToSearch = product.name
      ? product.name.toString().toLowerCase()
      : "";
    return nameToSearch.includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return (
      <div className="text-center mt-20 text-2xl font-bold text-blue-600 animate-pulse">
        Loading Products...
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto mb-10">
        <input
          type="text"
          placeholder="🔍 Search products by name..."
          className="w-full p-4 border-2 border-blue-200 rounded-2xl shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center mt-10 text-gray-500 text-xl font-medium">
          No products found. Try adding some!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="p-5 flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">
                  {product.name}
                </h3>

                <p className="text-blue-600 font-black text-2xl mb-4">
                  ${product.price}
                </p>

                <div className="flex flex-col gap-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-center bg-sky-800 text-white py-2 rounded-lg font-medium hover:bg-sky-900 transition"
                  >
                    View Details
                  </Link>

                  <div className="flex gap-2">
                    <Link
                      to={`/edit/${product.id}`}
                      className="flex-1 text-center bg-slate-400 text-white py-2 rounded-lg font-medium hover:bg-slate-500 transition"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="flex-1 bg-fuchsia-500 text-white py-2 rounded-lg font-medium hover:bg-fuchsia-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
