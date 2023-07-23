import type { Id, Display, Longitude, Latitude } from './base'

export interface Court {
  id: Id
  n: Display // name
  nZH: Display // name-zh
  addr: Display // address
  lg: Longitude
  lt: Latitude
}