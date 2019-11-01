import { BASEURL, HEADERS } from '../constants';

const httpWrapper = endpoint => {
    return fetch(`${BASEURL}/${endpoint}`, { headers: HEADERS });
};

export const getStandings = async (competition, season) => {
    const endpoint = `competitions/${competition}/standings?season=${season}`;
    const response = await httpWrapper(endpoint);
    return response.json();
};