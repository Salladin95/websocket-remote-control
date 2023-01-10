import { Button, down, left, mouse, right, up } from '@nut-tree/nut-js';

const drawRectangle = async (width: number, length: number) => {
  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(width));
  await mouse.move(down(length));
  await mouse.move(left(width));
  await mouse.move(up(length));
  await mouse.releaseButton(Button.LEFT);
};

export default drawRectangle;
