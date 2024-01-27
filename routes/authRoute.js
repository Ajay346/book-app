import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddeleware.js";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  loginController,
  registerController,
  testController,
  updateProfileController,
  orderStatusController,
  getAllUsersController,
} from "../controllers/authController.js";

// Router Object

const router = express.Router();

// Routing
// REGISTER ROUTE METHOD POST
router.post("/register", registerController);

// LOGIN ROUTE METHOD POST
router.post("/login", loginController);

// Forgot Password METHOD POST
router.post("/forgot-password", forgotPasswordController);

// USER PROTECTED ROUTE METHOD GET
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// ADMIN PROTECTED ROUTE METHOD GET
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// Update Profile
router.put("/profile", requireSignIn, updateProfileController);

// Orders
router.get("/orders", requireSignIn, getOrdersController);

//All Orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

//All Orders
router.get("/all-users", requireSignIn, isAdmin, getAllUsersController);

// Order Status Update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

// Test ROUTE METHOD POST
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
