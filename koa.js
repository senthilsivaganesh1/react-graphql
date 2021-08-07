const koa = require("koa");
const app = new koa();

app.use(context => {
    context.response.body = "something";
})
app.listen(3001);