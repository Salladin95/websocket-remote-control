import { Button, mouse, Point, straightTo } from '@nut-tree/nut-js';

const drawCircle = async (radius: number) => {
  const step = 0.05;
  const { x: currentX, y: currentY } = await mouse.getPosition();
  const centerX = currentX + radius;
  const centerY = currentY;
  await mouse.pressButton(Button.LEFT);

  for (let i = 0; i <= 2 * Math.PI; i += step) {
    const x = centerX - radius * Math.cos(i);
    const y = centerY - radius * Math.sin(i);

    await mouse.move(straightTo(new Point(x, y)));
  }
  await mouse.releaseButton(Button.LEFT);
};

export default drawCircle;
