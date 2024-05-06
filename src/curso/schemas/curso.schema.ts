import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CursoDocument = HydratedDocument<Curso>;

@Schema()
export class Curso {
  @Prop()
  nome: string;

  @Prop()
  valor: number;

  @Prop()
  duração: number;
}

export const CursoSchema = SchemaFactory.createForClass(Curso);
