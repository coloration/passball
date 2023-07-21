import { query, writeJSONFile } from '../util'
import { importantLeagueIds, nearlyFinishedSeasons } from '../config'

(async () => {

  // importantLeagueIds.forEach((lid) => {
  //   nearlyFinishedSeasons.forEach(async season => {
  //     const res = await query(`/standings?league=${lid}&season=${season}`)
  //     writeJSONFile(`./data/finished-league-${lid}-${season}.json`, res, false)
  //   })
  // })

  // importantLeagueIds.forEach((lid) => {
  //   nearlyFinishedSeasons.forEach(async season => {
  //     const res = await query(`/fixtures?league=${lid}&season=${season}`)
  //     writeJSONFile(`./data/finished-league-${lid}-${season}-fixtures.json`, res, false)
  //   })
  // })


})()

