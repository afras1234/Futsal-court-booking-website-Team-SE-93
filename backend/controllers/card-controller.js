import CardDetails from "../models/CardDetails.js";

// Save masked card metadata
export const saveCardDetails = async (req, res) => {
  try {
    const card = new CardDetails(req.body);
    await card.save();
    res.status(201).json({ message: "Card details saved", card });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get cards by user ID
export const getCardsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const cards = await CardDetails.find({ userId });
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
