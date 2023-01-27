import { describe, it, expect } from 'vitest';
import { setupCounter } from './counter';

describe('Counter', () => {
  it('should initialize a counter button', () => {
    const button: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');

    setupCounter(button);

    expect(button.innerHTML).toEqual('count is 0');
  });

  it('should increase the counter', () => {
    const button: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');

    setupCounter(button);

    button.click();

    expect(button.innerHTML).toEqual('count is 1');
  });
});
