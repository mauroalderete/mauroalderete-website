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
  }

  render() {
    return html`
      <div class="container">
        <div class="shine"></div>
        <div class="button">
          <div class="state-layer"></div>
          <div class="text">${this.text}</div>
        </div>
      </div>
    `;
  }
}
