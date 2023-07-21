import { readJSONFile, writeJSONFile } from './util'
import { League, LeagueKind, LeagueSeason } from '../types'
import { importantLeagueIds } from './config'

async function formatLeagues() {
  const { response } = await readJSONFile('./data/leagues.20230621.json')

  let allLeagueSeasons: LeagueSeason[] = []
  const importantLeagues: League[] = []
  let count = 0
  const leagues: League[] = (response as any[]).map<League>((data: any) => {
    
    const { id, name, type } = data.league

    const currentLeagueSeasons = (data.seasons as any[]).map<LeagueSeason>((s: any) => {

      return {
        id: s.year,
        lid: id,
        beg: s.start,
        end: s.end
      }
    })
    allLeagueSeasons = allLeagueSeasons.concat(currentLeagueSeasons)
    
    const currentLeague: League = {
      id: id,
      n: name,
      nZH: name,
      k: type === 'Cup' ? LeagueKind.Cup : LeagueKind.League,
      c: data.country.code,
      
    }

    if (importantLeagueIds.includes(id)) {
      importantLeagues.push({
        ...currentLeague,
        s: currentLeagueSeasons
      })
    }

    
    
    return currentLeague
  })

  writeJSONFile('./source/leagues.json', leagues, false)
  writeJSONFile('./source/leagueSeasons.json', allLeagueSeasons, false)
  writeJSONFile('./source/importantLeagues.json', importantLeagues, false)
}

(async () => {
  await formatLeagues()
})()