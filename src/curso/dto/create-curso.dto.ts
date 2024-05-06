import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCursoDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;

  @IsNotEmpty()
  @IsNumber()
  duracao: number;
}
