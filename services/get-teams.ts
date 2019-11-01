import { httpWrapper } from './http-wrapper';

export const getTeams = async (competition: string) => {
    const endpoint = `competitions/${competition}/teams}`;
    const response = await httpWrapper(endpoint);
    const json = await response.json();
    return json.teams;
};