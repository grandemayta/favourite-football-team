export const getTeamId: number = (team: string, teams: any[]) => {
  const teamFound = teams.find(item => {
    const shortName = item.shortName.toUpperCase();
    return shortName.includes(team.toUpperCase());
  });
  return teamFound.id;
};