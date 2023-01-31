import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/*eslint-disable */
import style from './app-front.css?inline' assert { type: 'css' };
/*eslint-enable */

@customElement('app-front')
export class AppFront extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  render() {
    return html`
      <div class="spacing"></div>
      <div class="front">
        <section class="welcome">
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
              generar un valor agregado que impacte en la calidad de vida de las personas. Me entusiasma mucho aprender
              cosas nuevas y compartir mi experiencia.
            </p>
          </div>
        </section>
        <div class="side">
          <div class="social-icons">
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
          <div class="picture"></div>
        </div>
      </div>
      <section class="profiles">
        <div class="fake-profile-card"></div>
        <app-profile-card
          class="profile-card profile-card-frontend fadeUp-profile fadeUp-profile-3"
          profile="Frontend"
          src="/frontend.svg"
        ></app-profile-card>
        <app-profile-card
          class="profile-card profile-card-backend fadeUp-profile fadeUp-profile-2"
          profile="Backend"
          src="/database.svg"
        ></app-profile-card>
        <app-profile-card
          class="profile-card profile-card-gamedev fadeUp-profile fadeUp-profile-1"
          profile="Gamedev"
          src="/gamedev.svg"
        ></app-profile-card>
        <app-profile-card
          class="profile-card profile-card-devops fadeUp-profile fadeUp-profile-2"
          profile="DevOps"
          src="/infraestructure.svg"
        ></app-profile-card>
        <app-profile-card
          class="profile-card profile-card-mentorship fadeUp-profile fadeUp-profile-3"
          profile="Mentorship"
          src="/mentorship.svg"
        ></app-profile-card>
      </section>
      <div class="spacing"></div>
    `;
  }
}
