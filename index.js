import dotenv from "dotenv"
import { MongoClient } from "mongodb"
dotenv.config()

const uri = process.env.MONGO_URI
const client = new MongoClient(uri)
const dbname = "bible_quotes"
const bibleQuotesCollection = client.db(dbname).collection("love_quotes")

const connectToMyDataBase = async() => {
    try {
        await client.connect();
        console.log("Connected to MongoDB")
    }
    catch (err) {
        console.error("Failed to connect to MongoDB", err)
} 
}   

const quote = [
    {
        newBook : "1 Peter 4:8",
        newQuote: "Above all, love each other deeply, because love covers over a multitude of sins."
    },
    {
        newBook : "Romans 5:5",
        newQuote :"And hope does not put us to shame, because God’s love has been poured out into our hearts through the Holy Spirit, who has been given to us."
        
    },
]

const main = async() => {
    try {
        await connectToMyDataBase();
       let result = await bibleQuotesCollection.insertMany(quote)
       console.log(result);
    } catch (error) {
        console.error("Error occurred during the execution", error);
    }finally {
        await client.close();
    }
}

main();