export * from  './components';

export class FootballTeams extends HTMLElement {
  get competition() { return this.getAttribute('competition'); }
  get team() { return this.getAttribute('team'); }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box; 
        }
        :host {
          display: flex;
          flex-direction: column;
        }
        h1 {
          display: flex;
          padding: 4px;
          font-size: 0.8em;
          background: #f0f0f0;
        }
      </style>
      <h1>STANDINGS</h1>
      <gm-standings competition=${this.competition} team=${this.team}></gm-standings>
      <h1>NEXT MATCHES</h1>
      <h1>PLAYERS SCORES</h1>
    `;
  }
}

customElements.define("gm-football", FootballTeams);