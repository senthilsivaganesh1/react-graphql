const koa = require("koa");
const pg = require("pg");
const{Pool} = require("pg");
const app = new koa();
//postgres://dbkyztfcakprkv:4bb9b385d7c5b1a3ad8fd78e7f26500f0207d42e367e5cd30f6298d7dd1bbf2d@ec2-54-147-93-73.compute-1.amazonaws.com:5432/de2pkfbunr66e3
const postgress = new Pool({
    connectionString : "postgres://dbkyztfcakprkv:4bb9b385d7c5b1a3ad8fd78e7f26500f0207d42e367e5cd30f6298d7dd1bbf2d@ec2-54-147-93-73.compute-1.amazonaws.com:5432/de2pkfbunr66e3",
    ssl:{
        rejectUnauthorized: false
    }
})

app.use(async context => {
    const data = await postgress.query("select * from csvdata_csv");
    context.response.body = data;
})
app.listen(3001);