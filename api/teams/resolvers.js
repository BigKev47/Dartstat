import Teams from './teams';

export const teamsResolvers = {
  Query: {
    async teams() {
      try {
        const teams = await Teams.find();
        return teams;
      } catch (e) {
        console.log('e', e);
      }
    }
  },
};
