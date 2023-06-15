const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_CONN);
client.connect();

class MongoDatasource {
  things = client.db("things").collection("thing");

  getThing(id) {
    return this.things.findOne({ _id: id });
  }

  insertThing(thing) {
    if (!thing._id) thing._id = thing.id;
    return this.things.bulkWrite(thing);
  }
}

module.exports = MongoDatasource;
