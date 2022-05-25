import { DataSource } from "typeorm";

const appDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "0000",
  database: "EPL",
  logging: true,
  entities: ["src/entity/**/*.ts"],
});

export default appDataSource;
