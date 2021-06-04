import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
} from "typeorm";

@Entity()
export class Ressource extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    name: string;
}