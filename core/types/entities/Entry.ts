import { Match } from './Match'
import { Player } from './Player'
import { TeamSeason } from './TeamSeason'
import { Display } from './base'


/**
 * 词条
 */
export interface Entry {
  id: Display
  n: Display
  t: TeamSeason['id']
  m: Match['id'] | Display
  pl: Player['id'][]
  ds: Display
}