import express from "express";
import userGroupRoutes from "./user-group.routes";

const routes = express.Router();

routes.use("/api/v1/admin/user-group", userGroupRoutes);

export default routes;
