import { League } from './League'
import { LeagueSeason } from './LeagueSeason'
import { Player } from './Player'
import { TeamSeason } from './TeamSeason'
import { Weather, Wind, Temperature, Date, Score, GoalKind, Id } from './base'


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