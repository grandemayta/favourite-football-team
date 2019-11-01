import { BASEURL, HEADERS } from '../constants';

export const httpWrapper = endpoint => {
    return fetch(`${BASEURL}/${endpoint}`, { headers: HEADERS });
};