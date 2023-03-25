import { Module, } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marcas } from "./entities/marcas.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Marcas])],
    controllers: [],
    providers: [],
})


export class MarcasModule{}