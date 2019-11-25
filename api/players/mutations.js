import Players from './players';

export const playersMutations = {
  Mutation: {
    async addPlayer(_, { player }) {
      try {
        const newPlayer = await Players.create({
          ...player
        });
        return newPlayer;
      } catch (e) {
        console.log(e);
      }
    },
  }
};
