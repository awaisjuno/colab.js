const About = (params) => {
    return `
      <div>
        <h1>Welcome to the About US Page!</h1>
        <p>This is the homepage of your custom SPA (Single Page Application).</p>
        <p>The dynamic 'id' from the URL is: ${params.id}</p>
      </div>
    `;
  };
  
  // SEO-related metadata for the page
  export const seo = {
    title: 'Home Page - My SPA',
    description: 'This is the About page of our SPA built with custom JavaScript.',
    keywords: 'home, SPA, custom, JavaScript'
  };
  
  // Exporting the Home function as default, along with SEO data
  export default About;