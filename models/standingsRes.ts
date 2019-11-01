export interface StandingRes {
  draw: number,
  goalDifference: number,
  goalsAgainst: number,
  goalsFor: number,
  lost: number,
  playedGames: number,
  points: number,
  position: number,
  team: Team,
  won: number
}

interface Team {
  crestUrl: string
  id: number,
  name: string
}