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
          birthday: birthday,
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
  //선수명 입력
};

const playerDelete = async (ctx: Context) => {
  const { id } = ctx.request.query;
  const { name } = ctx.params;
  try {
    await appDataSource
    .createQueryBuilder()
    .delete()
    .from(Player)
    .where("playerName = :name  and id = :id "  ,  { name , id})
    .execute();  
  } catch (error) {
    console.dir(error);
    ctx.throw(500);   
  } 
   //지정선수 삭제
};

const playerUpdate = async (ctx: Context) => {
    const { id } = ctx.params;
    const { playerName, height, weight, backNumber, birthday } = ctx.request.body;
  try {
    await appDataSource
    .createQueryBuilder()
    .update(Player)
    .set({
        playerName: playerName,
        height: height,
        weight: weight,
        backNumber: backNumber,
        birthday: birthday
    })
    .where("id = :id", {id})
    .execute()  
  } catch (error) {
    console.dir(error)
    ctx.throw(500)
  }
};

export {
  playerList,
  playerCreate,
  playerRead,
  playerDelete,
  playerUpdate,
};
