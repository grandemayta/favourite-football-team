import { httpWrapper } from './http-wrapper';
import { MatchesReq } from '../models';

export const getMatches = async (req: MatchesReq) => {
    const endpoint = `teams/${req.teamId}/matches?status=${req.status}&limit=${req.limit}`;
    const response = await httpWrapper(endpoint);
    return response.json();
};