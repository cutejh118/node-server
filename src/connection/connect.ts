import { DataSource } from "typeorm";

export  const appDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "0000",
    database: "EPL",
    synchronize: true,
    logging: true,
    entities: ["./entity/**/*.*"],
  });
  