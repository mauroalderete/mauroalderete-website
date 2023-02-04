import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/*eslint-disable */
import style from './app-social-icon.css?inline' assert { type: 'css' };
/*eslint-enable */

@customElement('app-social-icon')
export class AppSocialIcon extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  @property()
  name: string;

  @property()
  url: string;

  @property()
  icon: string;

  constructor() {
    super();

    this.name = 'social';
    this.url = '#';
    this.icon = '';

    this.addEventListener('click', () => this._handleClick());
  }

  render() {
    return html`
      <div class="container">
        <div class="state-layer"></div>
        <svg class="icon" viewBox="0 0 24 24">
          <path d="${this.icon}" />
        </svg>
      </div>
    `;
  }

  _handleClick() {
    this.emitClick();
    window.open(this.url, '_blank');
  }

  emitClick() {
    const event = new CustomEvent('click', {
      bubbles: true,
      composed: true,
      detail: {
        name: this.name,
        target: this.url,
        src: this.icon,
      },
    });
    this.dispatchEvent(event);
  }
}
