# Project informations

This server project was built using [Node](https://nodejs.org/en/). \
His construction language is [TypeScript](https://www.typescriptlang.org/pt/). \
Integration with database is done with [prisma](https://www.prisma.io/). \
Cors, Express, Joi and Pg are some of librarys that the project use to run.

## Database

To create the database is just configure the DATABASE_URL variable within .env file and run `npx prisma migrate dev` in terminal. 

This comand will create and populate de database, if not populate it, jus run `npm run prisma:seed`;

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the `production` mode.\
The aplication **runs by default** in http://localhost:4000 and show a console: "Server running in port: 4000"

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run dev`

Runs the app in the `development` mode.\
The aplication **runs by default** in http://localhost:4000 and show a console: "Server running in port: 4000"

## Running the project

Run npm i to install all the tools needed to run the application.

### Movies Route

**Post:** `/movie`

**Body:** `{   "name": "Glass Onion", "media_platform": "Netflix", "genre": "Mistery", "viewed":  false, "note": "" }`

**Get:** `/movie`

**Get:** `/movie/:movie_name`

**Patch:** `/movie`

**Body:**  `{  "name": "A Entidade",  "viewed": true,  "note":  "Bom filme"}`

**Delete:** `/movie`

**Headers:** `movie: A Entidade`

### Platforms Route

**Get:** `/platforms`
