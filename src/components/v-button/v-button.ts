import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/*eslint-disable */
import style from './v-button.css?inline' assert { type: 'css' };
/*eslint-enable */

@customElement('v-button')
export class VButton extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  @property()
  text: string;

  constructor() {
    super();

    this.text = '';

    this.addEventListener('click', () => this._handleClick());
  }

  render() {
    return html`
      <div class="container">
        <div class="shine"></div>
        <div class="button">
          <div class="state-layer"></div>
          <div class="top"></div>
          <div class="text" data-text="${this.text}">${this.text}</div>
          <div class="lines"></div>
        </div>
      </div>
    `;
  }

  private _handleClick() {
    const container = this.shadowRoot?.querySelector('.container');
    const text = this.shadowRoot?.querySelector('.text');

    container?.classList.add('clicked');
    text?.classList.add('glitch');

    setTimeout(() => {
      const event = new CustomEvent('press', { bubbles: true, composed: true, cancelable: true });

      this.dispatchEvent(event);
      if (event.defaultPrevented) {
        return;
      }

      container?.classList.remove('clicked');
      text?.classList.remove('glitch');
    }, 600);

    this.requestUpdate();
  }
}
