import { Module } from '@nestjs/common';
import { PostgresPrismaService } from 'src/prisma/postgres-prisma/postgres-prisma.service';
import { MongoPrismaService } from 'src/prisma/mongo-prisma/mongo-prisma.service';



@Module({
  providers: [PostgresPrismaService, MongoPrismaService],
  exports:[PostgresPrismaService,MongoPrismaService]
})

export class PrismaModule {}

