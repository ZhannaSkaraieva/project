export class CreateUserDto { //модель типизации сущности 
    //схема DTO (Data Transfer Object). DTO — это объект, который определяет, как данные должны дальше отправляться по сети.
    id: number;
    email: string;
    name: string;
    order_id: number;
    favorite_id: number
}
