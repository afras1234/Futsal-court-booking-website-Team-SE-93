import mongoose from "mongoose";
import Feedback from "../models/Feedback.js";
import FutsalCourt from "../models/FutsalCourt.js";
import User from "../models/User.js";

// Create a new feedback entry
export const submitFeedback = async (req, res, next) => {
    const { futsalCourt, user, rating, comments } = req.body;

    let existingFutsalCourt;
    let existingUser;

    try {
        existingFutsalCourt = await FutsalCourt.findById(futsalCourt);
        existingUser = await User.findById(user);
    } catch (err) {
        return res.status(500).json({ message: "Database error occurred." });
    }

    if (!existingFutsalCourt) {
        return res.status(404).json({ message: "Futsal Court not found." });
    }
    if (!existingUser) {
        return res.status(404).json({ message: "User not found." });
    }

    let feedback;
    try {
        feedback = new Feedback({
            futsalCourt,
            user,
            rating,
            comments,
        });

        await feedback.save();
    } catch (err) {
        return res.status(500).json({ message: "Failed to submit feedback." });
    }

    return res.status(201).json({ message: "Feedback submitted successfully!", feedback });
};

// Get feedback for a specific Futsal Court
export const getFeedbackByFutsalCourt = async (req, res, next) => {
    const { courtId } = req.params;

    let feedbacks;
    try {
        feedbacks = await Feedback.find({ futsalCourt: courtId })
                                    .populate("user", "name email")
                                    .sort({ createdAt: -1 });
    } catch (err) {
        return res.status(500).json({ message: "Failed to retrieve feedback." });
    }

    if (!feedbacks || feedbacks.length === 0) {
        return res.status(404).json({ message: "No feedback found for this Futsal Court." });
    }

    return res.status(200).json({ feedbacks });
};
