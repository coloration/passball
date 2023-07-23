import type { Date } from './base'
import type { TeamSeason } from './TeamSeason'

export interface LeagueSeason {
  id: number
  lid: number // League Id
  beg: Date // start time
  end: Date // end time
  t: TeamSeason[]
}
