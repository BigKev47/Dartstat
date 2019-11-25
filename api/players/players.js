// Database collection
import mongoose, { Schema } from 'mongoose';

import {MatchesSchema} from '../matches/matches';
import {TeamsSchema} from '../teams/teams';
import {GamesSchema} from '../games/games';

export const PlayersSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: false
  },
  nickname: {
    type: String,
    required: false
  },
  // games: [GamesSchema], 
  // matches: [MatchesSchema],
  // teams: [TeamsSchema],
  // teamsCaptained: [TeamsSchema],
});
console.log('SCHEMING SCHEMA', PlayersSchema)

export default mongoose.models.players || mongoose.model('players', PlayersSchema);
