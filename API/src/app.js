import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

/**
 * Initialize CORS as Middleware
 */
app.use(cors());

/**
 * Tell the bodyparser middleware to accept more data
 * to support JSON-encoded bodies, you can set a different
 * size for your requests.
 */
app.use(bodyParser.json({ limit: '2mb' }));
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ limit: '2mb', extended: false }));

/**
 * Routes:
 * This route exist only to check the health status of the api
 */
app.use('/health-status', (_, res) => res.sendStatus(200));

/**
 * Example of new route
 * app.use('/newCrud', require('./routes/crud'));
 * In "./routes/crud" you can do all the actions for this
 * new route.
 */

export default app;