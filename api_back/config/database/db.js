import mysql from "mysql2/promise";
import "dotenv/config";
import express from "express";

const app = express();

const { HOST_DB, DATABASE_NAME, USERNAME_DB, PASSWORD_DB } = process.env;

const pool = mysql.createPool({
    host: HOST_DB,
    user: USERNAME_DB,
    password: PASSWORD_DB,
    database: DATABASE_NAME,
    connectionLimit: 10000,
    waitForConnections: true,
    queueLimit: 0,
});

pool.getConnection().then( res => {
    console.log(`connection à la BDD --> ${res.config.database}`);
})

export default pool;