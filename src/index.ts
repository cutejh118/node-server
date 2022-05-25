import Koa from "koa";
import koaBody from "koa-body";
import appDataSource from "./connection/connect";
import router from "./api";

const app = new Koa();

appDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
});

app.use(koaBody({ multipart: true }));
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log("heurm server is listening to port 4000");
});
