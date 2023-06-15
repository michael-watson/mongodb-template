module.exports = {
  Thing: {
    __resolveReference(parent, { mongo }) {
      return mongo.getThing(parent.id);
    },
  },
};
