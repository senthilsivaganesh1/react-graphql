import { createConnection } from "typeorm";
import { Hotel } from "./Hotel";
import * as dotenv from "dotenv";

dotenv.config();

createConnection({
    type:"postgres",
    url:process.env.postgres,
    ssl:true,
    entities:[Hotel],
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});