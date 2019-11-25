// Database collection
import mongoose, { Schema } from 'mongoose';

export const GamesSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
});

export default mongoose.models.games || mongoose.model('games', GamesSchema);
