import express from "express";
import CountryController from "../controllers/country.controller";
import countryMiddleware from "../middlewares/country";

const { listCountries, createCountry, updateCountry, deleteCountry } =
  CountryController;
const { validateForm } = countryMiddleware;

const countryRoutes = express.Router();

countryRoutes.get("/", listCountries);
countryRoutes.post("/", validateForm, createCountry);
countryRoutes.put("/:countryId", validateForm, updateCountry);
countryRoutes.delete("/:countryId", deleteCountry);

export default countryRoutes;
