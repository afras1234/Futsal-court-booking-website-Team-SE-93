export const validateBookingInput = (req, res, next) => {
  const { userId, courtId, date, startTime, endTime, totalPrice } = req.body;

  if (!userId || !courtId || !date || !startTime || !endTime || !totalPrice) {
    return res.status(400).json({ error: "All fields are required" });
  }

  next();
};
