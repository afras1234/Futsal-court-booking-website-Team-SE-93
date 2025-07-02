import Booking from "../models/Booking.js";

// Check for time slot conflicts
export const isSlotAvailable = async (courtId, date, startTime, endTime) => {
  const conflict = await Booking.findOne({
    courtId,
    date,
    startTime,
    endTime,
    status: { $ne: "cancelled" },
  });
  return !conflict;
};
