import('./start.js');

// ---------------------------
// cli/start.js
// ---------------------------
import { exec } from 'child_process';

exec('npx live-server public --entry-file=index.html --port=3000', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  console.log(stdout);
  if (stderr) console.error(stderr);
});
