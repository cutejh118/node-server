import Router from "koa-router";
import * as Ctrl from "./teams.controller";
const teamRouter = new Router();

teamRouter.get("/", Ctrl.listTeam);
teamRouter.get("/:name", Ctrl.readTeam);
teamRouter.get("/:id/players", Ctrl.membersTeam);
teamRouter.post("/", Ctrl.createTeam);
teamRouter.patch("/:id", Ctrl.updateTeam);
teamRouter.delete("/:id", Ctrl.deleteTeam);

export default teamRouter;
