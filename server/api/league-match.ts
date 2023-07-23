import { Database } from '../../core/database'

import { GlobalCache } from '../GlobalCache'

const { MONGODB_DATABASE } = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const client = await Database.instance.client
  
  const { season, league } = getQuery(event)
  try {
    await client.connect()
    const database = client.db(MONGODB_DATABASE)
    const collection = database.collection('league-matches')
    const results = await collection.findOne({
      lg: Number(league),
      sn: Number(season)
    })

    console.log('@@@@@@@@@', results)
    // const leagueMap = (await GlobalCache.instance.getStaticContents())[0].data

 
    return results
  }
  catch (e: any) {
    return { statusCode: 500, body: e.toString() }
  }
  finally {
    // client.close()
  }
})
