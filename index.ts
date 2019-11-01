export class FootballTeams extends HTMLElement {
  get competition() { return this.getAttribute('competition'); }
  get team() { return this.getAttribute('team'); }
  
  connectedCallback() {
    this.innerHTML = `
      <h1>It works</h1>
    `;
  }
}

customElements.define("gm-football", FootballTeams);