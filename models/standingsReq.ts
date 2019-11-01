export interface StandingsReq {
  competition: Competitions,
  season: string 
}

enum Competitions {
  sa = "SA",
  sb = "SB"
}