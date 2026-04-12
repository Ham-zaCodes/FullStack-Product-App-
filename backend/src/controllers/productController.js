let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Ipad", price: 2000 },
];
export const getAllProducts = (req, res) => {
  res.status(200).json(products);
};
export const getSingleProduct = (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }
  res.status(200).json(product);
};
export const createProduct = (req, res) => {
  const product = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(product);
  res.status(201).json(products);
};

export const updateProduct = (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }
  product.name = req.body.name;
  product.price = req.body.price;
  res.status(200).json(products);
};
export const deleteProduct = (req, res) => {
  const productIndex = products.findIndex(
    (p) => p.id === parseInt(req.params.id),
  );
  if (productIndex === -1) {
    return res.status(404).json({ message: "product not found" });
  }
  products.splice(productIndex, 1);
  res.status(200).json({ message: "product deleted" });
};
