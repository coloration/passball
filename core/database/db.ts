import { MongoClient, ServerApiVersion } from 'mongodb'

const { MONGODB_URI } = useRuntimeConfig()
export class Database {
  static #uniqueInstance: Database
  static get instance() {
    return Database.#uniqueInstance
      || (Database.#uniqueInstance = new Database())
  }

  client: MongoClient

  constructor() {
    this.client = new MongoClient(MONGODB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    })
  }
}
