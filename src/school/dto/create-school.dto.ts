import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateSchoolDto {

    @IsString()
    @IsNotEmpty()
    school_name: string

    @IsString()
    @IsOptional()
    @IsEmail()
    email?: string

    @IsString()
    @IsOptional()
    address?: string

    @IsString()
    @IsOptional()
    phone?: string
}
