import redis from 'redis';
import { promisify } from 'util';

// redis setup
const client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
/* eslint-disable no-console */
client.on('connect', () => {
  console.log('Redis client connected');
});
client.on('error', (err) => {
  console.log(`Something went wrong ${err}`);
});
export const redisdb = {
  set: promisify(client.set).bind(client),
  get: promisify(client.get).bind(client),
  scan: promisify(client.scan).bind(client),
  delete: promisify(client.del).bind(client),
};

export default client;
