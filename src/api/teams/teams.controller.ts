import { Context } from "koa";
import team from "../../entity/team.entity";
import appDataSource from "../../connection/connect";

const teamList = async (ctx: Context) => {
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

const teamCreate = async (ctx: Context) => {
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
const teamRead = async (ctx: Context) => {
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

const teamDelete = async (ctx: Context) => {
  const { id } = ctx.request.query;
  const { name } = ctx.params;
  try {
    await appDataSource
      .createQueryBuilder()
      .delete()
      .from(team)
      .where("teamName = :name  AND id = :id ", { name, id })
      .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500);
  }
};

const teamUpdate = async (ctx: Context) => {
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

const teamMembers =async (ctx:Context) => {
  const { name } = ctx.params;
  try {
    ctx.body = await appDataSource
    .createQueryBuilder()
    .select("*")
    .from(team, "team")
    .where("teamName = :name AND player.team = :id ", { name })
    .execute();
  } catch (error) {
    console.dir(error);
    ctx.throw(500)
  }

};


export { teamList, teamCreate, teamRead, teamDelete, teamUpdate ,teamMembers};
