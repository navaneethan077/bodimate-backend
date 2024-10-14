import express from "express";
import userRoutes from "./userRoutes.js";
import boardingRoutes from "./boardingRoutes.js";
import contactUsRoutes from "./contactUsRoutes.js";
import saveRoutes from "./saveRoutes.js";
import uniersityRoutes from "./universityRoutes.js";

const router = express.Router();

router.use("/api/users", userRoutes);
router.use("/api/boardings", boardingRoutes);
router.use("/api/contactUs", contactUsRoutes);
router.use("/api/saveboarding", saveRoutes);
router.use("/api/university", uniersityRoutes);

export default router;