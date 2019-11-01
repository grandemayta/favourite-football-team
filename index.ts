export class FootballTeams extends HTMLElement {
  get competition() { return this.getAttribute('competition'); }
  get team() { return this.getAttribute('team'); }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <h1>STANDINGS</h1>
      <h1>NEXT MATCHES</h1>
      <h1>PLAYERS SCORES</h1>
    `;
  }
}

customElements.define("gm-football", FootballTeams);