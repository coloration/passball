import { Db, MongoClient, ServerApiVersion } from 'mongodb'

export class Database {
  
  static #uniqueInstance: Database
  static instance (uri: string) {
    return Database.#uniqueInstance 
      || (Database.#uniqueInstance = new Database(uri))
  }

  client: MongoClient


  constructor (uri: string) {
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    })
  }

  async connect() {
    
    await this.client.close()
    await this.client.connect()
  }

  async drop() {
    await this.client.close()
  }
}



