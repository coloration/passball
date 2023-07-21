import 'dotenv/config'
import axios from 'axios'
import fs from 'fs/promises'
import path from 'path'

const HOST = process.env.FOOTBALL_API_HOST
const KEY = process.env.FOOTBALL_API_KEY




export const todbl = (n: number) => {
  return Number(n) < 10 ? `0${n}` : `${n}`
}

export const genQueryConfig = (query: string) => {
  return {
    method: 'get',
    url: `https://${HOST}${query}`,
    headers: {
      'x-rapidapi-key': KEY,
      'x-rapidapi-host': HOST
    }
  }
}


export const query = <T = any>(path: string) => {
    return axios(genQueryConfig(path))
    .then(async function (response) {
      return await new Promise<T>((resolve, reject) => {
        setTimeout(() => {
          resolve(response.data)
        }, 10 * 1000)
      })
    })
    .catch(function (error) {
      console.log(error);
    })

}

export const writeJSONFile = async (uri: string, content: Object, withDate: boolean = true) => {
  if (withDate) {
    const d = new Date()
    const dStr = `${todbl(d.getFullYear())}${todbl(d.getMonth())}${todbl(d.getDate())}-${todbl(d.getHours())}${todbl(d.getMinutes())}${todbl(d.getSeconds())}`
    uri = uri.replace(/\.(\w+)$/, `.${dStr}.$1`)
  }
  await fs.writeFile(
    path.resolve(__dirname, uri),
    JSON.stringify(content),
    'utf-8'
  )
}

export const readJSONFile = async (uri: string) => {
  const content = await fs.readFile(
    path.resolve(__dirname, uri),
    { encoding: 'utf-8' }
  )

  return JSON.parse(content)
}