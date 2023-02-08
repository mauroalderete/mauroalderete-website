import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Splide } from '@splidejs/splide';

import { AnimationController } from './animation-controller';
import { ProfileService } from '../../services/profile.service';
import { IProfile } from '../../models/profile.model';

/*eslint-disable */
import style from './profiles-page.css?inline' assert { type: 'css' };
import { ProfileCard } from '../../components/profile-card/profile-card';
import { router } from '../../main';
import { mdiDocker, mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js';
/*eslint-enable */

@customElement('profiles-page')
export class ProfilesPage extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  animationController: AnimationController;
  profileService: ProfileService;

  profileDataList: Array<IProfile>;
  currentProfileData?: IProfile;

  profileCardList: Array<ProfileCard>;
  currentProfileCard?: ProfileCard;

  updatedTasks: Array<() => void>;

  splide!: Splide;

  constructor() {
    super();

    this.animationController = new AnimationController();

    this.profileService = new ProfileService();
    this.profileDataList = new Array<IProfile>();

    this.updatedTasks = new Array<() => void>();

    this.profileCardList = new Array<ProfileCard>();
  }

  firstUpdated(): void {
    this._handleWindowLoaded();

    // recovery last all profiles data available
    this.profileService
      .GetProfilesAsync()
      .then((profiles) => {
        this.profileDataList = profiles;

        // prepare a callback to setup splide and add listeners
        this.updatedTasks.push(() => {
          const splideElement = this.shadowRoot?.querySelector('.splide');
          if (!splideElement) {
            throw new Error('splide element not found, it is required to setup profile cards');
          }

          // get profile selected by url
          // get the profile index that match with profileRouted
          const profileRoutedIndex = this.profileDataList.findIndex(
            (profile) => profile.type == router.location.params.profile.toString().toUpperCase()
          );
          if (profileRoutedIndex < 0) {
            throw new Error(`profile selected "${router.location.params.profile}" no exist`);
          }

          this.splide = new Splide(splideElement as HTMLElement, {
            start: profileRoutedIndex,
            lazyLoad: true,
            focus: 'center',
          });

          this.splide.on('active', () => {
            this.currentProfileCard?.Inactive();
            this.currentProfileCard = this.profileCardList[this.splide.index];
            this.currentProfileCard.Active();

            this.currentProfileData = this.profileDataList.find(
              (profile) => profile.type == this.currentProfileCard?.type
            );

            this.requestUpdate();
          });

          this.splide.mount();
        });

        // prepare a callback to get collection profiles card elements
        // to handle activation state later
        this.updatedTasks.push(() => {
          const nodes = this.shadowRoot?.querySelectorAll('profile-card');
          nodes?.forEach((node) => {
            this.profileCardList.push(node as ProfileCard);
          });
        });

        this.requestUpdate();
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  protected updated(): void {
    while (this.updatedTasks.length > 0) {
      const task = this.updatedTasks.pop();
      if (task) {
        task();
      }
    }
  }

  render() {
    return html`
      <div class="container">
        <div class="layout">
          <section class="header">
            <section class="splide" aria-labelledby="carousel-heading">
              <div class="splide__track">
                <div class="splide__list">
                  ${this.profileDataList.map(
                    (profile) => html` <profile-card
                      class="splide__slide"
                      type="${profile.type}"
                      title=${profile.title}
                      headline=${profile.headline}
                      image=${profile.icon}
                    ></profile-card>`
                  )}
                </div>
              </div>
            </section>
          </section>
          <section class="content">
            <section class="rol">${this.currentProfileData?.rol}</section>
            <section class="featuers">${this.currentProfileData?.features}</section>
            <section class="soft-skills">${this.currentProfileData?.softSkills}</section>
            <section class="hard-skills">${this.currentProfileData?.hardSkills}</section>
            <section class="projects">${this.currentProfileData?.projects}</section>
            <section class="blog">${this.currentProfileData?.blog}</section>
          </section>
          <section class="footer">
            <div class="footer-links ">
              <ul>
                <li class="link">
                  <a href="https://www.linkedin.com/in/mauroalderete/" target="_blank">CONTÁCTAME</a>
                </li>
                <li class="link">
                  <a href="/profiles/gamedev/resumes/mauro-alderete-gamedev.pdf" target="_blank"
                    >DESCARGA MI CURRICULUM DE FRONTEND</a
                  >
                </li>
              </ul>
            </div>
            <div class="socialbar">
              <v-social-icon
                class="anim-social-icon"
                name="twitter"
                url="https://twitter.com/_mauroalderete"
                icon="${mdiTwitter}"
              ></v-social-icon>
              <div></div>
              <v-social-icon
                class="anim-social-icon"
                name="linkedin"
                url="https://www.linkedin.com/in/mauroalderete/"
                icon="${mdiLinkedin}"
              ></v-social-icon>
              <div></div>
              <v-social-icon
                class="anim-social-icon"
                name="github"
                url="https://github.com/mauroalderete"
                icon="${mdiGithub}"
              ></v-social-icon>
              <div></div>
              <v-social-icon
                class="anim-social-icon"
                name="docker"
                url="https://hub.docker.com/u/mauroalderete"
                icon="${mdiDocker}"
              ></v-social-icon>
            </div>
          </section>
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
