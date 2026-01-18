# REST API Practical Application Project

## Libraries Implemented

- typescript (dev)
- express
- TypeORM
- rimraf (dev)
- npm-run-all (dev)
- tsc-watch (dev)
- dotenv
- winston

## Running the Application Locally

Looking at the [package.json](package.json) will show you that there is a script for running the server in dev mode, so you simply have to execute `npm start-server-dev`. This will run the server locally with hot-reload. This hot-reload does not seem to work on `.env` config changes, unfortunately.

## Development Notes

The `dotenv` import and initialization needs to happen _before anything else_, so handle it at the entry point of the application, even before doing other imports.
