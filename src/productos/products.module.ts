import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/productos.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [],
    providers: [],
})

export class ProductModule {}