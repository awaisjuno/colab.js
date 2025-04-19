import { exec } from 'child_process';

exec('serve public -l 8080 -s', (err, stdout) => {
  if (err) console.error(err);
  else console.log('Server running on http://localhost:8080');
});
