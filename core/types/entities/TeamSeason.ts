import type { LeagueSeason } from './LeagueSeason'
import type { League } from './League'
import type { Team } from './Team'
import type { Id, Score } from './base'
import type { Player } from './Player'

export interface TeamSeason {
  id: Id
  tid: Team['id']
  lid: League['id']
  lsid: LeagueSeason['id']
  it?: Score
  rk?: number
  pl: Player['id']
  gl: number
  win: number
  lst: number
  tie: number
}
