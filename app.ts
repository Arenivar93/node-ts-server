import dotenv from 'dotenv';
dotenv.config();
import Server from './core/server';

const server = new Server();

server.listen();

