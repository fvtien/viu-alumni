import express from "express";
import BannerController from "../controllers/banner.controller";
import bannerMiddleware from "../middlewares/banner";

const { listBanners, createBanner, updateBanner, deleteBanner } =
  BannerController;
const { validateForm } = bannerMiddleware;

const bannerRoutes = express.Router();

bannerRoutes.get("/", listBanners);
bannerRoutes.post("/", validateForm, createBanner);
bannerRoutes.put("/:bannerId", validateForm, updateBanner);
bannerRoutes.delete("/:bannerId", deleteBanner);

export default bannerRoutes;
