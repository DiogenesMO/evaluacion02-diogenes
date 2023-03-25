import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column({ type: 'text'})
    name: string; 

    @Column({ type: 'text'})
    categoria: string; 

    @Column({ type: 'text'})
    pais_origen: string; 

    @Column({ type: 'text'})
    observacion?: string;
}