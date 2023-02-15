import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Splide } from '@splidejs/splide';

import Masonry from 'masonry-layout';

import { AnimationController } from './animation-controller';
import { ProfileService } from '../../services/profile.service';
import { IProfile, ISoftSkill, ProfileType } from '../../models/profile.model';

/*eslint-disable */
import style from './profiles-page.css?inline' assert { type: 'css' };
import { ProfileCard } from '../../components/profile-card/profile-card';
import { router } from '../../main';
import { mdiChevronUpCircle, mdiDocker, mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js';
import { Cronjob } from '../../cronjob/cronjob';
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

  masonry?: Masonry;

  video?: HTMLVideoElement;
  poster?: HTMLDivElement;
  isReadyToPlay: boolean;

  constructor() {
    super();

    this.animationController = new AnimationController();

    this.profileService = new ProfileService();
    this.profileDataList = new Array<IProfile>();

    this.updatedTasks = new Array<() => void>();

    this.profileCardList = new Array<ProfileCard>();

    this.isReadyToPlay = false;
  }

  firstUpdated(): void {
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
          const profileRoutedIndex = this.profileDataList.findIndex((profile) => profile.type == ProfileType.Gamedev);
          if (profileRoutedIndex < 0) {
            throw new Error(`profile selected "${router.location.params.profile}" no exist`);
          }

          // handle first updated to header-landscape
          const titles = this.shadowRoot?.querySelectorAll(
            '.header-landscape-titles h2'
          ) as unknown as Array<HTMLHeadingElement>;
          titles.forEach((title) => {
            if (title.id == `title-${ProfileType.Gamedev}`) {
              this.updatedTasks.push(() => {
                title.dispatchEvent(new Event('click'));
              });
            }
          });

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

            if (this.currentProfileData) {
              this.currentSoftSkill = this.currentProfileData.softSkills[0];
            }

            const elements = this.shadowRoot?.querySelectorAll('.revealable') as Array<HTMLElement> | undefined;
            if (elements) {
              elements.forEach((element) => {
                element.classList.remove('reveal-active');
              });
            }

            this.updatedTasks.push(() => {
              this._revealProfile();
            });

            this.updatedTasks.push(() => {
              console.log('initializing masonry');
              const projects = this.shadowRoot?.querySelector('.projects');

              if (projects) {
                this.masonry = new Masonry(projects, {
                  itemSelector: '.project',
                  fitWidth: true,
                });
              }
            });

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

        this.video = this.shadowRoot?.querySelector('.header-landscape-background video') as HTMLVideoElement;
        this.video.addEventListener('canplay', () => this._handleCanPlay());

        const videoplayCron = new Cronjob(
          (cancel) =>
            new Promise((resolve, reject) => {
              if (!this.video) {
                this.video = this.shadowRoot?.querySelector('.header-landscape-background video') as HTMLVideoElement;
                if (!this.video) {
                  reject();
                  return;
                }
              }

              if (!this.poster) {
                this.poster = this.shadowRoot?.querySelector('.header-landscape-poster') as HTMLDivElement;
                if (!this.poster) {
                  reject();
                  return;
                }
              }

              if (!this.isReadyToPlay) {
                reject();
                return;
              }

              if (cancel()) {
                reject();
                return;
              }

              this.poster.classList.add('hide');
              this.video.muted = true;
              this.video.play();
              resolve();
            }),
          { interval: 50, intents: 0 }
        );

        setTimeout(() => videoplayCron.Start({}, false), 1000);

        this.requestUpdate();
      })
      .catch((error) => {
        throw new Error(error);
      });

    window.addEventListener('scroll', () => this._reveal());
    window.addEventListener('scroll', () => this._handleUpperButtonReveal());
    window.addEventListener('resize', () => {
      console.log('initializing masonry');
      const projects = this.shadowRoot?.querySelector('.projects');

      if (projects) {
        this.masonry = new Masonry(projects, {
          itemSelector: '.project',
          fitWidth: true,
        });
      }

      this._reveal();
      this._handleUpperButtonReveal();
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
            <section class="header-portrait splide" aria-labelledby="carousel-heading">
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
            <section class="header-landscape">
              <div class="header-landscape-background">
                <video preload="auto" loop="" playsinline="" poster="/profile/background-generic.jpg">
                  <source src="/profile/background-generic.mp4" type="video/mp4" />
                </video>
                <div class="header-landscape-poster"></div>
              </div>
              <div class="header-landscape-content">
                <div class="header-landscape-titles">
                  ${this.profileDataList.map(
                    (profile) =>
                      html`<h2 @click="${(e: Event) => this._handleTitleClick(profile, e)}" id="title-${profile.type}">
                        ${profile.title}
                      </h2>`
                  )}
                </div>
                <div class="header-landscape-cards">
                  ${this.profileDataList.map(
                    (profile) => html`
                      <div id="card-${profile.type}" class="header-landscape-card">
                        <div class="header-landscape-headline">${profile.headline}</div>
                        <div class="header-landscape-image">
                          <svg class="header-landscape-icon header-landscape-icon-${profile.type}" viewBox="0 0 24 24">
                            <path d="${profile.icon}" />
                          </svg>
                        </div>
                      </div>
                    `
                  )}
                </div>
              </div>
            </section>
          </section>
          <section class="megacontent" style="${this.currentProfileData?.maintain ? '' : 'display: none;'}">
            <section class="content" style="margin-top: 3rem; margin-bottom: 3rem;">
              <h1
                style="
                text-align:center;
                text-transform: uppercase;
                font-size: 2.1rem;"
              >
                Perfil en progreso
              </h1>
              <h3
                style="
                text-align:center;
                text-transform: uppercase;
                font-size: 0.9rem;"
              >
                Próximamente más novedades
              </h3>

              <div
                style="width: 100%;
                ${this.currentProfileData?.type != ProfileType.Mentorship &&
                this.currentProfileData?.type != ProfileType.SRE
                  ? 'display: flex;'
                  : 'display: none;'}
                flex-direction: row;
                justify-content: center;"
              >
                <v-button
                  style="white-space: wrap"
                  text="DESCARGA MI CURRICULUM DE ${this.currentProfileData?.type.toString().toUpperCase()}"
                  @press="${() =>
                    window.open(
                      `/profile/${this.currentProfileData?.type
                        .toString()
                        .toLowerCase()}/resumes/mauro-alderete-${this.currentProfileData?.type
                        .toString()
                        .toLowerCase()}.pdf`,
                      '_blank'
                    )}"
                ></v-button>
              </div>
            </section>
          </section>
          <section class="megacontent" style="${this.currentProfileData?.maintain ? 'display: none;' : ''}">
            <section class="content">
              <section class="section-basic perfil-section">
                <h3>// PERFIL</h3>
                <div class="revealable reveal-by-down">
                  ${this.currentProfileData?.rol.map((paragraph) => html`<p>${paragraph}</p>`)}
                </div>
                <div
                  style="width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;"
                >
                  <v-button
                    style="white-space: wrap"
                    text="DESCARGA MI CURRICULUM DE ${this.currentProfileData?.type.toString().toUpperCase()}"
                    @press="${() =>
                      window.open(
                        `/profile/${this.currentProfileData?.type
                          .toString()
                          .toLowerCase()}/resumes/mauro-alderete-${this.currentProfileData?.type
                          .toString()
                          .toLowerCase()}.pdf`,
                        '_blank'
                      )}"
                  ></v-button>
                </div>
              </section>
              <section class="section-basic">
                <h2>HABILIDADES INTERPERSONALES</h2>

                <div class="skill-bar revealable reveal-by-left">
                  <div class="skills">
                    ${this.currentProfileData?.softSkills.map((skill, index) => {
                      return html`<div
                        @click="${(e: Event) => this._handleSoftSkillClicked(e, skill.guid)}"
                        class="skill ${index == 0 ? 'active' : ''}"
                      >
                        <svg class="icon" viewBox="0 0 24 24">
                          <path d="${skill.icon}" />
                        </svg>
                      </div>`;
                    })}
                  </div>
                  <div class="skill-description">
                    <h3>// ${this.currentSoftSkill?.title}</h3>
                    ${this.currentSoftSkill?.paragraph.map((paragraph) => html`<p>${paragraph}</p>`)}
                  </div>
                </div>
              </section>

              <section class="section-basic">
                <h2>HABILIDADES TÉCNICAS</h2>
                <div class="hard-skills">
                  ${this.currentProfileData?.hardSkills.map((skill) => {
                    const color = this._randomColor();
                    return html`<div
                      class="hard-skill revealable"
                      style="background-color: ${color.bg}; color: ${color.fg};"
                    >
                      ${skill.label}
                    </div>`;
                  })}
                </div>
              </section>
            </section>

            <section class="section-alert revealable reveal-by-right">
              <div class="alert-content">
                <p>
                  Estas skills son las que más utilizo mientras trabajo en proyectos
                  ${this.currentProfileData?.type.toString().toLowerCase()}. Pero eso no es todo.
                </p>
                <p>
                  Te invito a que visites mis otros perfiles profesionales y conozcas más sobre los proyectos en los
                  participé.
                </p>
                <p>Si tenes alguna duda contactame por mis redes, siempre estoy abierto para una charlar</p>
                <div class="alert-socialbar">
                  <v-social-icon
                    class="anim-social-icon revealable"
                    name="twitter"
                    url="https://twitter.com/_mauroalderete"
                    icon="${mdiTwitter}"
                  ></v-social-icon>
                  <div></div>
                  <v-social-icon
                    class="anim-social-icon revealable"
                    name="linkedin"
                    url="https://www.linkedin.com/in/mauroalderete/"
                    icon="${mdiLinkedin}"
                  ></v-social-icon>
                  <div></div>
                  <v-social-icon
                    class="anim-social-icon revealable"
                    name="github"
                    url="https://github.com/mauroalderete"
                    icon="${mdiGithub}"
                  ></v-social-icon>
                  <div></div>
                  <v-social-icon
                    class="anim-social-icon revealable"
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
                      <div class="project revealable reveal-by-down">
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
                            : html``}
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
                  <a
                    href="/profile/${this.currentProfileData?.type
                      .toString()
                      .toLowerCase()}/resumes/mauro-alderete-${this.currentProfileData?.type
                      .toString()
                      .toLowerCase()}.pdf"
                    target="_blank"
                    >DESCARGA MI CURRICULUM DE ${this.currentProfileData?.type.toString().toUpperCase()}</a
                  >
                </li>
              </ul>
            </div>
            <div class="socialbar">
              <v-social-icon
                class="anim-social-icon revealable"
                name="twitter"
                url="https://twitter.com/_mauroalderete"
                icon="${mdiTwitter}"
              ></v-social-icon>
              <div></div>
              <v-social-icon
                class="anim-social-icon revealable"
                name="linkedin"
                url="https://www.linkedin.com/in/mauroalderete/"
                icon="${mdiLinkedin}"
              ></v-social-icon>
              <div></div>
              <v-social-icon
                class="anim-social-icon revealable"
                name="github"
                url="https://github.com/mauroalderete"
                icon="${mdiGithub}"
              ></v-social-icon>
              <div></div>
              <v-social-icon
                class="anim-social-icon revealable"
                name="docker"
                url="https://hub.docker.com/u/mauroalderete"
                icon="${mdiDocker}"
              ></v-social-icon>
            </div>
          </section>
        </div>
      </div>
      <div class="upper" @click="${() => window.scrollTo({ top: 0, behavior: 'smooth' })}">
        <svg class="icon" viewBox="0 0 24 24">
          <path d="${mdiChevronUpCircle}" />
        </svg>
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

  private _reveal() {
    if (!this.shadowRoot) {
      return;
    }

    const elements = this.shadowRoot.querySelectorAll('.revealable') as unknown as Array<HTMLElement>;

    if (!elements) {
      return;
    }

    const windowHeight = window.innerHeight;
    const html = document.querySelector('html');
    if (!html) {
      return;
    }

    const heightVisible = parseFloat(getComputedStyle(html).fontSize) * 5;

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - heightVisible) {
        el.classList.add('reveal-active');
      }
    });
  }

  private _revealProfile() {
    if (!this.shadowRoot) {
      return;
    }

    const profileRevealable = this.shadowRoot.querySelector('.revealable');
    profileRevealable?.classList.add('reveal-active');
  }

  private _handleUpperButtonReveal() {
    const header = this.shadowRoot?.querySelector('.header');
    if (!header) {
      return;
    }
    const upper = this.shadowRoot?.querySelector('.upper');
    if (!upper) {
      return;
    }
    const html = document.querySelector('html');
    if (!html) {
      return;
    }

    const heightVisible = parseFloat(getComputedStyle(html).fontSize) * 5;

    const elementTop = header.getBoundingClientRect().bottom;
    if (elementTop < heightVisible) {
      upper.classList.add('reveal-active');
    } else {
      upper.classList.remove('reveal-active');
    }
  }

  private _handleTitleClick(profile: IProfile, e: Event) {
    const previousTitle = this.shadowRoot?.querySelector('.header-landscape-titles h2.active');
    if (previousTitle) {
      previousTitle.classList.remove('active');
    }

    console.log('title clicked');

    const title = e.target as HTMLHeadingElement;
    title.classList.add('active');

    const previousCard = this.shadowRoot?.querySelector('.header-landscape-card.active');
    previousCard?.classList.remove('active');

    const currentCard = this.shadowRoot?.querySelector(`#card-${profile.type}`);
    currentCard?.classList.add('active');

    this.currentProfileData = profile;
    if (this.currentProfileData) {
      this.currentSoftSkill = this.currentProfileData.softSkills[0];
    }

    const elements = this.shadowRoot?.querySelectorAll('.revealable') as Array<HTMLElement> | undefined;
    if (elements) {
      elements.forEach((element) => {
        element.classList.remove('reveal-active');
      });
    }

    this.updatedTasks.push(() => {
      this._revealProfile();
    });

    this.updatedTasks.push(() => {
      console.log('initializing masonry');
      const projects = this.shadowRoot?.querySelector('.projects');

      if (projects) {
        this.masonry = new Masonry(projects, {
          itemSelector: '.project',
          fitWidth: true,
        });
      }
    });

    this.requestUpdate();
  }

  private _handleCanPlay() {
    if (!this.video) {
      return;
    }

    if (this.video.readyState < this.video.HAVE_ENOUGH_DATA) {
      return;
    }

    this.isReadyToPlay = true;
  }
}
