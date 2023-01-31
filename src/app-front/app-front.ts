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
      <div class="front">
        <section class="welcome">
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
          <div class="callaction callaction-bottom">
            <button class="outline">CV</button>
            <div style="font-size: 2.5em; height: 2em;"></div>
            <button class="fill">Hablemos</button>
          </div>
        </section>
        <div class="side">
          <div class="picture"></div>
          <div class="callaction">
            <button class="outline">CV</button>
            <button class="fill">Hablemos</button>
          </div>
        </div>
      </div>
      <section class="profiles">
        <app-profile-card class="profile-cards" profile="Frontend" src="./public/frontend.svg"></app-profile-card>
        <app-profile-card class="profile-cards" profile="Backend" src="./public/database.svg"></app-profile-card>
        <app-profile-card class="profile-cards" profile="Gamedev" src="./public/gamedev.svg"></app-profile-card>
        <app-profile-card class="profile-cards" profile="DevOps" src="./public/infraestructure.svg"></app-profile-card>
        <app-profile-card class="profile-cards" profile="Mentorship" src="./public/mentorship.svg"></app-profile-card>
      </section>
    `;
  }
}
