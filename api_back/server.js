import express from "express";
import {fileURLToPath} from "url";
import path from "path";
import 'dotenv/config';

import {PORT} from "./config/index.js";
import "./config/database/db.js";
import router from "./routes/index.js";
import { chekUser } from "./middleware/auth.middleware.js";


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.get("*", chekUser);

app.use(router);

app.listen(PORT, ()=>{
    console.log(`listening at : http://localhost:${PORT}`);
})

