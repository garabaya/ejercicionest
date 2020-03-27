import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { LibroDto } from './libro-dto';
import { LibroDtoSinId } from './libro-dto-sin-id';
import { RestService } from '../rest/rest.service';


@Controller('libro')
export class LibroController {
  constructor(private restService: RestService){
  }
  @Get() // mostrar todfos los objetos
  async findAll(): Promise<LibroDtoSinId[]> {
    return this.restService.getLibros();
  }
  @Get('/:id') // mostrar un objeto
  getById(@Param() params): LibroDto {
    // Capturar e id y consultar a la BBDD
    const libroDto = new LibroDto();
    libroDto.id = params.id;
    libroDto.titulo = "titulo del libro";
    libroDto.autor = "autor del libro";
    libroDto.fecha = "fecha del libro";
    return libroDto;
  }
  /*
  @Post() // añadir un objeto
  addOne(@Body() createDto: LibroDto): LibroDto {
    // recoger el objeto y meterlo en la BBDD
    return this.restService.addLibro(createDto);
  }
  */
  @Post()
  async addLibro(@Body() libro: LibroDtoSinId): Promise<LibroDtoSinId>{
    const libroID = await this.restService.addLibro(libro);
    return libroID;
  }
  @Put('/:id') // modificar un objeto
  modifyById(@Param() params,
             @Body() updateDto: LibroDtoSinId): LibroDto {
    // Capturar el id y buscarlo en la BBDD y luego guardar los cambios
    const libroDto = new LibroDto();
    libroDto.id = params.id;
    libroDto.titulo = updateDto.titulo;
    libroDto.autor = updateDto.autor;
    libroDto.fecha = updateDto.fecha;
    return libroDto;
  }
  @Delete('/:id') // borrar
  deleteById(@Param() params): LibroDto {
    // coger el id consultar a la bbdd y luego borrar el objeto
    const libroDto = new LibroDto();
    libroDto.id = params.id;
    libroDto.titulo = "titulo del libro";
    libroDto.autor = "autor del libro";
    libroDto.fecha = "fecha del libro";
    return libroDto;
  }
}
