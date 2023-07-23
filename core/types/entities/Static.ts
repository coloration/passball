import type { League } from './League'
import type { Team } from './Team'

export interface Static {
  teamName: { [key: Team['id']]: string }
  teamNameZH: { [key: Team['id']]: string }
  leagueName: { [key: League['id']]: string }
  leagueNameZH: { [key: League['id']]: string }
}
