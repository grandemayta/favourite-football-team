import { getStandings } from '../../services'
import { StandingsRes } from '../..models';

export class Standings extends HTMLElement {
  get competition() { return this.getAttribute('competition'); }
  get team() { return this.getAttribute('team'); }

  async connectedCallback() {
    const competition = this.competition.toUpperCase();
    const season = "2019";
    const standings: [StandingsRes] = await getStandings({ competition, season });
    const findTeam = standings.findIndex(standing => {
      const team = standing.team.name.toLowerCase();
      return team.includes(this.team.toLowerCase());
    });

    let first3Positions: [StandingsRes];

    console.log(findTeam);

    if (findTeam === 0) {
      first3Positions = standings.splice(0, 3);
    } else if (findTeam === (standings.length - 1)) {
      first3Positions = standings.splice((standings.length - 3), 3);
    } else {
      first3Positions = standings.splice((findTeam - 1), 3);
    }

    console.log(first3Positions);

    this.innerHTML = `
      <gm-standings-list items="${JSON.stringify(first3Positions)}"></gm-standings-list>
    `;
  }
}

customElements.define('gm-standings', Standings);