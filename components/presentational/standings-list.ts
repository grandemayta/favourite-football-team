export class StandingsList extends HTMLElement {
  get items() { return this.getAttribute('items'); }

  connectedCallback() {
    console.log('aaa', JSON.parse(this.items));
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
        <tr>
          <td>1</td>
          <td>Inter</td>
          <td>100</td>
        </tr>
      </table>
    `;
  }
}

customElements.define('gm-standings-list', StandingsList);