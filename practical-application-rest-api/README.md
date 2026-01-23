# REST API Practical Application Project

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

Looking at the [package.json](package.json) will show you that there is a script for running the server in dev mode, so you simply have to execute `npm start-server-dev`. This will run the server locally with hot-reload. This hot-reload does not seem to work on `.env` config changes, unfortunately.

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
