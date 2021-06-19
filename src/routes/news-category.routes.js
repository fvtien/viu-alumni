import express from "express";
import NewsCategoryController from "../controllers/news-category.controller";
import newsCategoryMiddleware from "../middlewares/news-category";

const {
  listNewsCategories,
  createNewsCategory,
  updateNewsCategory,
  deleteNewsCategory,
} = NewsCategoryController;
const { validateForm } = newsCategoryMiddleware;

const newsCategoryRoutes = express.Router();

newsCategoryRoutes.get("/", listNewsCategories);
newsCategoryRoutes.post("/", validateForm, createNewsCategory);
newsCategoryRoutes.put("/:newsCategoryId", validateForm, updateNewsCategory);
newsCategoryRoutes.delete("/:newsCategoryId", deleteNewsCategory);

export default newsCategoryRoutes;
