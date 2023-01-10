import { down, left, mouse, right, up } from '@nut-tree/nut-js';

export type MouseMoveOption = 'mouse_up' | 'mouse_down' | 'mouse_left' | 'mouse_right';
export type MouseMoveFN = (cord: number) => Promise<void>;
export type MouseMove = Record<MouseMoveOption, MouseMoveFN>;

const mouseMove: MouseMove = {
  mouse_up: async (cord: number) => {
    await mouse.move(up(cord));
  },
  mouse_down: async (cord: number) => {
    await mouse.move(down(cord));
  },
  mouse_left: async (cord: number) => {
    await mouse.move(left(cord));
  },
  mouse_right: async (cord: number) => {
    await mouse.move(right(cord));
  },
};

export default mouseMove;
