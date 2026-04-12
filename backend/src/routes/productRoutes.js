import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
