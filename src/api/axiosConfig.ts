import axios from 'axios';

const api = axios.create({
  baseURL: '/api/',
});

export const EndPoints = {
  todos: '/todos',
  users: '/users',
} as const;

export type EndPointsKeys = keyof typeof EndPoints;
