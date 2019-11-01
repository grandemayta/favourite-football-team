import { BASEURL, HEADERS } from '../constants';
import { StandingsReq } from '../models';

const httpWrapper = endpoint => {
    return fetch(`${BASEURL}/${endpoint}`, { headers: HEADERS });
};

export const getStandings = async (req: StandingsReq) => {
    const endpoint = `competitions/${req.competition}/standings?season=${req.season}`;
    const response = await httpWrapper(endpoint);
    const json = await response.json();
    return json.standings[0].table;
};