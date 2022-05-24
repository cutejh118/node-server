import Router from "koa-router";
import * as Ctrl from "./players.controller";
const playerRouter = new Router();

playerRouter.get("/", Ctrl.playerList);
playerRouter.post("/", Ctrl.playerCreate);
playerRouter.get("/:name", Ctrl.playerRead);
playerRouter.delete("/:name", Ctrl.playerDelete);
playerRouter.patch("/:id", Ctrl.playerUpdate);

export default playerRouter;
