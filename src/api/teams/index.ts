import Router from "koa-router";
import * as Ctrl from "./teams.controller";
const teamRouter = new Router();

teamRouter.get("/", Ctrl.teamList);
teamRouter.post("/", Ctrl.teamCreate);
teamRouter.get("/:name", Ctrl.teamRead);
teamRouter.delete("/:name", Ctrl.teamDelete);
teamRouter.patch("/:id", Ctrl.teamUpdate);

export default teamRouter;
