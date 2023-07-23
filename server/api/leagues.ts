import { Database } from '../../core/database'

import { GlobalCache } from '../GlobalCache'

const { MONGODB_DATABASE } = useRuntimeConfig()

export default defineEventHandler(async () => {
  const client = await Database.instance.client

  try {
    await client.connect()
    const database = client.db(MONGODB_DATABASE)
    const collection = database.collection('leagues')
    const results = await collection.find({}).limit(10).toArray()
    const leagueMap = (await GlobalCache.instance.getStaticContents())[0].data

    const leagues = results.map((item: any) => {
      return {
        id: item.id,
        name: leagueMap[item.id],
      }
    })
    return leagues
  }
  catch (e: any) {
    return { statusCode: 500, body: e.toString() }
  }
  finally {
    // client.close()
  }
})
