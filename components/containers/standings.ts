import { getStandings } from '../../services'
import { StandingsRes } from '../..models';
import { getShortStandings } from '../../utils';

export class Standings extends HTMLElement {
  get competition() { return this.getAttribute('competition'); }
  get team() { return this.getAttribute('team'); }

  connectedCallback() {
    this.render();
  }

  async render() {
    const competition = this.competition.toUpperCase();
    const season = "2019";
    const standings: [StandingsRes] = await getStandings({ competition, season });
    
    window['items'] = getShortStandings(this.team, standings);

    this.innerHTML = `
      <gm-standings-list></gm-standings-list>
    `;
  }
}

customElements.define('gm-standings', Standings);