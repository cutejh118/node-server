import { Context } from "koa";
import Player from "../../entity/player.entity";
import appDataSource from "../../connection/connect";

const listPlayer = async (ctx: Context) => {
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

const createPlayer = async (ctx: Context) => {
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
const readPlayer = async (ctx: Context) => {
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

const deletePlayer = async (ctx: Context) => {
  const { id } = ctx.params;
  try {
    await appDataSource
      .createQueryBuilder()
      .delete()
      .from(Player)
      .where("id = :id ", { id })
      .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500);
  }
};

const updatePlayer = async (ctx: Context) => {
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

export { listPlayer, createPlayer, readPlayer, deletePlayer, updatePlayer };
