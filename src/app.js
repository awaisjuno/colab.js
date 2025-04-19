import { router } from './core/router.js';
import { render } from './core/viewEngine.js';

const mount = document.getElementById('app');

router.start(async (Component) => {
  mount.innerHTML = await render(Component);
});