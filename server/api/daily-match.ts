import { Database } from '../../core/database'


const { MONGODB_DATABASE } = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const client = await Database.instance.client
  const { date } = getQuery(event)
  try {
    await client.connect()
    const database = client.db(MONGODB_DATABASE)
    const collection = database.collection('daily-matches')
    const results = await collection.find({
      date,
    }).toArray()
 
    return results
  }
  catch (e: any) {
    return { statusCode: 500, body: e.toString() }
  }
  finally {
    // client.close()
  }
})
