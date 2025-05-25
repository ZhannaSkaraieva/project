
import { IsEmail, IsString, MinLength, IsInt, IsArray, ArrayNotEmpty, IsIn } from "class-validator"; //валидация данных

//Импортируем декораторы для валидации данных из библиотеки class-validator

export class CreateUserDto { //модель типизации сущности 
    //схема DTO (Data Transfer Object). DTO — это объект, который определяет, как данные должны дальше отправляться по сети.

    @IsInt()
    //@IsInt() Проверяет, является ли значение целым числом.
    id: number;

    @IsEmail()
    //@IsEmail(options?: IsEmailOptions) Проверяет, является ли строка допустимым адресом электронной почты.
    //options?: IsEmailOptions - дополнительные параметры для проверки адреса электронной почты
    email: string;

    @MinLength(6, { message: 'Password is too short. Minimal length is 6' })
    //@MinLength(min: number) Проверяет, не меньше ли длина строки заданного числа.
    password: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsIn(['admin', 'user'], { each: true })
    roles: string[];

//     @IsString() //Checks if the value is a string.
//     name: string;

//     @IsString()
//     order_id: string;

//     @IsString()
//     favorite_id: string
 }
