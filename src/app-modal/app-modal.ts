import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

/*eslint-disable */
import style from './app-modal.css?inline' assert { type: 'css' };
/*eslint-enable */

@customElement('app-modal')
export class AppModal extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  constructor() {
    super();

    this.addEventListener('click', this._handleOverlyClick);
  }

  render() {
    return html`
      <div class="modal" @click="${this._handleModalClick}">
        <slot name="content"></slot>
      </div>
    `;
  }

  private _handleOverlyClick(e: Event) {
    const detail = { mode: 'background' };
    const event = new CustomEvent('close', { detail, bubbles: true, composed: true, cancelable: true });

    this.dispatchEvent(event);
    if (event.defaultPrevented) {
      e.preventDefault();
      return;
    }

    this.style.display = 'none';
  }

  private _handleModalClick(e: Event) {
    e.stopPropagation();
  }

  public Show() {
    const modal = <HTMLDivElement>this.shadowRoot?.querySelector('.modal');
    modal.classList.add('one');

    this.style.visibility = 'visible';
    this.style.display = 'flex';

    this.style.transform = 'scaleY(0.01) scaleX(0)';
    this.style.animation = 'unfoldIn 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards';
    modal.style.transform = 'scale(0)';
    modal.style.animation = 'zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards';
  }
}
