import './style.css';

import { Router } from '@vaadin/router';

const routes = [
  {
    path: '/',
    component: 'home-page',
    action: async () => {
      await import('./components/egg-game-of-life/egg-game-of-life');
      await import('./components/v-social-icon/v-social-icon');
      await import('./components/v-button/v-button');
      await import('./pages/home-page/home-page');
    },
  },
  {
    path: '/profiles',
    redirect: '/profiles/frontend',
  },
  {
    path: '/profiles/:profile',
    component: 'profiles-page',
    action: async () => {
      await import('./components/profile-card/profile-card');
      await import('./components/v-social-icon/v-social-icon');
      await import('./components/v-button/v-button');
      await import('./pages/profiles-page/profiles-page');
    },
  },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);
