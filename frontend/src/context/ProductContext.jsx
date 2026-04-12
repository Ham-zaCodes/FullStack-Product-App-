import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, loading, deleteProduct, fetchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
