export abstract class ContextState {
  animationState?: State;

  public Transition(animation: State) {
    this.animationState = animation;
    this.animationState.Entry(this);
  }
}

export abstract class State {
  context?: ContextState;

  public Entry(context: ContextState): void {
    this.context = context;
  }

  public Exit(animation: State): void {
    this.context?.Transition(animation);
  }
}
