import { Router } from "express";
import { createUnit, getUnits } from "../Controllers/Uits.js";

const router = Router();

router.post("/create-unit", createUnit);

router.get("/get-units/:id", getUnits);

export default router;
