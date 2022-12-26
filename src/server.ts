import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { resolve, dirname } from 'path';

export const httpServer = createServer((req, res) => {
  const __dirname = resolve(dirname(''));
  const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);

  (async () => {
    try {
      const content = await readFile(file_path);
      res.writeHead(200);
      res.end(content);
    } catch (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
    }
  })();
});
