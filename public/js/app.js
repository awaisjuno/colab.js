import routes from './routes.js';

const app = document.getElementById('app');

function parseRoute(url) {
  const pathSegments = url.split('/').filter(Boolean);

  for (const route of routes) {
    const routeSegments = route.path.split('/').filter(Boolean);

    if (routeSegments.length !== pathSegments.length) continue;

    const params = {};
    let isMatch = true;

    for (let i = 0; i < routeSegments.length; i++) {
      if (routeSegments[i].startsWith(':')) {
        const paramName = routeSegments[i].slice(1);
        params[paramName] = decodeURIComponent(pathSegments[i]);
      } else if (routeSegments[i] !== pathSegments[i]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      return { route, params };
    }
  }

  return null;
}

function interpolate(template, params) {
  return template.replace(/{{(.*?)}}/g, (_, key) => params[key.trim()] || '');
}

function setSEO(seo = {}, params = {}) {
  const interpolated = {
    title: interpolate(seo.title || '', params),
    description: interpolate(seo.description || '', params),
    keywords: interpolate(seo.keywords || '', params),
    image: interpolate(seo.image || '', params),
  };

  document.title = interpolated.title;

  const updateMeta = (name, content) => {
    if (!content) return;
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  updateMeta('description', interpolated.description);
  updateMeta('keywords', interpolated.keywords);
  updateMeta('og:image', interpolated.image);
}

function navigateTo(url) {
  const parsed = new URL(url, window.location.origin);
  history.pushState(null, '', parsed.pathname);
  router();
}

async function router() {
  const match = parseRoute(window.location.pathname);

  if (match) {
    const { route, params } = match;
    const components = route.components || (route.component ? [route.component] : []);
    const rendered = await Promise.all(
      components.map(component => component({ params, seo: route.seo }))
    );
    app.innerHTML = rendered.join('\n');
    setSEO(route.seo, params);
  } else {
    app.innerHTML = `<h1>404 - Not Found</h1>`;
    setSEO({
      title: '404 Not Found',
      description: 'The page you are looking for does not exist.',
    });
  }
}

window.addEventListener('popstate', router);

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-link]');
  if (link && link.href) {
    e.preventDefault();
    navigateTo(link.href);
  }
});

router();
