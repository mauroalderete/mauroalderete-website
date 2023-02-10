import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Cronjob } from '../../cronjob/cronjob';

/*eslint-disable */
import style from './profile-card.css?inline' assert { type: 'css' };
/*eslint-enable */

@customElement('profile-card')
export class ProfileCard extends LitElement {
  static styles = css`
    ${unsafeCSS(style)}
  `;

  @property()
  public type: string;

  @property()
  title: string;

  @property()
  image: string;

  @property()
  headline: string;

  container?: HTMLDivElement;
  video?: HTMLVideoElement;
  poster?: HTMLDivElement;

  isReadyToPlay: boolean;
  isActived: boolean;

  wasFirstUpdated: boolean;

  activationCronjob: Cronjob;
  videoplayCronjob: Cronjob;

  constructor() {
    super();

    this.type = '';
    this.title = '';
    this.image = '';
    this.headline = '';

    this.isReadyToPlay = false;
    this.isActived = false;

    this.wasFirstUpdated = false;

    this.activationCronjob = new Cronjob(
      (cancel) =>
        new Promise<void>((resolve, reject) => {
          if (!this.wasFirstUpdated) {
            reject();
            return;
          }

          if (!this.poster) {
            this.poster = this.shadowRoot?.querySelector('.background .poster') as HTMLDivElement;
            if (!this.poster) {
              reject();
              return;
            }
          }

          if (!this.container) {
            this.container = this.shadowRoot?.querySelector('.container') as HTMLDivElement;
            if (!this.container) {
              reject();
              return;
            }
          }

          if (!this.isActived) {
            reject();
            return;
          }

          if (cancel()) {
            reject();
            return;
          }

          this.poster.classList.add('hide');
          this.container.classList.add('active');

          resolve();
        }),
      { interval: 50, intents: 0 }
    );

    this.videoplayCronjob = new Cronjob(
      (cancel) =>
        new Promise<void>((resolve, reject) => {
          if (!this.video) {
            this.video = this.shadowRoot?.querySelector('.background video') as HTMLVideoElement;
            if (!this.video) {
              reject();
              return;
            }
          }

          if (!this.isActived) {
            reject();
            return;
          }

          if (!this.isReadyToPlay) {
            reject();
            return;
          }

          if (cancel()) {
            reject();
            return;
          }

          this.video.muted = true;
          this.video.play();
          resolve();
        }),
      { interval: 75, intents: 0 }
    );
  }

  protected firstUpdated(): void {
    this.container = this.shadowRoot?.querySelector('.container') as HTMLDivElement;

    this.video = this.shadowRoot?.querySelector('.background video') as HTMLVideoElement;
    this.video.addEventListener('canplay', () => this._handleCanPlay());

    this.poster = this.shadowRoot?.querySelector('.background .poster') as HTMLDivElement;

    this.wasFirstUpdated = true;
  }

  render() {
    return html`
      <div class="container">
        <div class="background">
          <video preload="auto" loop="" playsinline="" poster="/profile/background-generic.jpg">
            <source src="/profile/background-generic.mp4" type="video/mp4" />
          </video>
          <div class="poster"></div>
        </div>
        <div class="title">${this.title}</div>
        <div class="headline">${this.headline}</div>
        <div class="image">
          <svg class="icon ${this.type}" viewBox="0 0 24 24">
            <path d="${this.image}" />
          </svg>
        </div>
      </div>
    `;
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

  public Active() {
    this.isActived = true;

    // with now produce next errors
    // sometimes: when refresh continuesly
    // DOMException: Failed to execute 'define' on 'CustomElementRegistry': the name "profile-card" has already been used with this registry
    // always:
    // The card appear visible without any delay and any animation
    // This is caused by the class was assigned to when all DOM of doument is updated. Wethever, it does not explain what happen with delays and duration motions.
    // I sugger use the Cronjob in now false and fix the interval according empricis tests.
    this.activationCronjob.Start({}, false);
    this.videoplayCronjob.Start({}, false);
  }

  public Inactive() {
    this.isActived = false;

    this.activationCronjob.Stop();
    this.videoplayCronjob.Stop();

    this.container?.classList.remove('active');

    this.video?.pause();
    if (this.video) {
      this.video.currentTime = 0;
    }

    this.poster?.classList.remove('hide');
  }
}
