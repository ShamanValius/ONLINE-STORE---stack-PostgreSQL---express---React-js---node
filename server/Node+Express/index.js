require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const fileUpload = require("express-fileupload");
const path = require("path");
const APP_PORT = process.env.APP_PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static/DB_img")));
app.use(fileUpload({}));
app.use("/api", router);

// Обработка ошибок
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(APP_PORT, () =>
            console.log(`Server started on port ${APP_PORT}`)
        );
    } catch (e) {
        console.log(e);
    }
};

start();
