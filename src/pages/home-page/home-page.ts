import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { mdiDocker, mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js';
import { AnimationController } from './animation-controller';

/*eslint-disable */
import style from './home-page.css?inline' assert { type: 'css' };
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
  }

  render() {
    return html`
      <div class="page">
        <div class="background"></div>
        <div class="layout">
          <div class="socialbar">
            <v-social-icon name="twitter" url="https://twitter.com/_mauroalderete" icon="${mdiTwitter}"></v-social-icon>
            <div></div>
            <v-social-icon
              name="linkedin"
              url="https://www.linkedin.com/in/mauroalderete/"
              icon="${mdiLinkedin}"
            ></v-social-icon>
            <div></div>
            <v-social-icon name="github" url="https://github.com/mauroalderete" icon="${mdiGithub}"></v-social-icon>
            <div></div>
            <v-social-icon
              name="docker"
              url="https://hub.docker.com/u/mauroalderete"
              icon="${mdiDocker}"
            ></v-social-icon>
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
          <div class="media">
            <div class="steam"></div>
            <egg-game-of-life class="game" rows="100" cols="100"></egg-game-of-life>
          </div>
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
    location.href = '/profiles';
  }
}
