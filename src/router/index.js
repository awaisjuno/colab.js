class Router {
    constructor() {
      this.routes = {};
      this.currentRoute = '';
      window.addEventListener('hashchange', () => this.routeChanged());
    }
  
    addRoute(path, component) {
      this.routes[path] = component;
    }
  
    routeChanged() {
      const path = window.location.hash.slice(1);
      const component = this.routes[path] || '404 Not Found';
      this.render(component);
    }
  
    render(component) {
      document.getElementById('app').innerHTML = component;
    }
  }
  
  export default new Router();