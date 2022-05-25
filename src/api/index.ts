import Router from "koa-router";
import playerRouter from "./players";
import teamRouter from "./teams";

const router = new Router();

router.use("/player", playerRouter.routes());
router.use("/team", teamRouter.routes());

export default router;
