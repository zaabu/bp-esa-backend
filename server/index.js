/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
import express from 'express';
import HTTP from 'http';
import socket from 'socket.io';
import logger from 'morgan';
import dotenv from 'dotenv';
import '@babel/polyfill';
import bodyParser from 'body-parser';
import ms from 'ms';
import path from 'path';
import { setAppRoot } from './utils/helpers';
import env from './validator';
import routes from './routes';
// eslint-disable-next-line import/no-cycle
import worker from './jobs/worker';

// const { envVariables, validateEnvironmentVars } = validator;
dotenv.config();
setAppRoot(path.join(__dirname, '../'));
// Set up the express app
const app = express();
const http = HTTP.Server(app);
export const io = socket(http);

// Log requests to the console.
app.use(logger('dev'));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,authorization');
  next();
});

routes(app);

// validateEnvironmentVars(envVariables);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

const port = parseInt(env.PORT, 10) || 8000;
app.set('port', port);

// Start worker
worker.init();

http.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${app.get('port')}`);
  // eslint-disable-next-line no-console
  console.log(`Timer Interval is set to ${env.TIMER_INTERVAL}`);
  setInterval(() => worker.exec(), ms(env.TIMER_INTERVAL || '1d'));
});

export default app;
