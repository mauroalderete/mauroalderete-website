import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Splide } from '@splidejs/splide';

import { AnimationController } from './animation-controller';
import { ProfileService } from '../../services/profile.service';
import { IProfile, ISoftSkill } from '../../models/profile.model';

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

  currentSoftSkill?: ISoftSkill;

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
          <section class="megacontent">
            <section class="content">
              <section class="section-basic">
                <h3>// ROL</h3>
                <p>${this.currentProfileData?.rol}</p>
                <div
                  style="width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;"
                >
                  <v-button
                    style="white-space: nowrap"
                    text="DESCARGA MI CURRICULUM DE FRONTEND"
                    @press="${() => window.open('', '_blank')}"
                  ></v-button>
                </div>
              </section>
              <section class="section-basic">
                <h2>SOFT SKILLS</h2>

                <div class="skill-bar">
                  <div class="skills">
                    ${this.currentProfileData?.softSkills.map(
                      (skill) =>
                        html`<div @click="${(e: Event) => this._handleSoftSkillClicked(e, skill.guid)}" class="skill">
                          ${skill.letter}
                        </div>`
                    )}
                  </div>
                  <div class="skill-description">
                    <h3>${this.currentSoftSkill?.title}</h3>
                    ${this.currentSoftSkill?.paragraph.map((paragraph) => html`<p>${paragraph}</p>`)}
                  </div>
                </div>
              </section>

              <section class="section-basic">
                <h2>TECHNICAL SKILLS</h2>
                <div class="hard-skills">
                  ${this.currentProfileData?.hardSkills.map((skill) => {
                    const color = this._randomColor();
                    return html`<div class="hard-skill" style="background-color: ${color.bg}; color: ${color.fg};">
                      ${skill.label}
                    </div>`;
                  })}
                </div>
              </section>
            </section>

            <section class="section-alert">
              <div class="alert-content">
                <p>Estas skills son las que más utilizo mientras trabajo en proyectos frontend. Pero eso no es todo.</p>
                <p>
                  Te invito a que visites mis otros perfiles profesionales y conozcas más sobre los proyectos en los
                  participe.
                </p>
                <p>Si tenes alguna duda contactame por mis redes, siempre estoy abierto para una charlar</p>
                <div class="alert-socialbar">
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
              </div>
            </section>
            <section class="content">
              <section class="section-basic section-projects">
                <h2>PROYECTOS</h2>
                <div class="projects">
                  ${this.currentProfileData?.projects.map((project) => {
                    return html`
                      <div class="project">
                        ${project.media ? html`<div class="media"><img src="${project.media}" /></div>` : html``}

                        <div class="project-content">
                          <h2>// ${project.title}</h2>
                          ${project.paragraph.map((paragraph) => html`<p>${paragraph}</p>`)}
                          ${project.target
                            ? html`
                                <v-button
                                  class="more"
                                  text="VER MAS"
                                  @press="${() => window.open(project.target, '_blank')}"
                                ></v-button>
                              `
                            : html`<div class="more"></div>`}
                        </div>
                      </div>
                    `;
                  })}
                </div>
              </section>
            </section>
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

  private _handleSoftSkillClicked(event: Event, guid: number) {
    const skill = this.currentProfileData?.softSkills.find((ss) => ss.guid == guid);
    if (!skill) {
      return;
    }

    const previous = this.shadowRoot?.querySelector('.skill.active');
    if (previous) {
      previous.classList.remove('active');
    }
    (event.target as HTMLDivElement).classList.add('active');

    this.currentSoftSkill = skill;

    this.requestUpdate();
  }

  private _randomColor(): { bg: string; fg: string } {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);

    if (l >= 50) {
      return {
        bg: `hsl(${h}deg, ${s}%, ${l}%)`,
        fg: '#000',
      };
    } else {
      return {
        bg: `hsl(${h}deg, ${s}%, ${l}%)`,
        fg: '#fff',
      };
    }
  }

  private _handleWindowLoaded() {
    if (!this.shadowRoot) {
      return;
    }
    // this.animationController.Start(this.shadowRoot);
  }
}
