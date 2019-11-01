export const getShortStandings = (team: string, standings: any[]) => {
  const findTeam = standings.findIndex(standing => {
    return standing.team.id === parseInt(team);
  });

  switch(true) {
    case findTeam === 0:
      return standings.splice(0, 3);
    case findTeam === (standings.length - 1):
      return standings.splice(standings.length - 3, 3);
      break;
    default:
      return standings.splice(findTeam - 1, 3);
  }
};