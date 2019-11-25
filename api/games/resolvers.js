import Games from './games';

export const gamesResolvers = {
  Query: {
    async games() {
      try {
        const games = await Games.find();
        return games;
      } catch (e) {
        console.log('e', e);
      }
    }
  },
};
