import { ContextState, State } from '../../state/state';

export class AnimationController {
  context?: AnimationContext;
  state?: State;

  constructor() {
    this.context = undefined;
    this.state = undefined;
  }

  public Start(shadowRoot: ShadowRoot) {
    console.log('AnimationController::Start::begin');
    this.context = new AnimationContext(shadowRoot);
    this.state = new MainTextAnimationState();
    this.state.Entry(this.context);
  }
}

class AnimationContext extends ContextState {
  public shadowRoot: ShadowRoot;

  constructor(shadowRoot: ShadowRoot) {
    super();

    this.shadowRoot = shadowRoot;
  }

  public override Transition(animation: State): void {
    super.Transition(animation);
  }
}

class MainTextAnimationState extends State {
  constructor() {
    super();
  }

  public override Entry(context: ContextState): void {
    super.Entry(context);

    const elements = (<AnimationContext>this.context).shadowRoot.querySelectorAll(
      '.content *'
    ) as NodeListOf<HTMLElement>;

    elements.forEach((e) => {
      e.classList.add('anim-content');
    });

    const last = elements[elements.length - 1];

    Promise.all(last.getAnimations().map((a) => a.finished)).then(() => this.Exit(new SocialAnimationState()));
  }

  public override Exit(animation: State): void {
    super.Exit(animation);
  }
}

class SocialAnimationState extends State {
  constructor() {
    super();
  }

  public override Entry(context: ContextState): void {
    super.Entry(context);

    const elements = (<AnimationContext>this.context).shadowRoot.querySelectorAll(
      '.socialbar app-social-icon'
    ) as NodeListOf<HTMLElement>;

    elements.forEach((e) => {
      e.classList.add('anim-social-icon');
    });

    const last = elements[elements.length - 1];

    Promise.all(last.getAnimations().map((a) => a.finished)).then(() =>
      this.Exit(new NextButtonFadeinAnimationState())
    );
  }

  public override Exit(animation: State): void {
    super.Exit(animation);
  }
}

class NextButtonFadeinAnimationState extends State {
  constructor() {
    super();
  }

  public override Entry(context: ContextState): void {
    super.Entry(context);

    const button = (<AnimationContext>this.context).shadowRoot.querySelector('.next .button');

    if (!button) {
      return;
    }

    button.classList.add('fadein-next-button');

    Promise.all(button.getAnimations().map((a) => a.finished)).then(() =>
      this.Exit(new NextButtonPulsateAnimationState())
    );
  }

  public override Exit(animation: State): void {
    super.Exit(animation);
  }
}

class NextButtonPulsateAnimationState extends State {
  constructor() {
    super();
  }

  public override Entry(context: ContextState): void {
    super.Entry(context);

    const ring = (<AnimationContext>this.context).shadowRoot.querySelector('.next .button .ring');

    if (!ring) {
      return;
    }

    ring?.classList.add('pulsate-next-button');

    const button = (<AnimationContext>this.context).shadowRoot.querySelector('.next .button');

    if (!button) {
      return;
    }

    button.addEventListener('mouseover', () => {
      ring?.classList.remove('pulsate-next-button');
    });

    button.addEventListener('mouseleave', () => {
      ring?.classList.add('pulsate-next-button');
    });
  }
}
