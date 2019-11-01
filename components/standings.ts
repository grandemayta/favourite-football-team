import { getStandings } from '../services'
import { StandingsRes } from '../models';

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

    console.log(findTeam);

    this.innerHTML = `
      <table>
        <tr>
          <th>Position</th>
          <th>Team</th>
          <th>Points</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Inter</td>
          <td>100</td>
        </tr>
      </table>
    `;
  }
}

customElements.define('gm-standings', Standings);