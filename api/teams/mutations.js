import Teams from './teams';

export const teamsMutations = {
  Mutation: {
    async addTeam(_, { team }) {
      try {
        const newTeam = await Teams.create({
          ...team
        });
        return newTeam;
      } catch (e) {
        console.log(e);
      }
    },

    async addEvent(_, { teamId, date }) {
      try {
        date.setHours(0, 0, 0, 0);
        const team = await Teams.findOneAndUpdate(
          {
            _id: teamId,
            'events.date': {
              $ne: date
            }
          },
          {
            $addToSet: {
              events: {
                date
              }
            }
          }
        );
        return team;
      } catch (e) {
        console.log('e', e);
      }
    },

    async removeEvent(_, { teamId, eventId }) {
      try {
        const team = await Teams.findOneAndUpdate(
          {
            _id: teamId
          },
          {
            $pull: {
              events: {
                _id: eventId
              }
            }
          }
        );
        return team;
      } catch (e) {
        console.log('e', e);
      }
    }
  }
};
