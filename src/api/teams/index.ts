import Router from "koa-router";
import * as Ctrl from "./teams.controller";
const teamRouter = new Router();

teamRouter.get("/", Ctrl.teamList);
teamRouter.get("/:name", Ctrl.teamRead);
teamRouter.get("/:id/players", Ctrl.teamMembers);
teamRouter.post("/", Ctrl.teamCreate);
teamRouter.patch("/:id", Ctrl.teamUpdate);
teamRouter.delete("/:id", Ctrl.teamDelete);

export default teamRouter;
