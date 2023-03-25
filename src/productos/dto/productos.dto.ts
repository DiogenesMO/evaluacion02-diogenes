import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";


export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string; 

    @MinLength(10)
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @MinLength(5)
    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @IsNumber()
    @IsNotEmpty()
    precio: number;
  
    @IsNumber()
    @IsNotEmpty()
    stock: number;

}