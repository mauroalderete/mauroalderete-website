import { css } from 'lit';

export const style = css`
  :host {
    --default-color: #8892b0;
    --default-color-title: #ccd6f6;
    --default-color-accent: #64ffda;
    --default-color-dark: #030303;
    --default-font: 'Montserrat', sans-serif;
    --default-weight: 300;
    --default-weight-title: 600;

    --default-fadeenterdown-offset: 0.1s;
    --default-fadeenterdown-duration: 0.3s;
    --default-fadeenterdown-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    --default-fadeenterdown-delay: 0.5s;
    --default-fadeenterdown-fill: forwards;
    --default-fadeenterdown-name: fadeEnterDown;

    color: var(--app-front-color, var(--default-color));
    font-family: var(--app-front-font, var(--default-font));
    font-weight: var(--app-front-weight, var(--default-weight));

    min-width: 100vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    background: rgb(56, 56, 56);
    background: -moz-radial-gradient(circle, rgba(56, 56, 56, 1) 0%, rgba(9, 9, 9, 1) 100%);
    background: -webkit-radial-gradient(circle, rgba(56, 56, 56, 1) 0%, rgba(9, 9, 9, 1) 100%);
    background: radial-gradient(circle, rgba(56, 56, 56, 1) 0%, rgba(9, 9, 9, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#383838",endColorstr="#090909",GradientType=1);
  }

  @keyframes fadeEnterDown {
    0% {
      opacity: 0.01;
      transform: translatey(20px);
    }
    100% {
      opacity: 100;
      transform: translatey(0px);
    }
  }

  .fadeEnterDown {
    opacity: 0;
    animation-duration: var(--default-fadeenterdown-duration);
    animation-timing-function: var(--default-fadeenterdown-function);
    animation-delay: var(--default-fadeenterdown-delay);
    animation-fill-mode: var(--default-fadeenterdown-fill);
    animation-name: var(--default-fadeenterdown-name);
  }

  .fadeEnterDown-1 {
    animation-delay: calc(var(--default-fadeenterdown-delay) + var(--default-fadeenterdown-offset));
  }

  .fadeEnterDown-2 {
    animation-delay: calc(var(--default-fadeenterdown-delay) + var(--default-fadeenterdown-offset) * 2);
  }

  .fadeEnterDown-3 {
    animation-delay: calc(var(--default-fadeenterdown-delay) + var(--default-fadeenterdown-offset) * 3);
  }

  .fadeEnterDown-4 {
    animation-delay: calc(var(--default-fadeenterdown-delay) + var(--default-fadeenterdown-offset) * 4);
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .content section.introduction {
    margin-left: 5em;
    margin-right: 5em;
    max-width: 50vw;
    align-self: center;
  }

  .content section.introduction .greeting h1 {
    font-weight: var(--app-front-weight, var(--default-weight));
    font-size: clamp(14px, 5vw, 18px);
    color: var(--app-front-color-accent, var(--default-color-accent));
  }

  .content section.introduction .name h1 {
    font-weight: var(--app-front-weight-title, var(--default-weight-title));
    font-size: clamp(40px, 8vw, 80px);
    color: var(--app-front-color-title, var(--default-color-title));
  }

  .content section.introduction .what-do h1 {
    font-weight: var(--app-front-weight-title, var(--default-weight-title));
    font-size: clamp(40px, 8vw, 80px);
    color: var(--app-front-color, var(--default-color));
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

    -webkit-filter: drop-shadow(20px 20px 5px rgba(1, 1, 1, 1));
    filter: drop-shadow(20px 20px 5px rgba(1, 1, 1, 1));

    opacity: 0;
    animation-duration: 10s, 6s;
    animation-timing-function: var(--default-fadeenterdown-function), ease-in-out;
    animation-delay: var(--default-fadeenterdown-delay), 0s;
    animation-fill-mode: var(--default-fadeenterdown-fill);
    animation-iteration-count: 1, infinite;
    animation-name: var(--default-fadeenterdown-name), picture-float;
  }

  .content .side .callaction {
    margin-bottom: 4em;
    justify-content: center;
    align-items: center;

    display: flex;
    flex-direction: row;
  }

  .content .side .callaction button {
    height: 2.5em;
    width: 8em;
    border-radius: 1em;
    border: none;
    font-size: 1.5em;

    margin-left: 0.2em;
    margin-right: 0.2em;

    box-shadow: 1px 1px 10px #aaa;
    transition: all 0.3s var(--default-fadeenterdown-function);
  }

  .content .side .callaction button:hover {
    cursor: pointer;

    box-shadow: 1px 1px 25px #fff;

    width: 9em;
    font-size: 2em;
  }

  .content .side .callaction button.outline {
    background-color: transparent;
    border-style: solid;
    border-color: var(--app-front-color-accent, var(--default-color-accent));
    border-width: 2px;
    color: var(--app-front-color-accent, var(--default-color-accent));
    font-weight: 600;
  }

  .content .side .callaction button.fill {
    background-color: var(--app-front-color-accent, var(--default-color-accent));
    border-style: none;
    color: var(--app-front-color-dark, var(--default-color-dark));
    font-weight: 600;
  }

  section.profiles {
    flex-grow: 1;
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

  @media (max-width: 870px) {
    .content section.introduction {
      max-width: 100%;
    }

    .content section.introduction {
      margin-right: 5em;
    }

    .content .picture {
      display: none;
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
