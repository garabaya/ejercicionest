import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { LibroDto } from './libro-dto';
import { LibroDtoSinId } from './libro-dto-sin-id';


@Controller('libro')
export class LibroController {
  @Get() // mostrar todfos los objetos
  findAll(): LibroDto[] {
    return [];
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
  @Post() // añadir un objeto
  addOne(@Body() createDto: LibroDtoSinId): LibroDto {
    // recoger el objeto y meterlo en la BBDD
    const libroDto = new LibroDto();
    libroDto.id = 1;
    libroDto.titulo = createDto.titulo;
    libroDto.autor = createDto.autor;
    libroDto.fecha = createDto.fecha;
    return libroDto;
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
