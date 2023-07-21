import { query, writeJSONFile } from '../util'


(async () => {
  const res = await query('/leagues')

  writeJSONFile('../data/leagues.json', res)

  
})()









