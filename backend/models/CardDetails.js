import mongoose from "mongoose";

const cardDetailsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cardHolderName: {
    type: String,
    required: true,
  },
  last4Digits: {
    type: String,
    required: true,
    length: 4,
  },
  expiryMonth: {
    type: String,
    required: true,
  },
  expiryYear: {
    type: String,
    required: true,
  },
  brand: {
    type: String, // Visa, MasterCard, etc.
    required: true,
  },
  tokenId: {
    type: String, // from Stripe or other provider
    required: true,
  }
}, { timestamps: true });

export default mongoose.model("CardDetails", cardDetailsSchema);
