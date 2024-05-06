import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Curso } from './schemas/curso.schema';
import { Model } from 'mongoose';

@Injectable()
export class CursoService {
  constructor(@InjectModel(Curso.name) private cursoModel: Model<Curso>) {}
  async create(createCursoDto: CreateCursoDto): Promise<Curso> {
    const createdCurso = new this.cursoModel(createCursoDto);
    return createdCurso.save();
  }

  async findAll(): Promise<Curso[]> {
    return this.cursoModel.find().exec();
  }

  async findOne(id: string) {
    return this.cursoModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateCursoDto: UpdateCursoDto) {
    return this.cursoModel.findOneAndUpdate({ _id: id }, updateCursoDto);
  }

  remove(id: string) {
    return this.cursoModel.findOneAndDelete({ _id: id });
  }
}
