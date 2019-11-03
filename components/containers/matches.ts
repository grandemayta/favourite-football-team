import { getMatches } from '../../services';
import { MatchesReq } from '../../models';

export class Matches extends HTMLElement {
  get team() { return this.getAttribute('team'); }

  connectedCallback() {
    this.render();
  }

  async render() {
    const matchesRequest: MatchesReq = {
      teamId: this.team,
      status: 'SCHEDULED',
      limit: 3
    };
    const matches: string = JSON.stringify(await getMatches(matchesRequest));
    this.innerHTML = `
      <gm-matches-list items='${matches}'></gm-matches-list>
    `;
  }
}

customElements.define('gm-matches', Matches);