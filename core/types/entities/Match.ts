import type { League } from './League'
import type { LeagueSeason } from './LeagueSeason'
import type { Player } from './Player'
import type { TeamSeason } from './TeamSeason'
import type {
  Date,
  GoalKind,
  Id,
  MatchStatus,
  Score,
  Temperature,
  Weather,
  Wind,
} from './base'

export interface Goal {
  pid: Player['id']
  t: Date
  k: GoalKind
  tid: TeamSeason['id']
}

export interface Match {
  id: Id
  lid: League['id']
  lsid: LeagueSeason['id']
  d: Date
  s: MatchStatus
  h: TeamSeason['id'] // home
  a: TeamSeason['id'] // away
  hs: Score // home score
  as: Score // away score
  wt: Weather
  wd: Wind
  tm: Temperature
  hps: Player['id'][]
  aps: Player['id'][]
  gls: Goal[]
}
