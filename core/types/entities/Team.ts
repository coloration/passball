import { Court } from './Court'
import { League } from './League'
import type { Id, Display, Date } from './base'

export interface Team {
  id: Id
  cid: Court['id']
  beg: Date
  logo: Display
  lid?: League['id']
  name: Display
  nameZH: Display
  sn: Display
}