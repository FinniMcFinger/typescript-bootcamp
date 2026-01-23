# REST API Practical Application Project

There are two projects captured within this. The first only creates some basic CRUD operations behind a REST interface. The second (found in the `securing-the-service` branch) deals with securing the REST interface.

## Libraries Implemented

All relevant libraries can be installed directly utilizing the `package.json` file. It contains all the libraries listed below. To install all required libraries, run `npm install` from within the `practical-application-rest-api` directory.

- typescript (dev)
- express
- @types/express (dev)
- typeorm
- rimraf (dev)
- npm-run-all (dev)
- tsc-watch (dev)
- dotenv
- winston
- pg
- reflect-metadata
- cors
- @types/cors
- body-parser

## Running the Application Locally

Looking at the [package.json](package.json) will show you that there is a script for running the server in dev mode, so you simply have to execute `npm run dev`. This will run the server locally with hot-reload. This hot-reload does not seem to work on `.env` config changes, unfortunately.

[server.ts](src/server.ts) contains the actual server definition. Within it are all the middleware and route definitions. Middlewares act like filters in Java parlance. Ordering is important to middlewares, less so for routes (though you still want your routes between any middleware that you want to run before or after).

Most query inputs are forced into `string` types. This could be handled better, but it's a training course, not production code.

[logger.ts](src/logger.ts) contains the logging utility definitions. Logs get output to the `/logs` directory, and they also print out to the console so long as your `NODE_ENV` isn't configured to be `production`.

All Typescript files are compiled to the `/dist` directory.

## Development Notes

The `dotenv` import and initialization needs to happen _before anything else_, so handle it at the entry point of the application, even before doing other imports. The database connection is not set up to use SSL, so if you attempt to connect to a database where SSL is enforced, it will not work.

### Configs

This is the list of all `.env` configs required. You will need to provide values for all of these to get the application to run. Some configs are prepopulated with acceptable defaults. You can change them at your will.

```dotenv
NODE_ENV=local
PORT=9000
LOG_LEVEL=debug

# database
DB_HOST=
DB_PORT=
DB_USER=
DB_PASS=
DB_NAME=

# lesson pagination
LESSON_PAGE_DEFAULT=0
LESSON_COUNT_DEFAULT=5
```

### Database

The database can be populated with valid test data using the Node script named `populate-db` via `npm run populate-db`. This will load data from the [preconfigured data file](./src/models/db-data.ts). You can alter this data to your needs or populate with your own data. You _may_ need to truncate database data in the event of inexplicable errors in the data population script. There is an additional script named `delete-db` that can be run to clear the database. This does not actually truncate the data, so if errors occur when trying to repopulate, you may need to truncate the tables directly.

## Endpoints

The following service endpoints exist. Note that this is not a comprehensive API. When in doubt, refer to the routes and middlewares declared in the [server definition](src/server.ts).

- `GET /` - sanity checking message
- `POST /api/courses` - create a course
- `GET /api/courses` - get all courses
- `GET /api/courses/:courseUrl` - get course by its URL
- `GET /api/courses/:courseId/lessons` - get lessons for a course, includes 0-indexed `page` and 1-indexed `count` query parameters
- `PATCH /api/courses/:courseId` - update a course
- `DELETE /api/courses/:courseId` - deletes a course and all its lessons


