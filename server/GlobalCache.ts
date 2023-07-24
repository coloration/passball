import { Database } from '../core/database'

const { MONGODB_DATABASE } = useRuntimeConfig()

export class GlobalCache {
  staticContents: any[] = []

  static #uniqueInstance: GlobalCache
  static get instance() {
    return GlobalCache.#uniqueInstance
      || (GlobalCache.#uniqueInstance = new GlobalCache())
  }

  constructor() {

  }

  async getStaticContents() {
    if (this.staticContents.length === 0) {
      const client = Database.instance.client
      await client.connect()
      const database = client.db(MONGODB_DATABASE)
      const collection = database.collection('static')
      const results = await collection.find({}).toArray()
      
      this.staticContents = results
    }

    return Promise.resolve(this.staticContents)
  }
}
