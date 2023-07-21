import type { LeagueSeason } from './LeagueSeason'
import type { League } from './League'
import type { Team } from './Team'
import type { Id, Score } from './base'
import { Player } from './Player'

export interface TeamSeason {
  id: Id
  tid: Team['id']
  lid: League['id']
  lsid: LeagueSeason['id']
  it?: Score
  order?: Score
  pl: Player['id']
  gl: Score
  win: number
  lst: number
  tie: number
}