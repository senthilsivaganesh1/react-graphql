import { createConnection } from "typeorm";
import { Hotel } from "./Hotel";

createConnection({
    type:"postgres",
    url:"postgres://dbkyztfcakprkv:4bb9b385d7c5b1a3ad8fd78e7f26500f0207d42e367e5cd30f6298d7dd1bbf2d@ec2-54-147-93-73.compute-1.amazonaws.com:5432/de2pkfbunr66e3",
    ssl:true,
    entities:[Hotel],
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});