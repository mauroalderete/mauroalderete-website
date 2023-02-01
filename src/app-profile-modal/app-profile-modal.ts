import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AppModal } from '../app-modal/app-modal';

/*eslint-disable */
import style from './app-profile-modal.css?inline' assert { type: 'css' };
/*eslint-enable */

@customElement('app-profile-modal')
export class AppProfileModal extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  @property()
  profile: string;

  @property()
  iconSrc: string;

  @property()
  resumeUrl: string;

  @property()
  contactUrl: string;

  constructor() {
    super();

    this.profile = '';
    this.iconSrc = '';
    this.resumeUrl = '';
    this.contactUrl = '';

    this.addEventListener('click', this._handleModalClose);
  }

  render() {
    return html`
      <app-modal id="modal" @close="${this._handleModalClose}">
        <div class="modal-content" slot="content">
          <div class="title">
            <img src="${this.iconSrc}" />
            ${this.profile}
          </div>
          <div class="middle">
            <div class="left">
              <div class="summary">
                <slot class="text-normal textcolor-secondary" name="summary"></slot>
              </div>
            </div>
            <div class="right">
              <slot class="multimedia" name="multimedia"></slot>
              <div class="description">
                <slot class="text-normal textcolor-secondary" name="multimedia-description"></slot>
              </div>
            </div>
          </div>
          <div class="footer">
            <p class="text-normal textcolor-secondary">
              ¿Tenés algún proyecto en mente? No lo dudes, ¡hablemos!.<br />Estaré encantado en resolver cualquier
              inquietud.
            </p>
            <div class="buttons">
              <button @click="${this._handleProvideResume}"><span style="white-space: nowrap">CV</span></button>
              <button @click="${this._handleProvideContact}">CONTACTAR</button>
            </div>
          </div>
        </div>
      </app-modal>
    `;
  }

  private _handleModalClose() {
    this.style.display = 'none';
  }

  private _handleProvideResume() {
    window.open(this.resumeUrl, '_blank');
  }

  private _handleProvideContact() {
    window.open(this.contactUrl, '_blank');
  }

  public Show() {
    const modal = <AppModal>this.shadowRoot?.querySelector('#modal');

    modal.Show();

    this.style.visibility = 'visible';
    this.style.display = 'flex';
  }
}
