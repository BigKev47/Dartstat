// Database collection
import mongoose, { Schema } from 'mongoose';

import {PlayersSchema} from '../players/players';
import {TeamsSchema} from '../teams/teams';
import {GamesSchema} from '../games/games';

export const MatchesSchema = new Schema({
  games: [GamesSchema],
  teams: [TeamsSchema],
  // players: [PlayersSchema],
});

export default mongoose.models.matches || mongoose.model('matches', MatchesSchema);
