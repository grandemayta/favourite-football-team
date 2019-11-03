export class MatchesList extends HTMLElement {
  get items() { return JSON.parse(this.getAttribute('items')); }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <table>
        ${this.items.reduce((acc, item) => {
          return `
            ${acc}
            <tr>
              <td>${item.homeTeam.name}</td>
              <td>VS</td>
              <td>${item.awayTeam.name}</td>
              <td>${item.competition.name}</td>
            </tr>
          `;
        }, '')}
      </table>
    `;
  }
}

customElements.define('gm-matches-list', MatchesList);