import { Context } from "koa";
import team from "../../entity/team.entity";
import appDataSource from "../../connection/connect";
import Player from "../../entity/player.entity";

const listTeam = async (ctx: Context) => {
  try {
    ctx.body = await appDataSource
      .getRepository(team)
      .createQueryBuilder()
      .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500);
  }
};

const createTeam = async (ctx: Context) => {
  const { teamName, stadium, place, manager } = ctx.request.body;
  try {
    await appDataSource
      .createQueryBuilder()
      .insert()
      .into(team)
      .values([
        {
          teamName,
          stadium,
          place,
          manager,
        },
      ])
      .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500);
  }
};
const readTeam = async (ctx: Context) => {
  const { name } = ctx.params;
  try {
    ctx.body = await appDataSource
      .createQueryBuilder()
      .select("*")
      .from(team, "team")
      .where("teamName = :name", { name })
      .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500);
  }
};

const deleteTeam = async (ctx: Context) => {
  const { id } = ctx.params;
  try {
    await appDataSource
      .createQueryBuilder()
      .delete()
      .from(team)
      .where("id = :id ", { id })
      .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500);
  }
};

const updateTeam = async (ctx: Context) => {
  const { id } = ctx.params;
  const { teamName, stadium, place, manager } = ctx.request.body;
  try {
    await appDataSource
      .createQueryBuilder()
      .update(team)
      .set({
        teamName,
        stadium,
        place,
        manager,
      })
      .where("id = :id", { id })
      .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500);
  }
};

const membersTeam = async (ctx: Context) => {
  const { id } = ctx.params;
  try {
    ctx.body = await appDataSource
      .createQueryBuilder()
      .select("*")
      .from(Player, "player")
      .where("teamId = :id", { id })
      .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500);
  }
};

export { listTeam, createTeam, readTeam, deleteTeam, updateTeam, membersTeam };
