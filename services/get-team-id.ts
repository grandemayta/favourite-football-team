export const getTeamId = async (compeition: string) => {
    const endpoint = `competitions/${competition}/teams}`;
    const response = await httpWrapper(endpoint);
    const json = await response.json();
    return json.standings[0].table;
};
competitions/SA/teams