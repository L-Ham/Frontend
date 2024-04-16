import {setupWorker} from 'msw/browser';
import {userHandlers} from './user.handlers.js';


export const worker = setupWorker(...userHandlers);
