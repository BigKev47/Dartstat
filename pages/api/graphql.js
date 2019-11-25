import { ApolloServer, gql } from 'apollo-server-micro';
import { mergeResolvers, mergeTypeDefs } from 'graphql-toolkit';
import connectDb from '../../lib/mongoose';

import Habits from '../../api/habits/Habits.graphql';
import { habitsResolvers } from '../../api/habits/resolvers';
import { habitsMutations } from '../../api/habits/mutations';

import Players from '../../api/players/Players.graphql';
import { playersResolvers } from '../../api/players/resolvers';
import { playersMutations } from '../../api/players/mutations';

import Teams from '../../api/teams/Teams.graphql';
import { teamsResolvers } from '../../api/teams/resolvers';
import { teamsMutations } from '../../api/teams/mutations';

import Matches from '../../api/matches/Matches.graphql';
import { matchesResolvers } from '../../api/matches/resolvers';
import { matchesMutations } from '../../api/matches/mutations';

import Games from '../../api/games/Games.graphql';
import { gamesResolvers } from '../../api/games/resolvers';
import { gamesMutations } from '../../api/games/mutations';


const resolvers = mergeResolvers([
  habitsResolvers,
  habitsMutations,
  // gamesResolvers,
  // gamesMutations,
  // matchesResolvers,
  // matchesMutations,
  // teamsResolvers,
  // teamsMutations,
  playersResolvers,
  playersMutations
]);

const typeDefs = mergeTypeDefs([
  Habits,
  Players,
  // Teams,
  // Matches,
  // Games,
]);

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

const server = apolloServer.createHandler({ path: '/api/graphql' });
export default connectDb(server);
