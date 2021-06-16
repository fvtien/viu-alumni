import express from "express";
import UserGroupController from "../controllers/user-group.controller";
import userGroupMiddleware from "../middlewares/user-group";

const { listUserGroups, createUserGroup, updateUserGroup, deleteUserGroup } =
  UserGroupController;
const { validateForm } = userGroupMiddleware;

const userGroupRoutes = express.Router();

userGroupRoutes.get("/", listUserGroups);
userGroupRoutes.post("/", validateForm, createUserGroup);
userGroupRoutes.put("/:userGroupId", validateForm, updateUserGroup);
userGroupRoutes.delete("/:userGroupId", deleteUserGroup);

export default userGroupRoutes;
