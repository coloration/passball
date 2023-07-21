import { League } from './League'
import { Date, Id } from './base'

export interface LeagueSeason {
  id: number
  lid: number // League Id
  beg: Date // start time
  end: Date // end time
}