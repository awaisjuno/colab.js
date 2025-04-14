import Home from './components/Home.js';
import About from './components/About.js';

const routes = [
  {
    path: '/',
    component: Home,
    seo: {
      title: 'Home Page',
      description: 'Welcome to the homepage.',
      keywords: 'home,spa,vanilla js',
      image: 'https://example.com/home.jpg'
    }
  },
  {
    path: '/about/:id',
    component: About,
    seo: {
      title: 'About Us',
      description: 'Learn more about us.',
      keywords: 'about,company,info',
      image: 'https://example.com/about.jpg'
    }
  },

];

export default routes;
