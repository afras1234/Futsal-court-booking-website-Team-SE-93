import Payment from "../models/Payment.js";

// Create new payment
export const createPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json({ message: "Payment recorded", payment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all payments
export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate("userId", "name email")
      .populate("bookingId");
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get payments by user
export const getPaymentsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const payments = await Payment.find({ userId }).populate("bookingId");
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update payment status
export const updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const payment = await Payment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.status(200).json({ message: "Payment status updated", payment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
