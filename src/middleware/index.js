import promiseMiddleware from './promise';
import { thunk } from './thunk';

export const middleware = [
  thunk,
  promiseMiddleware
];
