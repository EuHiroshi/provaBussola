import { Injectable } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './schemas/usuario.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Model } from 'mongoose';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const createdUsuario = new this.usuarioModel(createUsuarioDto);
    return createdUsuario.save();
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  async findOne(id: string) {
    return this.usuarioModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioModel.findOneAndUpdate({ _id: id }, updateUsuarioDto);
  }

  remove(id: string) {
    return this.usuarioModel.findOneAndDelete({ _id: id });
  }
}
