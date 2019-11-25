import Games from './games';

export const gamesMutations = {
  Mutation: {
    async addGame(_, { game }) {
      try {
        const newGame = await Games.create({
          ...game
        });
        return newGame;
      } catch (e) {
        console.log(e);
      }
    },

    async addEvent(_, { gameId, date }) {
      try {
        date.setHours(0, 0, 0, 0);
        const game = await Games.findOneAndUpdate(
          {
            _id: gameId,
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
        return game;
      } catch (e) {
        console.log('e', e);
      }
    },

    async removeEvent(_, { gameId, eventId }) {
      try {
        const game = await Games.findOneAndUpdate(
          {
            _id: gameId
          },
          {
            $pull: {
              events: {
                _id: eventId
              }
            }
          }
        );
        return game;
      } catch (e) {
        console.log('e', e);
      }
    }
  }
};
