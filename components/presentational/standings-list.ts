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
            <gm-standings-list-item
              position="${item.position}"
              name="${item.team.name}"
              points="${item.points}">
            </gm-standings-list-item>
          `;
        }, '')}
      </table>
    `;
  }
}

customElements.define('gm-standings-list', StandingsList);