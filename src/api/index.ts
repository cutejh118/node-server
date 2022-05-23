import Router from "koa-router";
import * as PlayerCtrl from "./players/players.controller";
import koaBody from "koa-body";
const playerData = new Router();



playerData.get("/", PlayerCtrl.playerList);
playerData.post("/", PlayerCtrl.playerCreate);
playerData.get("/:id", PlayerCtrl.playerList);
playerData.delete(":id", PlayerCtrl.playerDelete);
playerData.put(":id", PlayerCtrl.playerReplace);
playerData.patch(":id", PlayerCtrl.playerUpdate);


export default playerData;
