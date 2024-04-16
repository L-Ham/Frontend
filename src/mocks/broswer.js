import {setupWorker} from 'msw/browser';
import {userHandlers} from './user.handlers.js';
import {subredditHandlers} from './subreddit.handlers.js';

export const worker = setupWorker(...userHandlers, ...subredditHandlers);
