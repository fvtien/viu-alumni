import express from "express";
import RecruitController from "../controllers/recruit.controller";
import recruitMiddleware from "../middlewares/recruit";

const { listRecruits, createRecruit, updateRecruit, deleteRecruit } =
  RecruitController;
const { validateForm } = recruitMiddleware;
const recruitRoutes = express.Router();

recruitRoutes.get("/", listRecruits);
recruitRoutes.post("/", validateForm, createRecruit);
recruitRoutes.put("/:recruitId", validateForm, updateRecruit);
recruitRoutes.delete("/:recruitId", deleteRecruit);

export default recruitRoutes;
