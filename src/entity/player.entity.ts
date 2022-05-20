import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
