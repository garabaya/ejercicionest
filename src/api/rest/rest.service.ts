import { Injectable } from '@nestjs/common';
import { LibroDto } from '../libro/libro-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LibroDtoSinId } from '../libro/libro-dto-sin-id';

@Injectable()
export class RestService {
  private libros: LibroDto[];
  private id: number;
  constructor(@InjectModel('LibroDtoSinId')
                private readonly modelo: Model<LibroDtoSinId>){
    this.libros = [];
    this.id = 0;
  }
  async getLibros(): Promise<LibroDtoSinId[]> {
    return await this.modelo.find().exec();
  }

  async addLibro(libro: LibroDtoSinId): Promise<LibroDtoSinId> {
    const newLibro = new this.modelo(libro);
    return await newLibro.save();
  }
/*
  addLibro(libro: LibroDto): LibroDto{
    libro.id=this.id++;
    this.libros.push(libro);
    return libro;
  }
  */
}
