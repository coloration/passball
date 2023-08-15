import { Database } from '../../core/database'

const { MONGODB_DATABASE } = useRuntimeConfig()

export default defineEventHandler(async () => {
  const client = await Database.instance.client

  try {
    await client.connect()
    const database = client.db(MONGODB_DATABASE)
    const collection = database.collection('primary-leagues')

    return await collection.find({}).toArray()
  }
  catch (e: any) {
    return { statusCode: 500, body: e.toString() }
  }
  finally {
    // client.close()
  }
})
