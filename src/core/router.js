import { routes as definedRoutes } from '../config/routes.js';

function parseUrl(url) {
  const [path, query] = url.split('?');
  return { path, query };
}

function extractParams(routePath, actualPath) {
  const routeSegments = routePath.split('/');
  const pathSegments = actualPath.split('/');
  let params = {};

  routeSegments.forEach((seg, i) => {
    if (seg.startsWith(':')) {
      params[seg.replace(':', '')] = pathSegments[i];
    }
  });

  return params;
}

function updateSEO(seo) {
  if (seo) {
    if (seo.title) {
      document.title = seo.title;
    }

    if (seo.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = seo.description;
    }
  }
}

export const router = {
  start: async (renderCallback) => {
    const loadRoute = async () => {
      const { path } = parseUrl(location.pathname);
      let match = definedRoutes.find(r => {
        const regex = new RegExp('^' + r.path.replace(/:\w+/g, '[^/]+') + '$');
        return regex.test(path);
      });

      if (match) {
        const params = extractParams(match.path, path);
        
        updateSEO(match.seo);

        const Component = match.component;
        renderCallback(() => Component(params));
      } else {
        try {
          const pagePath = `../pages${path.charAt(0) !== '/' ? '/' : ''}${path}.js`;
          const mod = await import(pagePath);

          updateSEO(mod.default.seo);

          renderCallback(mod.default);
        } catch {
          renderCallback(() => '<h1>404 Not Found</h1>');
        }
      }
    };

    window.addEventListener('popstate', loadRoute);

    document.body.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        history.pushState(null, '', e.target.href);
        loadRoute();
      }
    });

    loadRoute();
  }
};
