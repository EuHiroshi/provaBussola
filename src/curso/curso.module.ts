import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Curso, CursoSchema } from './schemas/curso.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Curso.name, schema: CursoSchema }]),
  ],
  controllers: [CursoController],
  providers: [CursoService],
  exports: [CursoService],
})
export class CursoModule {}
