import { getStandings } from '../services'

export class Standings extends HTMLElement {
  get competition() { return this.getAttribute('competition'); }
  get team() { return this.getAttribute('team'); }

  async connectedCallback() {
    const competition = this.competition.toUpperCase();
    const season = "2019";
    const a = await getStandings({ competition, season });
    console.log(a.standings[0]);
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