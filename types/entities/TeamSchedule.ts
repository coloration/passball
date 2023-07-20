import type { LeagueSchedule } from './LeagueSchedule'
import type { League } from './League'
import type { Team } from './Team'
import type { Id, Score } from './base'
import { Player } from './Player'

export interface TeamSchedule {
  id: Id
  tid: Team['id']
  lid: League['id']
  lsid: LeagueSchedule['id']
  it?: Score
  order?: Score
  pl: Player['id']
  gl: Score
  win: number
  lst: number
  tie: number
}