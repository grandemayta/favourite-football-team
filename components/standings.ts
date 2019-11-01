import { getStandings } from '../services'

export class Standings extends HTMLElement {
  get competition() { return this.getAttribute('competition'); }
  get team() { return this.getAttribute('team'); }

  connectedCallback() {
    console.log(getStandings);
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