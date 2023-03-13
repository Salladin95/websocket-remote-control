import * as dotenv from 'dotenv';
dotenv.config();

const HTTP_PORT = process.env.HTTP_PORT ?? 4000;
const WS_PORT = process.env.WS_PORT ?? 8080;
const MODE = process.env.MODE;

export { HTTP_PORT, WS_PORT, MODE };
