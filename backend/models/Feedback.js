import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    futsalCourt: { type: mongoose.Types.ObjectId, ref: "FutsalCourt", required: true },
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comments: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Feedback", feedbackSchema);
