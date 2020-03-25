import { Injectable } from '@nestjs/common';
import { LibroDto } from '../libro/libro-dto';

@Injectable()
export class RestService {
  private libros: LibroDto[];
  private id: number;
  constructor(){
    this.libros = [];
    this.id = 0;
  }
  getLibros(): LibroDto[]{
    return this.libros;
  }
  addLibro(libro: LibroDto): LibroDto{
    libro.id=this.id++;
    this.libros.push(libro);
    return libro;
  }
}
