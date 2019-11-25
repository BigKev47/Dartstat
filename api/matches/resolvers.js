import Matches from './matches';

export const matchesResolvers = {
  Query: {
    async matches() {
      try {
        const matches = await Matches.find();
        return matches;
      } catch (e) {
        console.log('e', e);
      }
    }
  },
};
