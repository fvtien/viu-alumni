import express from "express";
import MenuController from "../controllers/menu.controller";
import menuMiddleware from "../middlewares/menu";

const { listMenus, createMenu, updateMenu, deleteMenu } = MenuController;
const { validateForm } = menuMiddleware;

const menuRoutes = express.Router();

menuRoutes.get("/", listMenus);
menuRoutes.post("/", validateForm, createMenu);
menuRoutes.put("/:menuId", validateForm, updateMenu);
menuRoutes.delete("/:menuId", deleteMenu);

export default menuRoutes;
