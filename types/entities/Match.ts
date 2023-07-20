import { League } from './League'
import { LeagueSchedule } from './LeagueSchedule'
import { Player } from './Player'
import { TeamSchedule } from './TeamSchedule'
import { Weather, Wind, Temperature, Date, Score, GoalKind, Id } from './base'


export interface Goal {
  pid: Player['id']
  t: Date
  k: GoalKind
  tid: TeamSchedule['id']
}

export interface Match {
  id: Id
  lid: League['id']
  lsid: LeagueSchedule['id']
  d: Date
  h: TeamSchedule['id'] // home 
  a: TeamSchedule['id'] // away
  hs: Score // home score
  as: Score // away score
  wt: Weather
  wd: Wind
  tm: Temperature
  hps: Player['id'][]
  aps: Player['id'][]
  gls: Goal[]
  
}