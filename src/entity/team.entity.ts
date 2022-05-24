import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Player from "./player.entity";

@Entity()
export default class Team {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  teamName!: string;

  @Column()
  stadium?: string;

  @Column()
  place?: string;

  @Column()
  soccerManager?: string;

  @OneToMany(() => Player, (player) => player.team)
  players!: Player[];
}
