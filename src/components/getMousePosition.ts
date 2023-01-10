import { mouse } from '@nut-tree/nut-js';

const getMousePosition = async (): Promise<string> => {
  const { x, y } = await mouse.getPosition();
  return `mouse_position ${x},${y}`;
};

export default getMousePosition;
