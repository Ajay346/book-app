import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddeleware.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  countProductController,
  createProductController,
  deleteProductController,
  filterProductController,
  getPhotoProductController,
  getProductController,
  getSingleProductController,
  listProductController,
  productCategoryController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productContoller.js";
import formidable from "express-formidable";

const router = express.Router();

// Routes
//Add Products
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Get Products
router.get("/get-product", getProductController);

//Get single product
router.get("/get-product/:slug", getSingleProductController);

//Get product photo
router.get("/product-photo/:pid", getPhotoProductController);

//Delete product
router.delete("/product-delete/:pid", deleteProductController);

//Filter product
router.post("/product-filter", filterProductController);

//Product Count
router.get("/product-count", countProductController);

//Product Count
router.get("/product-list/:page", listProductController);

// Search Product
router.get("/search/:keyword", searchProductController);

// Similar Products
router.get("/related-products/:pid/:cid", relatedProductController);

// category wise Products
router.get("/product-category/:slug", productCategoryController);

// Payments Routes
//token
router.get("/braintree/token", braintreeTokenController);

// Payments
router.post("/braintree/payment", requireSignIn, braintreePaymentController);

export default router;
