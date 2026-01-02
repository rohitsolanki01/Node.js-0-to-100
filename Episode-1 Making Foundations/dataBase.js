const { MongoClient } = require('mongodb');

// Connection URI for the MongoDB cluster
const MONGO_URL = "mongodb+srv://rohitsolanki0473_db_user:Q9HUuka10FSkwiYa@cluster0.eif4tw9.mongodb.net/";

/**
 * Demonstrates basic CRUD (Create, Read, Update, Delete) operations using the MongoDB Node.js driver.
 */
async function runDatabaseOperations() {
    const client = new MongoClient(MONGO_URL);

    try {
        // Establish connection to the database and specific collection
        const database = client.db('prectice-db');
        const users = database.collection('users');

        // --- 1. CREATE (Insert) ---
        // Insert a single document into the 'users' collection
        const newUser = { name: 'Rohit', age: 25, role: 'Software Engineer' };
        const insertResult = await users.insertOne(newUser);
        console.log(`Document inserted with _id: ${insertResult.insertedId}`);

        // --- 2. READ (Find) ---
        // Search for a document where the name is 'Rohit'
        const query = { name: 'Rohit' };
        const user = await users.findOne(query);
        console.log('Fetched User:', user);

        // --- 3. UPDATE ---
        // Update the document to change the age from 25 to 26
        const updateDoc = { $set: { age: 26 } };
        const updateResult = await users.updateOne(query, updateDoc);
        console.log(`${updateResult.matchedCount} document(s) matched, updated ${updateResult.modifiedCount} document(s)`);

        // --- 4. DELETE ---
        // Remove the document matching the query from the collection
        const deleteResult = await users.deleteOne(query);
        console.log(`Deleted ${deleteResult.deletedCount} document(s)`);

    } catch (error) {
        console.error('An error occurred during database operations:', error);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

// Execute the function and handle any top-level errors
runDatabaseOperations().catch(console.dir);
