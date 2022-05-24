import { Context } from "koa";
import Player from "../../entity/player.entity";
import appDataSource from "../../connection/connect";

const playerList = async (ctx: Context) => {
  try {
    ctx.body = await appDataSource
      .getRepository(Player)
      .createQueryBuilder()
      .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500);
  }
};

const playerCreate = async (ctx: Context) => {
  const { playerName, height, weight, backNumber, birthday, team } =
    ctx.request.body;
  try {
    await appDataSource
      .createQueryBuilder()
      .insert()
      .into(Player)
      .values([
        {
          playerName,
          height,
          weight,
          backNumber,
          birthday,
          team,
        },
      ])
      .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500);
  }
};
const playerRead = async (ctx: Context) => {
  const { name } = ctx.params;
  try {
    ctx.body = await appDataSource
      .createQueryBuilder()
      .select("*")
      .from(Player, "player")
      .where("playerName = :name", { name })
      .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500);
  }
};

const playerDelete = async (ctx: Context) => {
  const { id } = ctx.request.query;
  const { name } = ctx.params;
  try {
    await appDataSource
      .createQueryBuilder()
      .delete()
      .from(Player)
      .where("playerName = :name  and id = :id ", { name, id })
      .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500);
  }
};

const playerUpdate = async (ctx: Context) => {
  const { id } = ctx.params;
  const { playerName, height, weight, backNumber, birthday, team } =
    ctx.request.body;

  try {
    await appDataSource
      .createQueryBuilder()
      .update(Player)
      .set({
        playerName,
        height,
        weight,
        backNumber,
        birthday,
        team,
      })
      .where("id = :id", { id })
      .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500);
  }
};

export { playerList, playerCreate, playerRead, playerDelete, playerUpdate };
