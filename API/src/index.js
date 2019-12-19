import app from "./app";

/**
 * If you need a database, you can set the basics
 * in this Path "./config/database"
 * import db from './config/database';
 */

 /**
  * Port to access the API
  * "process.env.PORT" is a Enviroment variable
  * stored in the docker-compose.
  */
const port = process.env.PORT || "5000";

/**
 * Bootstrap the application. Start express.
 */
const main = async () => {
  try {
    app.listen(port, () => {
      console.log(`Listening to requests on http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

main();