import express from "express";
import NewsController from "../controllers/news.controller";
import newsMiddleware from "../middlewares/news";

const { listNews, createNews, updateNews, deleteNews } = NewsController;
const { validateForm } = newsMiddleware;

const newsRoutes = express.Router();

newsRoutes.get("/", listNews);
newsRoutes.post("/", validateForm, createNews);
newsRoutes.put("/:newsId", validateForm, updateNews);
newsRoutes.delete("/:newsId", deleteNews);

export default newsRoutes;
