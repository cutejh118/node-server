import { Context } from "koa";
import Router from "koa-router";
// import { appDataSource } from "../connection/connect";
// import Player from "../entity/player.entity";

    const api = new Router();
import playerctrl from "./players/players.controller";


export default api;
// api.post("/player", async (ctx: Context, next: any) => {
// (ctx.request.body);
  // const { playerName , height, weight, backNumber }
  // await appDataSource
  // .createQueryBuilder()
  // .insert()
  // .into(Player)
  // .values([
  //     { playerName: playerName,
  //     height: height,
  //     weight: weight,
  //     backNumber: backNumber
  //     }
  // ])
  // .execute();
  // ctx.body = res.json(data);
// });
//   const { playerName , height, weight, backNumber } = ctx.request.query;


