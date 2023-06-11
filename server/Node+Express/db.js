const Sequelize = require("sequelize");

module.exports = new Sequelize(
    process.env.POSTGRES_DB_NAME, // Database name
    process.env.POSTGRES_DB_USER, // Database user
    process.env.POSTGRES_DB_PASSWORD, // Database password
    {
        dialect: "postgres", // Database dialect
        host: process.env.POSTGRES_DB_HOST, // Database host
        port: process.env.POSTGRES_DB_PORT, // Database port
    }
);
