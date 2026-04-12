import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        alert("Product not found!");
        navigate("/");
      }
    };
    fetchProduct();
  }, [id, navigate]);

  if (loading)
    return <div className="text-center mt-10">Loading Details...</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl border">
      <button
        onClick={() => navigate("/")}
        className="text-blue-500 mb-4 hover:underline"
      >
        ← Back to List
      </button>
      <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
      <p className="text-2xl text-blue-600 font-bold mt-2">
        Price: ${product.price}
      </p>
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-600">Product ID: {product.id}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
