import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/*eslint-disable */
import style from './profiles-page.css?inline' assert { type: 'css' };
import { AnimationController } from './animation-controller';
/*eslint-enable */

@customElement('profiles-page')
export class ProfilesPage extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  animationController: AnimationController;

  constructor() {
    super();

    this.animationController = new AnimationController();
  }

  firstUpdated(): void {
    this._handleWindowLoaded();
  }

  render() {
    return html`
      <div class="page">
        <div class="background"></div>
        <div class="layout"></div>
      </div>
    `;
  }

  private _handleWindowLoaded() {
    if (!this.shadowRoot) {
      return;
    }
    this.animationController.Start(this.shadowRoot);
  }
}
