import { BASEURL, HEADERS } from '@grandemayta/data';

console.log(BASEURL);

/* const httpWrapper = endpoint => {
    return fetch(`${BASEURL}/${endpoint}`, { headers: HEADERS });
};

export const getStandings = async (competition, season, setState) => {
    const response = await httpWrapper(`competitions/${competition}/standings?season=${season}`);
    const data = await response.json();
    setState(data.standings[0].table);
}; */