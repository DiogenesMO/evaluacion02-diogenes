import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { IsOptional } from "class-validator/types/decorator/decorators";


export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string; 

    @MinLength(5)
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    categoria: string;

    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    pais_origen: string;
  
    @IsString()
    @IsOptional()
    observacion: String;

}