import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { style } from './AppFront.css';

@customElement('app-front')
export class AppFront extends LitElement {
  static styles = style;

  render() {
    return html`
      <div class="content">
        <section class="introduction">
          <div class="greeting fadeEnterDown" style="transition-delay: 100ms;"><h1>Hola, mi nombre es<h1></div>
          <div class="name fadeEnterDown fadeEnterDown-1" style="transition-delay: 200ms;"><h1>Mauro Alderete<h1></div>
          <div class="what-do fadeEnterDown fadeEnterDown-2" style="transition-delay: 300ms;"><h1>Desarrollo software y brindo mentorías<h1></div>
          <div class="description fadeEnterDown fadeEnterDown-3" style="transition-delay: 400ms;">
            <p>
              Soy un profesional apasionado por la tecnología y la ingeniería del software.
              Busco en cada proyecto generar un valor agregado que impacte en la calidad de vida de las personas.
              Me entusiasma mucho aprender cosas nuevas y compartir mi experiencia.
            </p>
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
        <div>Frontend</div>
        <div>Backend</div>
        <div>Gamedev</div>
        <div>DevOps</div>
        <div>Mentorship</div>
      </section>
    `;
  }
}
