import Home from './components/Home.js';
import About from './components/About.js';
import Header from './components/Header.js';

const routes = [
  {
    path: '/',
    components: [Header, Home],
    seo: {
      title: 'Home Page',
      description: 'Welcome to the homepage.',
      keywords: 'home,spa,vanilla js'
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
  }
];

export default routes;
