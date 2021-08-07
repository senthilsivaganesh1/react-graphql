import { createConnection } from "typeorm";
import { Hotel } from "./Hotel";

createConnection({
    type:"postgres",
    url:process.env.DATABASE_URI,
    ssl:true,
    entities:[Hotel],
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});