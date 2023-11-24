import { MongoClient, Db } from 'mongodb';

async function getDatabase(): Promise<Db> {
    const uri = process.env.ATLAS_URI; // Replace with your MongoDB connection string
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB server');
        return client.db('ToDo'); // Replace with your database name
    } catch (error) {
        console.error('Failed to connect to MongoDB server', error);
        throw error;
    }
}

const db = await getDatabase();

export default db;