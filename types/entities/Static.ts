import type { League } from './League'

export interface Static {
  leagueLogos: { [key: League['id']]: string }
}