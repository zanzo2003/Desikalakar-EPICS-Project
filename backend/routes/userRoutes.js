import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUsers,
  getUsersByID,
  updateUsers,
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
  .delete(protect, admin, deleteUsers)
  .get(protect, admin, getUsersByID)
  .put(protect, admin, updateUsers);
export default router;
