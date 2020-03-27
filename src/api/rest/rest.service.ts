import { Injectable } from '@nestjs/common';
import { LibroDto } from '../libro/libro-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LibroDtoSinId } from '../libro/libro-dto-sin-id';

@Injectable()
export class RestService {
  private libros: LibroDtoSinId[];
  //private id: number;
  constructor(@InjectModel('LibroDtoSinId')
                private readonly modelo: Model<LibroDtoSinId>){
    this.libros = [];
  //  this.id = 0;
  }
  async getLibros(): Promise<LibroDtoSinId[]> {
    return await this.modelo.find().exec();
  }

  async addLibro(libro: LibroDtoSinId): Promise<LibroDtoSinId> {
    const newLibro = new this.modelo(libro);
    return await newLibro.save();
  }

  async findOne(id: string): Promise<LibroDtoSinId> {
    return await this.modelo.findById(id);
  }

  async updateLibro(id: string, libro: LibroDtoSinId): Promise<LibroDtoSinId> {
    const cambios = { titulo: libro.titulo, autor: libro.autor, fecha: libro.fecha};
    await this.modelo.updateOne({_id : id}, cambios);
    return await this.modelo.findById(id);
  }

  async delete(id: string): Promise<LibroDtoSinId> {
    const libro = await this.modelo.findById(id);
    await this.modelo.findOneAndRemove({_id : id });
    return libro;
  }
/*
  addLibro(libro: LibroDto): LibroDto{
    libro.id=this.id++;
    this.libros.push(libro);
    return libro;
  }
  */
}
