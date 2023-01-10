import { drawCircle, drawRectangle, drawSquare } from '../index';
import { FnWithPayload } from '../contracts';

export type DrawOption = 'draw_circle' | 'draw_rectangle' | 'draw_square';

const drawer: Record<DrawOption, FnWithPayload> = {
  draw_square: async ({ x }) => {
    await drawSquare(x);
  },
  draw_rectangle: async ({ x, y }) => {
    if (y) {
      await drawRectangle(x, y);
    }
  },
  draw_circle: async ({ x }) => {
    await drawCircle(x);
  },
};

export default drawer;
