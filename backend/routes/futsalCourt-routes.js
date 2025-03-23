import express from "express";
import {
  addFutsalCourt,
  getAllFutsalCourts,
  getFutsalCourtById,
  deleteFutsalCourt,
} from "../controllers/futsalCourt-controller.js";
import { verifyAdmin } from "../middleware/adminAuth.js";

const futsalCourtRouter = express.Router();

// Public routes
futsalCourtRouter.get("/", getAllFutsalCourts);
futsalCourtRouter.get("/:id", getFutsalCourtById);

// Protected routes - only for admins
futsalCourtRouter.post("/", verifyAdmin, addFutsalCourt);
futsalCourtRouter.delete("/:id", verifyAdmin, deleteFutsalCourt); // Ensure this line is present

export default futsalCourtRouter;
