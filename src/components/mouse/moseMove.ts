import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { FnWithPayload } from '../contracts';

export type MouseMoveOption = 'mouse_up' | 'mouse_down' | 'mouse_left' | 'mouse_right';
export type MouseMove = Record<MouseMoveOption, FnWithPayload>;

const mouseMove: MouseMove = {
  mouse_up: async ({ x }) => {
    await mouse.move(up(x));
  },
  mouse_down: async ({ x }) => {
    await mouse.move(down(x));
  },
  mouse_left: async ({ x }) => {
    await mouse.move(left(x));
  },
  mouse_right: async ({ x }) => {
    await mouse.move(right(x));
  },
};

export default mouseMove;
