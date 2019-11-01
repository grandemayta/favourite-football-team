export class FootballTeams extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1>It works</h1>
    `;
  }
}

customElements.define("gm-football", FootballTeams);