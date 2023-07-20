import { Match } from './Match'
import { Player } from './Player'
import { TeamSchedule } from './TeamSchedule'
import { Display } from './base'

export interface Entry {
  id: Display
  n: Display
  t: TeamSchedule['id']
  m: Match['id'] | Display
  pl: Player['id'][]
  ds: Display
}