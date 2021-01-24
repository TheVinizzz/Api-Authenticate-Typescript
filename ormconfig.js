console.log('process.env.DATABASEE_URL :>> ', process.env.API_ROUTE_AUTHENTICATE)

module.exports = {
    "type": "postgres",
    "host": process.env.API_ROUTE_AUTHENTICATE,
    "port": process.env.API_ROUTE_PORT,
    "username": process.env.API_USER,
    "password": process.env.API_PASSWORD,
    "database": process.env.API_DATABASE,
    "entities": [
       "./dist/app/models/**/*{.ts,.js}"
    ],
    "migrations": [
        "./dist/database/migrations/**/*{.ts,.js}"
    ],
    "cli": {
        "migrationsDir":[
            "src/database/migrations/"
          ],
          "entitiesDir": "src/app/models"
    }
}