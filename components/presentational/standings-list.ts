export class StandingsList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const items = window['items'];
    this.innerHTML = `
      <table>
        <tr>
          <th>Position</th>
          <th>Team</th>
          <th>Points</th>
        </tr>
        ${items.reduce((acc, item) => {
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