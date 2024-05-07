import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(protect, admin, getUsers).post(registerUser); // GET
router.post("/logout", logoutUser); // logout user
router.post("/auth", authUser); // login user;
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile); // GET
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
export default router;
