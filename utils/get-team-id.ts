export const getTeamId = (teamName: string, teams: any[]) => {
  const teamFound = teams.find(team => {
    const name = team.shortName.toLowerCase();
    console.log(name.includes(teamName));
    return name.includes(teamName);
  });

  console.log('teamFound', teamFound);

  return teamFound;
};