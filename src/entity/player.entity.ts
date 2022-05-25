import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Team from "./team.entity";

@Entity()
export default class Player {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  playerName!: string;

  @Column()
  backNumber?: number;

  @Column()
  height?: number;

  @Column()
  weight?: number;

  @Column()
  birthday?: Date;

  @ManyToOne(() => Team, (team) => team.players)
  team!: Team;
}
