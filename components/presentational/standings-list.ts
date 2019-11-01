export class StandingsList extends HTMLElement {
  get items() { return JSON.parse(this.getAttribute('items')); }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <table>
        <tr>
          <th>Position</th>
          <th>Team</th>
          <th>Points</th>
        </tr>
        ${this.items.reduce((acc, item) => {
          return `
            ${acc}
            <tr is="gm-standings-list-item"
              position="${item.position}"
              name="${item.team.name}"
              points="${item.points}">
            </tr>
          `;
        }, '')}
      </table>
    `;
  }
}

customElements.define('gm-standings-list', StandingsList);