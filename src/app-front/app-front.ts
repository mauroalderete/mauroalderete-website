import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import style from './app-front.css?inline' assert { type: 'css' };

@customElement('app-front')
export class AppFront extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  render() {
    return html`
      <div class="content">
        <section class="introduction">
          <div class="greeting fadeUp" style="transition-delay: 100ms;"><h1>Hola, mi nombre es<h1></div>
          <div class="name fadeUp fadeUp-1" style="transition-delay: 200ms;"><h1>Mauro Alderete<h1></div>
          <div class="what-do fadeUp fadeUp-2" style="transition-delay: 300ms;"><h1><span style="white-space: nowrap">Desarrollo software y</span> brindo mentorías<h1></div>
          <div class="description fadeUp fadeUp-3" style="transition-delay: 400ms;">
            <p>
              Soy un profesional apasionado por la tecnología y la ingeniería del software.
              Busco en cada proyecto generar un valor agregado que impacte en la calidad de vida de las personas.
              Me entusiasma mucho aprender cosas nuevas y compartir mi experiencia.
            </p>
          </div>
          <div class="callaction callaction-bottom">
        <button class="outline">CV</button>
        <div style="font-size: 2.5em; height: 2em;"></div>
        <button class="fill">Hablemos</button>
      </div>
        </section>
        <div class="side">
          <div class="picture">
          </div>
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
