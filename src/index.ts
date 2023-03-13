import { createWebSocketStream, WebSocketServer } from 'ws';
import { mouse } from '@nut-tree/nut-js';

import { httpServer } from './server';
import { HTTP_PORT, parseMessage, WS_PORT } from './utils/';
import { makeScreenshot } from './components';
import move from './components/move';

console.log(`Start static http server on the ${HTTP_PORT} port!`);
console.log(`Start websocket server on the ${WS_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: +WS_PORT });

wss.on('connection', (ws) => {
  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', (msg) => {
    const parsedMsg = parseMessage(msg);
    (async () => {
      if (parsedMsg.command === 'mouse_position') {
        const { x, y } = await mouse.getPosition();
        duplex.write(`mouse_position ${x},${y}`);
      } else if (parsedMsg.command === 'prnt_scrn') {
        const shot = await makeScreenshot();
        duplex.write(`prnt_scrn ${shot}`);
      } else {
        if (parsedMsg.payload) {
          await move[parsedMsg.command](parsedMsg.payload);
        }
        duplex.write(parsedMsg.command);
      }
    })();

    duplex.on('error', (err) => {
      console.log(err.message);
    });
  });
  process.on('SIGINT', () => {
    process.stdout.write('Closing websocket...\n');
    wss.close();
    process.exit(0);
  });
});
