import { Database } from '../../core/database'


const { MONGODB_DATABASE } = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const client = await Database.instance.client
  console.log(1)
  const { date } = getQuery(event)
  console.log(2, date)
  try {
    await client.connect()
    console.log(3)
    const database = client.db(MONGODB_DATABASE)
    console.log(4)
    const collection = database.collection('daily-matches')
    console.log(5, date)
    const results = await collection.find({
      date,
    }).toArray()
    console.log(6, results)
 
    return results
  }
  catch (e: any) {
    return { statusCode: 500, body: e.toString() }
  }
  finally {
    // client.close()
  }
})
