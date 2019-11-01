export const getShortStandings = (team: string, standings: any[]) => {
  const findTeam = standings.findIndex(standing => {
    return standing.team.id === parseInt(team);
  });

  let position;

  if (findTeam === 0) {
    position = 0;
  } else if (findTeam === (standings.length - 1)) {
    position = standings.length - 3;
  }

  return standings.splice(position || findTeam - 1, 3);
};