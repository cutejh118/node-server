import Router from "koa-router";
import playerRouter from "./players";
import teamRouter from "./teams";

const router = new Router();

router.use("/playerRouter", playerRouter.routes());
router.use("/teamRouter", teamRouter.routes());

export default router;
