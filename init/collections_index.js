const mongoose = require("mongoose");
const initdata = require("./collections_data.js");
const collections = require("../model/collections.js");

const mongo_URL = "mongodb://127.0.0.1:27017/shoes_palace";

// Connect to MongoDB
main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log("Error found", err);
    });

async function main() {
    try {
        await mongoose.connect(mongo_URL, {
           
        });
        console.log("Connection successful");
    } catch (err) {
        console.log("Connection error", err);
    }
}

const initDB = async () => {
    try {
        console.log("Initializing database...");
        console.log("Data to be inserted:", initdata.data);

        // Delete existing data
        await collections.deleteMany({});
        console.log("Existing data cleared.");

        // Insert new data
        await collections.insertMany(initdata.data);
        console.log("Data was initialized successfully.");
    } catch (err) {
        console.log("Error while initializing data:", err);  // Log any errors
    }
};

// Initialize the database
initDB();
