import { Context } from "koa";

const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx: Context, next: any) => {
  ctx.body = "홈";
});

// app.use((ctx: Context) => {
//   ctx.body = '2022년 5월 19일';
// });

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
