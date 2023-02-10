export class Cronjob {
  job?: Job;
  options: ICronjobOptions;
  intents: number;
  timer?: NodeJS.Timer;
  isActive: boolean;
  isWorking: boolean;
  isInfinite: boolean;

  worker: ICronjobWorker;

  requestCancel: boolean;

  constructor(job: Job, options: ICronjobOptions) {
    this.job = job;

    this.options = options;

    this.intents = options.intents;
    this.isInfinite = this.options.intents <= 0;

    this.worker = {};

    this.isActive = false;
    this.isWorking = false;
    this.requestCancel = false;
  }

  public Start(worker: ICronjobWorker, now: boolean) {
    this.worker = worker;

    this.Restart(now);
  }

  public Restart(now: boolean) {
    this.isActive = false;
    clearInterval(this.timer);

    this.intents = this.options.intents;
    this.isInfinite = this.options.intents <= 0;
    this.isActive = true;
    this.isWorking = false;
    this.requestCancel = false;
    if (now) {
      this._handleTimer();
    } else {
      this._active();
    }
  }

  private _active() {
    this.timer = setInterval(() => this._handleTimer(), this.options.interval);
  }

  private _deactive() {
    clearInterval(this.timer);
  }

  public Stop() {
    this.isActive = false;

    this._deactive();
    if (this.worker.endly) {
      this.worker.endly();
    }
  }

  public Cancel() {
    this.requestCancel = true;
  }

  public IsCancelRequested(): boolean {
    return this.requestCancel;
  }

  private _handleTimer() {
    this._deactive();
    if (!this.isActive) {
      return;
    }
    if (!this.job) {
      return;
    }
    if (this.isWorking) {
      return;
    }

    this.isWorking = true;
    if (!this.isInfinite) {
      this.intents--;
    }

    this.job(() => this.IsCancelRequested())
      .then(() => {
        if (this.worker.resolve) {
          this.worker.resolve();
        }
        this.Stop();
      })
      .catch(() => {
        if (this.requestCancel) {
          if (this.worker.cancel) {
            this.worker.cancel();
            this.Stop();
            return;
          }
        }

        if (this.worker.reject) {
          this.worker.reject();
        }

        if (!this.isInfinite && this.intents <= 0) {
          this.Stop();
          return;
        }

        if (this.worker.next) {
          this.worker.next();
        }
      })
      .finally(() => {
        this.isWorking = false;
      });
    this._active();
  }
}

export type Job = (isCancelRequested: () => boolean) => Promise<void>;

export interface ICronjobOptions {
  interval: number;
  intents: number;
}

export interface ICronjobWorker {
  resolve?: () => void;
  reject?: () => void;
  next?: () => void;
  cancel?: () => void;
  endly?: () => void;
}
