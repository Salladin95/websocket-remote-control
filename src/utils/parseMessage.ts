import { unexpectedMsg } from '.';
import { Message } from '..';

const parseMessage = (message: string): Message => {
  const arrMsg = message.split(' ');
  if (arrMsg.length !== 2) {
    throw new Error(unexpectedMsg);
  }
  const [command, coordinates] = arrMsg;

  if (isNaN(+coordinates)) {
    throw new Error(unexpectedMsg);
  }
  return { command, coordinates: +coordinates };
};

export default parseMessage;
