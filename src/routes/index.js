import express from "express";
import userGroupRoutes from "./user-group.routes";
import userRoutes from "./user.routes";
import bannerRoutes from "./banner.routes";
import menuRoutes from "./menu.routes";
import countryRoutes from "./country.routes";
import zoneRoutes from "./zone.routes";
import newsCategoryRoutes from "./news-category.routes";
import newsRoutes from "./news.routes";

const routes = express.Router();

routes.use("/api/v1/admin/user-group", userGroupRoutes);
routes.use("/api/v1/admin/user", userRoutes);
routes.use("/api/v1/admin/banner", bannerRoutes);
routes.use("/api/v1/admin/menu", menuRoutes);
routes.use("/api/v1/admin/country", countryRoutes);
routes.use("/api/v1/admin/zone", zoneRoutes);
routes.use("/api/v1/admin/news-category", newsCategoryRoutes);
routes.use("/api/v1/admin/news", newsRoutes);

export default routes;
