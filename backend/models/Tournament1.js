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

//#endregion
export const getTournamentParticipants = async (req, res) => {
    try {
      const { id } = req.params;
      const tournament = await Tournament.findById(id).populate("participants.userId", "name email");
      if (!tournament) {
        return res.status(404).json({ message: "Tournament not found" });
      }
      res.status(200).json(tournament.participants);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };