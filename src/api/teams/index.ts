import Router from "koa-router";
import * as teamCtrl from "./teams.controller";
const teamData = new Router();

teamData.get("/", teamCtrl.teamList);
teamData.post("/", teamCtrl.teamCreate);
teamData.get("/:name", teamCtrl.teamRead);
teamData.delete("/:name", teamCtrl.teamDelete);
teamData.patch("/:id", teamCtrl.teamUpdate);

export default teamData;
