import { httpWrapper } from './http-wrapper';

export const getTeams = async (compeition: string) => {
    const endpoint = `competitions/${competition}/teams}`;
    const response = await httpWrapper(endpoint);
    const json = await response.json();
    return json.standings[0].table;
};