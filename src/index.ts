import playerData from "./api";
import appDataSource from "./connection/connect";
import Koa from "koa";
import Router from "koa-router";
import koaBody from "koa-body";

const app = new Koa();
const router = new Router();

appDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
});

router.use("/playerData", playerData.routes());

app.use(koaBody({ multipart: true }));
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log("heurm server is listening to port 4000");
});
