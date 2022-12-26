import { createWebSocketStream, WebSocketServer } from 'ws';
import { left, mouse } from '@nut-tree/nut-js';

import { httpServer } from './server';
import { HTTP_PORT, parseMessage, WS_PORT } from './utils/';

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: +WS_PORT });

export type Message = { command: string; coordinates: number };

wss.on('connection', (ws) => {
  const duplex = createWebSocketStream(ws, { encoding: 'utf8' });

  duplex.on('data', (msg) => {
    const parsedMsg = parseMessage(msg);
    (async () => {
      await mouse.move(left(100));
      console.log(parsedMsg);
    })();
  });
  ws.send('something eee');
});
