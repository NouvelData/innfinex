import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

if (!uri) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const options = {}

const client = new MongoClient(uri, options)
const clientPromise: Promise<MongoClient> = client.connect()

export { client, clientPromise }
