import express from "express";
import ZoneController from "../controllers/zone.controller";
import zoneMiddleware from "../middlewares/zone";

const { listZones, createZone, updateZone, deleteZone } = ZoneController;
const { validateForm } = zoneMiddleware;
const zoneRoutes = express.Router();

zoneRoutes.get("/", listZones);
zoneRoutes.post("/", validateForm, createZone);
zoneRoutes.put("/:zoneId", validateForm, updateZone);
zoneRoutes.delete("/:zoneId", deleteZone);

export default zoneRoutes;
