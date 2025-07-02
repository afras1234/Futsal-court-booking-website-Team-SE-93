import Feedback from "../models/Feedback.js";

export const submitFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted", feedback });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFeedbackByFutsalCourt = async (req, res) => {
  try {
    const { courtId } = req.params;
    const feedbacks = await Feedback.find({ courtId });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getFeedbackByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const feedbacks = await Feedback.find({ userId });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};