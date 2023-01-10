import { mouse, Region, screen } from '@nut-tree/nut-js';
import { imageToJimp } from '@nut-tree/nut-js/dist/lib/provider/io/imageToJimp.function';

const makeScreenshot = async () => {
  const square = 200;
  const { x, y } = await mouse.getPosition();
  const width = await screen.width();
  const height = await screen.height();
  const currentX = Math.min(Math.max(0, x - 100), width);
  const currentY = Math.min(Math.max(0, y - 100), height);

  try {
    const screenShot = await screen.grabRegion(new Region(currentX, currentY, square, square));
    const jimp = imageToJimp(screenShot);
    const buff = await jimp.getBufferAsync('image/png');
    return buff.toString('base64');
  } catch (err) {
    console.log(err);
  }
};

export default makeScreenshot;
