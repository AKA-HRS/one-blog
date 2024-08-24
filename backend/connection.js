const mongoose = require("mongoose");
require("dotenv").config();
async function connectToMongo() {
  // const url = `mongodb+srv://ID_OF_MONGO:PASSWORD_OF_MONGO@one.z0npcah.mongodb.net/blog?retryWrites=true&w=majority`;

  try {
    console.log("Connecting to MongoDB..."); //for demonstration only
    await mongoose.connect(url);
    console.log("Connected to MongoDB successfully!"); //for demonstration only

    let documents;
    documents = await mongoose.connection.db
      .collection("blog")
      .find()
      .limit(400)
      .toArray();
    console.log(documents);
    return documents;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
}

module.exports = { connectToMongo };
