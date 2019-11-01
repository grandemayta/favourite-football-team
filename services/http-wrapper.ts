import { BASEURL, HEADERS } from '../constants';
import { StandingsReq } from '../models';

const httpWrapper = endpoint => {
    return fetch(`${BASEURL}/${endpoint}`, { headers: HEADERS });
};

export const getStandings = async (req: StandingsReq) => {
    const endpoint = `competitions/${req.com}/standings?season=${req.season}`;
    const response = await httpWrapper(endpoint);
    return response.json();
};