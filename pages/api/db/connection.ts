import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const options = {};

let client;
let mongoConnect;

if (!process.env.MONGODB_URI) {
	throw new Error("Add Mongo URI to .env.local");
}

client = new MongoClient(uri, options);
mongoConnect = client.connect();
// if (process.env.NODE_ENV === "development") {
// 	if (!global._mongoClientPromise) {
// 		global._mongoClientPromise = client.connect();
// 	}
// 	clientPromise = global._mongoClientPromise;
// } else {
// 	client = new MongoClient(uri, options);
// }

export default mongoConnect;
