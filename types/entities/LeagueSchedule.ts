import { League } from './League'
import { Date, Id } from './base'

export interface LeagueSchedule {
  id: Id
  l: League['id'] 
  beg: Date // start time
  end: Date // end time

}