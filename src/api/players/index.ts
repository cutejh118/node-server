import Router from "koa-router";
import * as Ctrl from "./players.controller";
const playerRouter = new Router();

playerRouter.get("/", Ctrl.playerList);
playerRouter.get("/:name", Ctrl.playerRead);
playerRouter.post("/", Ctrl.playerCreate);
playerRouter.patch("/:id", Ctrl.playerUpdate);
playerRouter.delete("/:id", Ctrl.playerDelete);

export default playerRouter;
