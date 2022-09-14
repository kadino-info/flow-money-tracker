import { MongoClient } from 'mongodb';
const PropertiesJson = {serverUrlLocal: "mongodb://192.168.1.66:27017/",
serverUrl: "mongodb+srv://dzmitrynz:369852147M@cluster0.5mot7.mongodb.net/"};

const url = PropertiesJson.serverUrlLocal;

const dbName = 'flowmoney';
const collectionName = 'bgpb';

const getMongoInstance = async () => {
  const client = await MongoClient.connect(url);
  return client.db(dbName);
}

const getCollection = async () => {
  const db = await getMongoInstance();
  return db.collection(collectionName);
}

const listAll = async () => {
  const collection = await getCollection();
  return collection.find({}).toArray();
};

const create = async (item) => {
  const collection = await getCollection();

  const response = await  collection.insertOne(item);

  return response.ops[0];
};

module.exports = {
  create,
  listAll,
}
