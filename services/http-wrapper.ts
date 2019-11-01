import { BASEURL, HEADERS } from '../constants';
import { standingsReq } from '../models';

const httpWrapper = endpoint => {
    return fetch(`${BASEURL}/${endpoint}`, { headers: HEADERS });
};

export const getStandings = async (req: standingsReq) => {
    const endpoint = `competitions/${req.competitionId}/standings?season=${req.season}`;
    const response = await httpWrapper(endpoint);
    return response.json();
};