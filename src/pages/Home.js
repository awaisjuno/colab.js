const Home = () => {
    return `
      <div>
        <h1>Welcome to the Home Page!</h1>
        <p>This is the homepage of your custom SPA (Single Page Application).</p>
      </div>
    `;
  };
  
  // SEO-related metadata for the page
  export const seo = {
    title: 'Home Page - My SPA',
    description: 'This is the home page of our SPA built with custom JavaScript.',
    keywords: 'home, SPA, custom, JavaScript'
  };
  
  // Exporting the Home function as default, along with SEO data
  export default Home;