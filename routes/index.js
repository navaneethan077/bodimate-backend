import express from "express";
import userRoutes from "./userRoutes.js";
import boardingRoutes from "./boardingRoutes.js";
import contactUsRoutes from "./contactUsRoutes.js";
import chatRoutes from "./chatRoutes.js";
import bookingRoutes from "./bookingRoutes.js";
import paymentRoutes from "./paymentRoutes.js";
import saveRoutes from "./saveRoutes.js";
import uniersityRoutes from "./universityRoutes.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({msg: "API is running"});
});

router.use("/api/users", userRoutes);
router.use("/api/boardings", boardingRoutes);
router.use("/api/contactUs", contactUsRoutes);
router.use("/api/chat", chatRoutes);
router.use("/api/booking", bookingRoutes);
router.use("/api/payment", paymentRoutes);
router.use("/api/saveboarding", saveRoutes);
router.use("/api/university", uniersityRoutes);

export default router;