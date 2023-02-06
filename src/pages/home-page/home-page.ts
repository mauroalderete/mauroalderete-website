import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { mdiDocker, mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js';

/*eslint-disable */
import style from './home-page.css?inline' assert { type: 'css' };
import { AnimationController } from './animation-controller';
/*eslint-enable */

@customElement('home-page')
export class HomePage extends LitElement {
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

    const button = this.shadowRoot?.querySelector('.next .button');
    if (!button) {
      return;
    }
    button.addEventListener('click', () => {
      button.classList.add('anim-click');

      const timeout = setTimeout(() => {
        button.classList.remove('anim-click');

        clearTimeout(timeout);
      }, 850);
    });
  }

  render() {
    return html`
      <div class="page">
        <div class="background"></div>
        <div class="layout">
          <div class="socialbar">
            <app-social-icon
              name="twitter"
              url="https://twitter.com/_mauroalderete"
              icon="${mdiTwitter}"
            ></app-social-icon>
            <div></div>
            <app-social-icon
              name="linkedin"
              url="https://www.linkedin.com/in/mauroalderete/"
              icon="${mdiLinkedin}"
            ></app-social-icon>
            <div></div>
            <app-social-icon name="github" url="https://github.com/mauroalderete" icon="${mdiGithub}"></app-social-icon>
            <div></div>
            <app-social-icon
              name="docker"
              url="https://hub.docker.com/u/mauroalderete"
              icon="${mdiDocker}"
            ></app-social-icon>
          </div>
          <section class="content">
            <div class="greeting">
              <span>Hola, mi nombre es</span>
            </div>
            <div class="title">
              <span>MAURO ALDERETE</span>
            </div>
            <div class="subtitle">
              <span>Desarrollador de software y mentor</span>
            </div>
            <div>
              <p>
                Soy un profesional apasionado por la tecnología y la ingeniería del software. Busco en cada proyecto
                generar un valor agregado que impacte en la calidad de vida de las personas. Me entusiasma mucho
                aprender cosas nuevas y compartir mi experiencia.
              </p>
            </div>
          </section>
          <div class="next">
            <v-button text="Start" @press="${this._handleStartTouched}"></v-button>
          </div>
        </div>
      </div>
    `;
  }

  private _handleWindowLoaded() {
    if (!this.shadowRoot) {
      return;
    }
    this.animationController.Start(this.shadowRoot);
  }

  private _handleStartTouched() {
    console.log('To the 🚀 🌙!!!');
  }
}
