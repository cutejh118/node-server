import Router from "koa-router";
import * as Ctrl from "./players.controller";
const playerRouter = new Router();

playerRouter.get("/", Ctrl.listPlayer);
playerRouter.get("/:name", Ctrl.readPlayer);
playerRouter.post("/", Ctrl.createPlayer);
playerRouter.patch("/:id", Ctrl.updatePlayer);
playerRouter.delete("/:id", Ctrl.deletePlayer);

export default playerRouter;
