import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/*eslint-disable */
import style from './app-profile-card.css?inline' assert { type: 'css' };
/*eslint-enable */

@customElement('app-profile-card')
export class AppProfileCard extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  @property()
  profile: string;

  @property()
  src: string;

  constructor() {
    super();

    this.profile = 'profile';
    this.src = '';
  }

  render() {
    return html`
      <div class="svg">
        <img src="${this.src}" alt="${this.profile}" />
      </div>
      <div class="label">
        <h1>${this.profile}</h1>
      </div>
    `;
  }
}
