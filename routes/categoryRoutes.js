import express from "express";
import { isAdmin, requireSignIn } from "./../middleware/authMiddeleware.js";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategory,
  getSingleCategory,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

// Routes
// Create Category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// Update Category

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// Get all category

router.get("/getall-category", getAllCategory);

// Get Single Category

router.get("/getsingle-category/:slug", getSingleCategory);

// Get Single Category

router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
