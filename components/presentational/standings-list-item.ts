export class StandingsListItem extends HTMLTableRowElement {
  get position() { return this.getAttribute('position'); }
  get name() { return this.getAttribute('name'); }
  get points() { return this.getAttribute('points'); }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <td>${this.position}</td>
      <td>${this.name}</td>
      <td>${this.points}</td>
    `;
  }
}

customElements.define('gm-standings-list-item', StandingsListItem, { extends: 'tr' });