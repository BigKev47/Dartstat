import Players from './players';

export const playersResolvers = {
  Query: {
    async players() {
      try {
        const players = await Players.find();
        return players;
      } catch (e) {
        console.log('e', e);
      }
    }
  },
};
