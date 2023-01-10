import { createWebSocketStream, WebSocketServer } from 'ws';

import { httpServer } from './server';
import { HTTP_PORT, parseMessage, WS_PORT } from './utils/';
import { getMousePosition, MouseMoveOption } from "./components";

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: +WS_PORT });

export type DrawOption = 'draw_circle' | 'draw_rectangle' | 'draw_square';
export type CommandOption = DrawOption | MouseMoveOption | 'mouse_position' | 'prnt_scrn';
export type Message = { command: CommandOption; payload?: { x: number; y?: number } };

wss.on('connection', (ws) => {
  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', (msg) => {
    const parsedMsg = parseMessage(msg);
    (async () => {
      /*
      parsedMsg.coordinates &&
        (await mouseMove[parsedMsg.command as MouseMoveOption](parsedMsg.coordinates));
       */
      const mousePosition = await getMousePosition();
      duplex.write(mousePosition);
      // await drawSquare(200);
      // await drawCircle(200);
      // await drawRectangle(300, 150);
      // const shot = await makeScreenshot();
      // ws.send(`prnt_scrn ${shot}`);
      console.log(parsedMsg);
    })();

    duplex.on('error', (err) => {
      console.log(err.message);
    });
  });
});
