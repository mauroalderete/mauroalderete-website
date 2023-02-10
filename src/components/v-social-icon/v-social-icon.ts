import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/*eslint-disable */
import style from './v-social-icon.css?inline' assert { type: 'css' };
/*eslint-enable */

@customElement('v-social-icon')
export class VSocialIcon extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  @property()
  name: string;

  @property()
  url: string;

  @property()
  icon: string;

  container?: HTMLElement;
  listenClick: boolean;

  constructor() {
    super();

    this.name = 'social';
    this.url = '#';
    this.icon = '';

    this.listenClick = false;
  }

  public firstUpdated(): void {
    this.container = <HTMLElement>this.shadowRoot?.querySelector('.container');

    this.addEventListener('click', () => this._handleClick());
    this.listenClick = true;
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
    if (!this.container) {
      return;
    }

    if (!this.listenClick) {
      return;
    }

    this.listenClick = false;

    this.container?.classList.add('anim-click');

    const timeout = setTimeout(() => {
      this.container?.classList.remove('anim-click');
      clearTimeout(timeout);

      window.open(this.url, '_blank');

      this.listenClick = true;
    }, 500);
  }
}
