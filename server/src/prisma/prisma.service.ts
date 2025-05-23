// import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// import { PrismaClient as PostgresPrismaClient } from '../prisma/generated/postgres';
// import { PrismaClient as MongoPrismaClient } from '../prisma/generated/mongo';

// @Injectable()
// export class PrismaService implements OnModuleInit, OnModuleDestroy {
//   public postgres: PostgresPrismaClient;
//   public mongo: MongoPrismaClient;

//   constructor() {
//     this.postgres = new PostgresPrismaClient();
//     this.mongo = new MongoPrismaClient();
//   }

//   async onModuleInit() {
//     await this.postgres.$connect();
//     await this.mongo.$connect();
//   }

//   async onModuleDestroy() {
//     await this.postgres.$disconnect();
//     await this.mongo.$disconnect();
//   }
// }