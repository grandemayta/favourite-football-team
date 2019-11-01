import { getStandings } from '../../services'
import { StandingsReq, StandingsRes } from '../..models';
import { getShortStandings } from '../../utils';

export class Standings extends HTMLElement {
  get competition() { return this.getAttribute('competition'); }
  get team() { return this.getAttribute('team'); }

  connectedCallback() {
    this.render();
  }

  async render() {
    const standingsParams: StandingsReq = { competition: this.competition, season: '2019' };
    const standings: [StandingsRes] = await getStandings(standingsParams);
    const shortStandings: string = JSON.stringify(getShortStandings(this.team, standings));

    this.innerHTML = `
      <gm-standings-list items='${shortStandings}'></gm-standings-list>
    `;
  }
}

customElements.define('gm-standings', Standings);