import mongoose from "mongoose";
const feedbackSchema = new mongoose.Schema({
    courtId: { type: mongoose.Schema.Types.ObjectId, ref: "FutsalCourt", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5 },
    comment: { type: String }
}, { timestamps: true });

export default mongoose.model("Feedback", feedbackSchema);
