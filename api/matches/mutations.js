import Matches from './matches';

export const matchesMutations = {
  Mutation: {
    async addMatch(_, { match }) {
      try {
        const newMatch = await Matches.create({
          ...match
        });
        return newMatch;
      } catch (e) {
        console.log(e);
      }
    },

    async addEvent(_, { matchId, date }) {
      try {
        date.setHours(0, 0, 0, 0);
        const match = await Matches.findOneAndUpdate(
          {
            _id: matchId,
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
        return match;
      } catch (e) {
        console.log('e', e);
      }
    },

    async removeEvent(_, { matchId, eventId }) {
      try {
        const match = await Matches.findOneAndUpdate(
          {
            _id: matchId
          },
          {
            $pull: {
              events: {
                _id: eventId
              }
            }
          }
        );
        return match;
      } catch (e) {
        console.log('e', e);
      }
    }
  }
};
