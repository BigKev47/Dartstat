// Database collection
import mongoose, { Schema } from 'mongoose';

export const TeamsSchema = new Schema({
  
});

export default mongoose.models.teams || mongoose.model('teams', TeamsSchema);
