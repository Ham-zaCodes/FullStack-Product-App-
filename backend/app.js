import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const PORT = 5000;
app.use(express.json());
import productRoutes from "./src/routes/productRoutes.js";
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
