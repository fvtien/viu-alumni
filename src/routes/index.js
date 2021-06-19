import express from "express";
import userGroupRoutes from "./user-group.routes";
import userRoutes from "./user.routes";
import bannerRoutes from "./banner.routes";

const routes = express.Router();

routes.use("/api/v1/admin/user-group", userGroupRoutes);
routes.use("/api/v1/admin/user", userRoutes);
routes.use("/api/v1/admin/banner", bannerRoutes);

export default routes;
