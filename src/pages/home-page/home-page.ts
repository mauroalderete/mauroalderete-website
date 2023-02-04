import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { mdiPlay, mdiDocker, mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js';

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
              <span>Mauro Alderete</span>
            </div>
            <div class="subtitle">
              <span> Desarrollo software y brindo mentorías </span>
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
            <div class="button">
              <div class="state-layer"></div>
              <svg viewBox="0 0 24 24">
                <path d="${mdiPlay}" />
              </svg>
              <div class="ring"></div>
            </div>
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

  // private _handleProfileCardClick(event: CustomEvent) {
  //   console.log('card clicked: ', event.detail);

  //   const modal = <AppModal>this.shadowRoot?.querySelector(`app-profile-modal[data-profile="${event.detail.profile}"]`);
  //   modal.Show();
  // }
}

/*
<section class="welcome">
            <div class="welcome-content">
              <div class="fadeUp" style="margin-bottom: 1.5rem;">
                <span class="text-normal textcolor-accent">Hola, mi nombre es</span>
              </div>
              <div class="fadeUp fadeUp-1" style="margin-bottom: 0.5rem;">
                <span class="text-title textcolor-primary">Mauro Alderete</span>
              </div>
              <div class="fadeUp fadeUp-2" style="margin-bottom: 1rem;">
                <span class="text-title textcolor-secondary">
                  <span style="white-space: nowrap">Desarrollo software y</span>
                  brindo mentorías
                </span>
              </div>
              <div class="fadeUp fadeUp-3">
                <p class="text-normal textcolor-secondary">
                  Soy un profesional apasionado por la tecnología y la ingeniería del software. Busco en cada proyecto
                  generar un valor agregado que impacte en la calidad de vida de las personas. Me entusiasma mucho
                  aprender cosas nuevas y compartir mi experiencia.
                </p>
              </div>
            </div>
          </section>
          

<div class="social-icons hide">
            <app-social-icon
              name="twitter"
              target="https://twitter.com/_mauroalderete"
              src="/twitter.svg"
            ></app-social-icon>
            <app-social-icon
              name="linkedin"
              target="https://www.linkedin.com/in/mauroalderete/"
              src="/linkedin.svg"
            ></app-social-icon>
            <app-social-icon
              name="github"
              target="https://github.com/mauroalderete"
              src="/github.svg"
            ></app-social-icon>
            <app-social-icon
              name="docker"
              target="https://hub.docker.com/u/mauroalderete"
              src="/docker.svg"
            ></app-social-icon>
          </div>

          

<div class="side">
          <div class="social-icons">
            <app-social-icon
              class="fadeDown-social-icon fadeDown-social-icon-4"
              name="twitter"
              target="https://twitter.com/_mauroalderete"
              src="/twitter.svg"
            ></app-social-icon>
            <app-social-icon
              class="fadeDown-social-icon fadeDown-social-icon-3"
              name="linkedin"
              target="https://www.linkedin.com/in/mauroalderete/"
              src="/linkedin.svg"
            ></app-social-icon>
            <app-social-icon
              class="fadeDown-social-icon fadeDown-social-icon-2"
              name="github"
              target="https://github.com/mauroalderete"
              src="/github.svg"
            ></app-social-icon>
            <app-social-icon
              class="fadeDown-social-icon fadeDown-social-icon-1"
              name="docker"
              target="https://hub.docker.com/u/mauroalderete"
              src="/docker.svg"
            ></app-social-icon>
          </div>
          <div class="picture"></div>
        </div>
      </div>
      <section class="profiles">
        <div class="fake-profile-card"></div>
        <app-profile-card
          class="profile-card profile-card-frontend fadeUp-profile fadeUp-profile-1"
          profile="frontend"
          src="/frontend.svg"
          @open="${this._handleProfileCardClick}"
        ></app-profile-card>
        <app-profile-card
          class="profile-card profile-card-backend fadeUp-profile fadeUp-profile-2"
          profile="backend"
          src="/backend.svg"
          @open="${this._handleProfileCardClick}"
        ></app-profile-card>
        <app-profile-card
          class="profile-card profile-card-gamedev fadeUp-profile fadeUp-profile-3"
          profile="gamedev"
          src="/gamedev.svg"
          @open="${this._handleProfileCardClick}"
        ></app-profile-card>
        <app-profile-card
          class="profile-card profile-card-devops fadeUp-profile fadeUp-profile-4"
          profile="sre"
          src="/sre.svg"
          @open="${this._handleProfileCardClick}"
        ></app-profile-card>
        <app-profile-card
          class="profile-card profile-card-mentorship fadeUp-profile fadeUp-profile-5"
          profile="mentorship"
          src="/mentorship.svg"
          @open="${this._handleProfileCardClick}"
        ></app-profile-card>
      </section>

      <app-profile-modal
        data-profile="frontend"
        profile="Frontend Developer"
        iconSrc="/frontend.svg"
        resumeUrl="/mauro-alderete-frontend.pdf"
        contactUrl="https://www.linkedin.com/in/mauroalderete/"
        style="
        --shadow-backcolor: var(--frontend-color);
        --accent-color: var(--frontend-color);
        --icon-filter-color: var(--frontend-filter);
        "
      >
        <div slot="summary">
          <p>Como frontender...</p>
        </div>
        <div slot="multimedia">photo</div>
      </app-profile-modal>

      <app-profile-modal
        data-profile="backend"
        profile="Backend Developer"
        iconSrc="/backend.svg"
        resumeUrl="/mauro-alderete-backend.pdf"
        contactUrl="https://www.linkedin.com/in/mauroalderete/"
        style="
        --shadow-backcolor: var(--backend-color);
        --accent-color: var(--backend-color);
        --icon-filter-color: var(--backend-filter);
        "
      >
        <div slot="summary">
          <p>Como backender...</p>
        </div>
        <div slot="multimedia">photo</div>
      </app-profile-modal>

      <app-profile-modal
        data-profile="gamedev"
        profile="Game Developer"
        iconSrc="/gamedev.svg"
        resumeUrl="/mauro-alderete-gamedev.pdf"
        contactUrl="https://www.linkedin.com/in/mauroalderete/"
        style="
        --shadow-backcolor: var(--gamedev-color);
        --accent-color: var(--gamedev-color);
        --icon-filter-color: var(--gamedev-filter);
        "
      >
        <div slot="summary">
          <p>
            Soy un profesional innovador y con iniciativa. Suelo liderar proyectos de investigación y de desarrollo con
            diferentes stacks tecnológicos y lenguajes: C++, C#, JavaScript, Python, Go.
          </p>
          <p>
            A lo largo de los años abordé múltiples proyectos, desde el desarrollo de videojuegos clásicos y la
            construcción de equipos de robots competitivos usando modelos de aprendizaje automático, hasta la difusión
            científica y el desarrollo de software a medida para fábricas, distribuidores y bancos entre otros.
          </p>
          <p>
            Apasionado del desarrollo de videojuegos y sus desafíos. Mis primeros pasos en la programación fueron
            construyendo videojuegos. Espero continuar haciéndolo formando parte de un grandioso equipo.
          </p>
        </div>
        <div slot="media"><img src="./gamedev-show-1.gif" /></div>
      </app-profile-modal>

      <app-profile-modal
        data-profile="sre"
        profile="Site Reliability Engineering"
        iconSrc="/sre.svg"
        resumeUrl="/mauro-alderete-sre.pdf"
        contactUrl="https://www.linkedin.com/in/mauroalderete/"
        style="
        --shadow-backcolor: var(--sre-color);
        --accent-color: var(--sre-color);
        --icon-filter-color: var(--sre-filter);
        "
      >
        <div slot="summary">
          <p>Como SRE...</p>
        </div>
        <div slot="multimedia">photo</div>
      </app-profile-modal>

      <app-profile-modal
        data-profile="mentorship"
        profile="Mentorship"
        iconSrc="/mentorship.svg"
        resumeUrl="/mauro-alderete-mentorship.pdf"
        contactUrl="https://www.linkedin.com/in/mauroalderete/"
        style="
        --shadow-backcolor: var(--mentorship-color);
        --accent-color: var(--mentorship-color);
        --icon-filter-color: var(--mentorship-filter);
        "
      >
        <div slot="summary">
          <p>Como mentor</p>
        </div>
        <div slot="multimedia">photo</div>
      </app-profile-modal>


*/
