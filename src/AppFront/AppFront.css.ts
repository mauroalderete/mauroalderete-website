import { css } from 'lit';

export const style = css`
  :host {
    --inner-primary-text-color: var(--primary-text-color, #ccd6f6);
    --inner-secondary-text-color: var(--secondary-text-color, #8892b0);
    --inner-black-text-color: var(--black-text-color, #030303);
    --inner-primary-color: var(--primary-color, #64ffda);

    --inner-font: var(--font, 'Montserrat', sans-serif);
    --inner-font-normal-weight: var(--font-normal-weight, 300);
    --inner-font-bold-weight: var(--font-bold-weight, 600);

    --inner-primary-background-color: var(--primary-background-color, rgba(56, 56, 56, 1));
    --inner-secondary-background-color: var(--secondary-background-color, rgba(9, 9, 9, 1));

    --inner-fadeUp-offset: 0.1s;
    --inner-fadeUp-duration: 0.3s;
    --inner-fadeUp-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    --inner-fadeUp-delay: 0.5s;
    --inner-fadeUp-fill: forwards;
    --inner-fadeUp-name: fadeUp;

    min-width: 100vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    background: rgb(56, 56, 56);
    background: -moz-radial-gradient(
      circle,
      var(--inner-primary-background-color) 0%,
      var(--inner-secondary-background-color) 100%
    );
    background: -webkit-radial-gradient(
      circle,
      var(--inner-primary-background-color) 0%,
      var(--inner-secondary-background-color) 100%
    );
    background: radial-gradient(
      circle,
      var(--inner-primary-background-color) 0%,
      var(--inner-secondary-background-color) 100%
    );

    font: var(--inner-font);
    font-weight: var(--inner-font-normal-weight);
    color: var(--inner-secondary-text-color);
  }

  @keyframes fadeUp {
    0% {
      opacity: 0.01;
      transform: translatey(20px);
    }
    100% {
      opacity: 100;
      transform: translatey(0px);
    }
  }

  .fadeUp {
    opacity: 0;
    animation-duration: var(--inner-fadeUp-duration);
    animation-timing-function: var(--inner-fadeUp-function);
    animation-delay: var(--inner-fadeUp-delay);
    animation-fill-mode: var(--inner-fadeUp-fill);
    animation-name: var(--inner-fadeUp-name);
  }

  .fadeUp-1 {
    animation-delay: calc(var(--inner-fadeUp-delay) + var(--inner-fadeUp-offset));
  }

  .fadeUp-2 {
    animation-delay: calc(var(--inner-fadeUp-delay) + var(--inner-fadeUp-offset) * 2);
  }

  .fadeUp-3 {
    animation-delay: calc(var(--inner-fadeUp-delay) + var(--inner-fadeUp-offset) * 3);
  }

  .fadeUp-4 {
    animation-delay: calc(var(--inner-fadeUp-delay) + var(--inner-fadeUp-offset) * 4);
  }

  .content {
    flex-grow: 2;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }

  .content section.introduction {
    margin-left: 5em;
    margin-right: 5em;
    max-width: 50vw;
    align-self: center;
  }

  .content section.introduction .greeting h1 {
    font-weight: var(--inner-font-normal-weight);
    font-size: clamp(14px, 5vw, 18px);
    color: var(--inner-primary-color);
  }

  .content section.introduction .name h1 {
    font-weight: var(--inner-font-bold-weight);
    font-size: clamp(40px, 8vw, 80px);
    line-height: 1em;
    color: var(--inner-primary-text-color);
  }

  .content section.introduction .what-do h1 {
    font-weight: var(--inner-font-bold-weight);
    font-size: clamp(40px, 8vw, 80px);
    color: var(--inner-secondary-text-color);
    line-height: 1em;
  }

  .content section.introduction .description {
    font-size: clamp(14px, 5vw, 18px);
  }

  @keyframes picture-float {
    0% {
      transform: translatey(10px);
    }
    50% {
      transform: translatey(-10px);
    }
    100% {
      transform: translatey(10px);
    }
  }

  .content .side {
    margin-left: 5em;
    margin-right: 5em;
    display: flex;
    width: clamp(600px, 30vw, 30vw);

    flex-direction: column;
  }

  .content .side .picture {
    flex-grow: 2;
    background-image: url('../public/space-invaders.svg');
    background-size: 100% 80%;
    background-repeat: no-repeat;
    background-position: center center;

    -webkit-filter: drop-shadow(15px 15px 5px var(--inner-primary-color));
    filter: drop-shadow(15px 15px 5px var(--inner-primary-color));

    opacity: 0;
    animation-duration: 10s, 6s;
    animation-timing-function: var(--inner-fadeUp-function), ease-in-out;
    animation-delay: var(--inner-fadeUp-delay), 0s;
    animation-fill-mode: var(--inner-fadeUp-fill);
    animation-iteration-count: 1, infinite;
    animation-name: var(--inner-fadeUp-name), picture-float;
  }

  .callaction {
    margin-bottom: 4em;
    justify-content: center;
    align-items: center;

    display: flex;
    flex-direction: row;
  }

  .callaction button {
    height: 2.5em;
    width: 8em;
    border-radius: 1em;
    border: none;

    font: var(--inner-font);
    font-weight: var(--inner-font-bold-weight);
    font-size: 1.5em;

    margin-left: 0.2em;
    margin-right: 0.2em;

    box-shadow: 1px 1px 10px #aaa;
    transition: all 0.3s var(--inner-fadeUp-function);
  }

  .callaction button:hover {
    cursor: pointer;

    box-shadow: 1px 1px 25px #fff;

    width: 9em;
    font-size: 2em;
  }

  .callaction button.outline {
    background-color: transparent;
    border-style: solid;
    border-color: var(--inner-primary-color);
    border-width: 2px;
    color: var(--inner-primary-color);
  }

  .callaction button.fill {
    background-color: var(--inner-primary-color);
    border-style: none;
    color: var(--inner-black-text-color);
  }

  .callaction-bottom {
    display: none;
  }

  section.profiles {
    flex-grow: 4;
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 1741px) {
    .content section.introduction .what-do h1 {
      font-size: clamp(25px, 8vw, 50px);
    }
  }

  @media (max-width: 1280px) {
    .content section.introduction .greeting h1 {
      font-size: clamp(12px, 5vw, 14px);
    }

    .content section.introduction .name h1 {
      font-size: clamp(36px, 10vw, 40px);
    }

    .content section.introduction .what-do h1 {
      font-size: clamp(36px, 8vw, 40px);
    }

    .content section.introduction {
      margin-right: 0em;
    }
    .content .picture {
      width: clamp(200px, 50vw, 300px);
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 1080px) {
    .content section.introduction .what-do h1 {
      font-size: clamp(25px, 8vw, 30px);
    }
  }

  @media (max-width: 870px) {
    .content section.introduction {
      max-width: 100%;
    }

    .content section.introduction {
      margin-right: 5em;
    }

    .content .side {
      display: none;
    }

    .callaction-bottom {
      display: flex;
      flex-grow: 1;
      margin-bottom: 0;
    }
  }

  @media (max-width: 595px) {
    .content section.introduction {
      margin-left: 3em;
      margin-right: 3em;
    }

    .content section.introduction .greeting h1 {
      font-size: clamp(9px, 5vw, 16px);
    }

    .content section.introduction .name h1 {
      font-size: clamp(16px, 8vw, 36px);
    }

    .content section.introduction .what-do h1 {
      font-size: clamp(16px, 8vw, 25px);
    }

    .content section.introduction .description {
      font-size: clamp(10px, 5vw, 16px);
    }
  }

  @media (max-width: 375px) {
    .content section.introduction {
      margin-left: 1em;
      margin-right: 1em;
    }
  }
`;
