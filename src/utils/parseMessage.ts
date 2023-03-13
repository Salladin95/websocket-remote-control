import { unexpectedMsg } from '.';
import { CommandOption, Message } from '../components/contracts';

const parseMessage = (message: string): Message => {
  const arrMsg = message.split(' ');
  console.log(arrMsg);
  if (arrMsg.length === 2) {
    const [command, x] = arrMsg;
    if (isNaN(+x)) {
      // throw new Error(unexpectedMsg);
    }
    return { command: command as CommandOption, payload: { x: +x } };
  } else if (arrMsg.length === 3) {
    const [command, x, y] = arrMsg;
    if (isNaN(+x) || isNaN(+y)) {
      // throw new Error(unexpectedMsg);
    }
    return { command: command as CommandOption, payload: { x: +x, y: +y } };
  } else if (arrMsg.length === 1) {
    return { command: arrMsg[0] as CommandOption };
  }
  throw new Error(unexpectedMsg);
};

export default parseMessage;
