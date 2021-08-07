const koa = require('koa');
const  Router = require("koa-router");
const koaGraphQl = require("koa-graphql");
import { ApolloServer } from "apollo-server-koa";
import { buildSchema } from 'type-graphql';
import './CreatePgConnection';
import HotelResolver from './HotelResolver';


// this is a comment
// const app = new koa();
// const resolvers = buildSchema({resolvers:[HotelResolver]})

async function main() {
const app = new koa();
const resolvers = await buildSchema({resolvers:[HotelResolver]});
const apolloServer = new ApolloServer({
    schema: resolvers,
    context:(req, res)=>({req, res})
});
const router = new Router();
router.all("/graphql", koaGraphQl({
    schema: resolvers,
    graphiql:true
}))
app.use(router.routes()).use(router.allowedMethods());
apolloServer.applyMiddleware({app, cors:false});
app.listen(process.env.PORT);
}

main();

