
import { Injectable, OnModuleInit} from '@nestjs/common';
import { PrismaClient }  from 'generated/prisma'; //изменила в соответствии с путями в schema (generator client {provider = "prisma-client-js"output   = "../generated/prisma"})

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
}
