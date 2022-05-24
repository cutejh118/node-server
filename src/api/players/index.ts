import Router from "koa-router";
import * as PlayerCtrl from "./players.controller";
const playerData = new Router();

playerData.get("/", PlayerCtrl.playerList);
playerData.post("/", PlayerCtrl.playerCreate);
playerData.get("/:name", PlayerCtrl.playerRead);
playerData.delete("/:name", PlayerCtrl.playerDelete);
playerData.patch("/:id", PlayerCtrl.playerUpdate);

export default playerData;
