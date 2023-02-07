import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/*eslint-disable */
import style from './profiles-page.css?inline' assert { type: 'css' };
import { AnimationController } from './animation-controller';
import { ProfileService } from '../../services/profile.service';
import { IProfile } from '../../models/profile.model';
import { router } from '../../main';
/*eslint-enable */

@customElement('profiles-page')
export class ProfilesPage extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  animationController: AnimationController;
  profileService: ProfileService;

  profiles: Array<IProfile>;
  current?: IProfile;

  constructor() {
    super();

    this.animationController = new AnimationController();

    this.profileService = new ProfileService();
    this.profiles = new Array<IProfile>();
  }

  firstUpdated(): void {
    this._handleWindowLoaded();

    this.profileService
      .GetProfilesAsync()
      .then((profiles) => {
        this.profiles = profiles;

        const profileSelected = this.profiles.find((p) => p.name == router.location.params.profile);
        if (!profileSelected) {
          throw new Error(`profile selected "${router.location.params.profile}" no exist`);
        }

        this.current = profileSelected;
        this.requestUpdate();
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  render() {
    return html`
      <div class="page">
        <div class="layout">
          <section class="header">
            <p><code>wrapAround: true</code></p>
            <div class="gallery js-flickity" data-flickity-options='{ "wrapAround": true }'>
              <div class="gallery-cell"></div>
              <div class="gallery-cell"></div>
              <div class="gallery-cell"></div>
              <div class="gallery-cell"></div>
              <div class="gallery-cell"></div>
            </div>
            <div class="carousel">
              <span>aaa</span>
              <span>bbb</span>
              <span>ccc</span>
              <span>ddddd</span>
              <span>ee</span>
              <span>f</span>
              <span>gggggggg ggg g</span>
              <span>hhhh</span>
            </div>
            <div class="menu">asdasd asd asd asd</div>
            <div class="headline">${this.current?.headline}</div>
            <div class="visual">${this.current?.icon}</div>
          </section>
          <section class="content">
            <section class="rol">${this.current?.rol}</section>
            <section class="featuers">${this.current?.features}</section>
            <section class="soft-skills">${this.current?.softSkills}</section>
            <section class="hard-skills">${this.current?.hardSkills}</section>
            <section class="projects">${this.current?.projects}</section>
            <section class="blog">${this.current?.blog}</section>
          </section>
          <section class="footer"></section>
        </div>
      </div>
    `;
  }

  private _handleWindowLoaded() {
    if (!this.shadowRoot) {
      return;
    }
    // this.animationController.Start(this.shadowRoot);
  }
}
