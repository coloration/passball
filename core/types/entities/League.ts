import { LeagueSeason } from './LeagueSeason'
import { Display, Id, LeagueKind } from './base'

export interface League {
  id: number
  n: Display
  nZH: Display
  k: LeagueKind //
  c: Display // country
  s?: LeagueSeason[]
}