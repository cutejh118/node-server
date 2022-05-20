import { Context } from "koa";
import { DataSource } from "typeorm";
import api from "./api";
import { appDataSource } from "./connection/connect";
import Koa from "koa";
import Router from "koa-router";
import koaBody from "koa-body";


const app = new Koa();
const router = new Router();

appDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
});

app.use(koaBody({ multipart: true }));

router.use("/api", api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log("heurm server is listening to port 4000");
});
