import dotenv from "dotenv"
import { MongoClient } from "mongodb"
dotenv.config()

const uri = process.env.MONGO_URI
const client = new MongoClient(uri)
const dbname = "bible_quotes"

const connectToMyDataBase = async () {
    try {
        await client.connect();
        console.log("Connected to MongoDB")
    }
    catch (err) {
        console.error("Failed to connect to MongoDB", err)
    } finally {
        await client.close();
    }
}    
