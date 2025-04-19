import Home, { seo as homeSeo } from 'pages/Home.js';
import About, { seo as aboutSeo } from 'pages/About.js';

export const routes = [
  {
    path: '/',
    component: Home,
    seo: homeSeo
  },
  {
    path: '/about/:id',
    component: About,
    seo: aboutSeo
  }
];
