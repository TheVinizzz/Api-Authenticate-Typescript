module.exports = {
    "type": "postgres",
    "host": process.env.API_ROUTE_AUTHENTICATE,
    "port": process.env.API_ROUTE_PORT,
    "username": process.env.API_USER,
    "password": process.env.API_PASSWORD,
    "database": process.env.API_DATABASE,
    "entities": [
       "src/app/models/*.ts"
    ],
    "migrations": [
        "src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/database/migrations"
    }
}