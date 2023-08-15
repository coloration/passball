import { Database } from '../../core/database'

const { MONGODB_DATABASE } = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const client = await Database.instance.client

  const { season, league } = getQuery(event)
  try {
    await client.connect()
    const database = client.db(MONGODB_DATABASE)
    // const collection = database.collection('league-matches')
    // const results = await collection.findOne({
    //   lg: Number(league),
    //   sn: Number(season)
    // })
    const collection = database.collection('league-rounds')
    const results = await collection.find({
      lg: Number(league),
      sn: Number(season),
    }).toArray()

    // const leagueMap = (await GlobalCache.instance.getStaticContents())[0].data

    results.sort((a, b) => a.order - b.order)
    
    return results
  }
  catch (e: any) {
    return { statusCode: 500, body: e.toString() }
  }
  finally {
    // client.close()
  }
})
