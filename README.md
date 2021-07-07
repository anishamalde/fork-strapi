# ANISHA-STRAPI-BLOG

A Demo of a Strapi app connected to a React Front-end using GraphQL.

### To get started

(This only needs to be done once on initial set-up)

- Install lerna globally. Lerna allows us to managing multi-package repositories with git and npm.

`npm install --global lerna`

- Copy the .env.example files in each folder into their own .env files

- Install Postgresql and PgAdmin locally. This is the chosen Database management system and will be used instead of the default file system that sits within Strapi to allow local development.

[How to install Postgresql](https://www.postgresql.org/download/macosx/)

- Create a new table in Postgres called `strapi` and update the [.env](/packages/strapi/.env) with your username and password

## Running the application

- Install the global dependencies by running:

`lerna bootstrap`

- To start the development environment run:

`yarn develop`

This will spin up the Strapi environment and the Frontend React repositary.

- For a production build and start run:

`yarn build` && `yarn start`
