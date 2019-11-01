export const getTeamId = (team: string, teams: any[]) => {
  const teamFound = teams.find(item => {
    const shortName = item.shortName.toUpperCase();
    return shortName.includes(team.toUpperCase());
  });
  return teamFound.id;
};