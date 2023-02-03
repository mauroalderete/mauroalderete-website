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
  target: string;

  @property()
  src: string;

  constructor() {
    super();

    this.name = 'social';
    this.target = '#';
    this.src = '';

    this.addEventListener('click', this._handleClick);
  }

  render() {
    return html`
      <div class="container">
        <div class="background"></div>
        <div class="icon">
          <img src="${this.src}" alt="${this.name}" />
        </div>
      </div>
    `;
  }

  _handleClick() {
    this.emitClick();
    window.open(this.target, '_blank');
  }

  emitClick() {
    const event = new CustomEvent('click', {
      bubbles: true,
      composed: true,
      detail: {
        name: this.name,
        target: this.target,
        src: this.src,
      },
    });
    this.dispatchEvent(event);
  }
}
