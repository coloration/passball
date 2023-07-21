import { MongoClient } from 'mongodb'


const { MONGODB_URI, MONGODB_DATABASE, MONGODB_COLLECTION  } = useRuntimeConfig()

const mongoClient = new MongoClient(MONGODB_URI)

const clientPromise = mongoClient.connect()


export default defineEventHandler(async () => {

  try {
    console.log(4)
    const database = (await clientPromise).db(MONGODB_DATABASE)
    console.log(5)
    const collection = database.collection(MONGODB_COLLECTION)
    console.log('connect success')
    const results = await collection.find({}).limit(10).toArray()
    console.log('fetch results', results)
    return {
      statusCode: 200,
      body: {
        length: results.length,
        matches: results
      }
    }
  }
  catch (e: any) {
    return { statusCode: 500, body: e.toString() }
  }
})