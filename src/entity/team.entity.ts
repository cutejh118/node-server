import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
  mascot?: string;
}
