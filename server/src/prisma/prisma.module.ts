import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { MongoPrismaService } from './mongo-prisma/mongo-prisma.service';
import { PostgresPrismaService } from './postgres-prisma/postgres-prisma.service';

@Module({
    providers: [PrismaService, PostgresPrismaService, MongoPrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}

