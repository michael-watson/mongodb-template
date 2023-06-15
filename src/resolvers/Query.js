module.exports = {
  Query: {
    thing(parent, { id }, { mongo }) {
      return mongo.getThing(id);
    },
  },
};
