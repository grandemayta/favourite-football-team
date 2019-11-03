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
    console.log(await getMatches(matchesRequest));
    this.innerHTML = `
      <h2>NEXT MATCHES</h2>
    `;
  }
}

customElements.define('gm-matches', Matches);