import express from "express";
import UserController from "../controllers/user.controller";
import userMiddleware from "../middlewares/user";

const { listUsers, createUser, updateUser, deleteUser, login } = UserController;
const {
  validateForm,
  isUserRegistered,
  validateLogin,
  checkLogin,
  // checkUserToken,
} = userMiddleware;

const userRoutes = express.Router();

userRoutes.get("/", listUsers);
userRoutes.post("/signup", validateForm, isUserRegistered, createUser);
userRoutes.put("/:userId", validateForm, updateUser);
userRoutes.delete("/:userId", deleteUser);
userRoutes.post("/login", validateLogin, checkLogin, login);
// userRoutes.get("/logout", logout);

export default userRoutes;
