import { query, writeJSONFile } from './util'


query('/status')
.then((res) => {
  writeJSONFile('./data/status.json', res)
})









