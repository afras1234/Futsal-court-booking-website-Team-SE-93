import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  courtId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FutsalCourt",
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  maxTeams: {
    type: Number,
    required: true,
  },
  registeredTeams: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["upcoming", "completed", "cancelled"],
    default: "upcoming",
  }
}, { timestamps: true });

export default mongoose.model("Tournament", tournamentSchema);
