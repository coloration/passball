import { Database } from '../../core/database'

const { MONGODB_DATABASE } = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const client = await Database.instance.client
  const { season, league } = getQuery(event)
  try {
    await client.connect()
    const database = client.db(MONGODB_DATABASE)
    const collection = database.collection('league-seasons')
    const results = await collection.findOne({
      league: Number(league),
      season: Number(season)
    })
 
    return results
  }
  catch (e: any) {
    return { statusCode: 500, body: e.toString() }
  }
  finally {
    // client.close()
  }
})
