import express from "express";
import userGroupRoutes from "./user-group.routes";
import userRoutes from "./user.routes";

const routes = express.Router();

routes.use("/api/v1/admin/user-group", userGroupRoutes);
routes.use("/api/v1/admin/user", userRoutes);

export default routes;
