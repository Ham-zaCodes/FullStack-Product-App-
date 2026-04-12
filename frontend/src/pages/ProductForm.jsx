import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/products/${id}`)
        .then((res) => {
          setName(res.data.name);
          setPrice(res.data.price);
        })
        .catch((err) => {
          console.error("Error loading product data", err);
          alert("Product not found!");
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !price || Number(price) <= 0) {
      alert("Please enter valid product name and price!");
      return;
    }

    const data = { name, price: Number(price) };

    try {
      if (id) {
        await axios.put(`http://localhost:5000/products/${id}`, data);
        alert("Product Updated successfully!");
      } else {
        await axios.post("http://localhost:5000/products", data);
        alert("New product added successfully!");
      }

      navigate("/");
    } catch (err) {
      console.error("Submission error", err);
      alert("Error! Request is not completed.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        {id ? " Edit Product" : " Add New Product"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            required
          />
        </div>

        <div className="pt-4 flex gap-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className={`flex-1 text-white py-3 rounded-xl font-semibold transition ${id ? "bg-orange-500 hover:bg-orange-600" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {id ? "Update Product" : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
