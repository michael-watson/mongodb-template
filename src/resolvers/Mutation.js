module.exports = {
  Mutation: {
    async createThing(parent, { thing }, { mongo }) {
      await mongo.insertThing(thing);
      return thing;
    },
  },
};
