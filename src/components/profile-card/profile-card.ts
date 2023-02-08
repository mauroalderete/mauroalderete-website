import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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

  readyToPlay: boolean;
  isActived: boolean;

  wasFirstUpdated: boolean;

  pendingTaskQueue: Array<() => void>;

  constructor() {
    super();

    this.type = '';
    this.title = '';
    this.image = '';
    this.headline = '';

    this.readyToPlay = false;
    this.isActived = false;

    this.wasFirstUpdated = false;

    this.pendingTaskQueue = new Array<() => void>();
  }

  protected firstUpdated(): void {
    console.log('firstUpdated');

    this.container = this.shadowRoot?.querySelector('.container') as HTMLDivElement;
    console.log('aaa', this.container);

    this.video = this.shadowRoot?.querySelector('.background video') as HTMLVideoElement;
    this.video.addEventListener('canplay', () => this._handleCanPlay());

    this.poster = this.shadowRoot?.querySelector('.background .poster') as HTMLDivElement;

    this.wasFirstUpdated = true;
    this._processPendingTaskQueue();
  }

  protected updated(): void {
    console.log('updated', this.wasFirstUpdated);
    this._processPendingTaskQueue();
  }

  render() {
    return html`
      <div class="container">
        <div class="background">
          <video preload="auto" loop="" playsinline="" poster="/profiles/background-generic.jpg">
            <source src="/profiles/background-generic.mp4" type="video/mp4" />
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

  private _processPendingTaskQueue() {
    while (this.pendingTaskQueue.length > 0) {
      const task = this.pendingTaskQueue.pop();
      if (task) {
        task();
      }
    }
  }

  private _handleCanPlay() {
    console.log('_handlePlay');
    if (!this.video) {
      console.log('video not found');
      return;
    }

    if (this.video.readyState < this.video.HAVE_ENOUGH_DATA) {
      console.log('video not ready');
      return;
    }

    console.log('video redy: removing');
    this.video.removeEventListener('canplay', () => this._handleCanPlay());

    this.readyToPlay = true;
    if (this.isActived) {
      this.playVideo();
    }
  }

  private playVideo() {
    this.poster?.classList.add('hide');
    this.video?.play();
  }

  public Active() {
    this.isActived = true;

    if (!this.wasFirstUpdated) {
      this.pendingTaskQueue.push(() => {
        this._applyActive();
      });
    } else {
      this._applyActive();
    }
  }

  private _applyActive() {
    this.container?.classList.add('active');

    if (this.readyToPlay) {
      this.playVideo();
    }
  }

  public Inactive() {
    this.isActived = false;

    this.container?.classList.remove('active');

    if (this.readyToPlay) {
      this.video?.pause();
      if (this.video) {
        this.video.currentTime = 0;
      }
    }
    this.poster?.classList.remove('hide');
  }
}
