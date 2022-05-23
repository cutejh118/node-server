import { Context } from "koa";
import Player from "../../entity/player.entity";
import appDataSource from "../../connection/connect";

const playerList = (ctx: Context) => {
  ctx.body = "list 테스트";
};

const playerCreate = async (ctx: Context) => {
  const { playerName, height, weight, backNumber, birthday } = ctx.request.body;
  try {
    await appDataSource
      .createQueryBuilder()
      .insert()
      .into(Player)
      .values([
        {
          playerName: playerName,
          height: height,
          weight: weight,
          backNumber: backNumber,
          birthday: birthday
        },
      ])
      .execute();
  } catch (error) {
      console.dir(error);
    ctx.throw(500);
  }
};
const playerRead = (ctx: Context) => {
    const { id } = ctx.params;
    ctx.body = id+'입니다.';
};

const playerDelete = (ctx: Context) => {
};

const playerReplace = (ctx: Context) => {
  ctx.body = "replace테스트";
};

const playerUpdate = (ctx: Context) => {
  ctx.body = "update테스트";
};

export { playerList, playerCreate, playerRead, playerDelete, playerReplace, playerUpdate };
