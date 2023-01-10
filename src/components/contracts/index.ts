import { DrawOption } from '../draw';
import { MouseMoveOption } from '../mouse/moseMove';

export type CommandOption = DrawOption | MouseMoveOption | 'mouse_position' | 'prnt_scrn';
export type MessagePayload = { x: number; y?: number };
export type Message = { command: CommandOption; payload?: MessagePayload };
export type FnWithPayload = (payload: MessagePayload) => Promise<void>;
