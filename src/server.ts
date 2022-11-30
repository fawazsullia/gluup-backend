import "reflect-metadata";
import { DataSource } from "typeorm";
import express from "express"
import { config } from "dotenv";


import {User} from "./entities/User.js";
import { AccessKey } from "./entities/AccessKey.js";
import { Domain } from "./entities/Domain.js";
import { Form } from "./entities/Form.js";
import { Submission } from "./entities/Submission.js";
import { baseConfig } from "./config.js";

config()
const app = express();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: baseConfig.host,
    port: baseConfig.port,
    username: baseConfig.username,
    password: baseConfig.password,
    database: baseConfig.database,
    synchronize: true,
    logging: true,
    entities: [User, AccessKey, Domain, Form, Submission],
    subscribers: [],
    migrations: [],
});

AppDataSource.initialize()
    .then(() => {
        app.listen(5000, ()=> console.log("Express started at port 5000"));
    })
    .catch((error) => console.log(error))

