import { Module } from '@nestjs/common';
import { LibroController } from './libro/libro.controller';
import { RestService } from './rest/rest.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LibroSchema } from './schemas/libro-schema';

@Module({
  imports : [MongooseModule.forFeature([{ name: 'LibroDtoSinId', schema: LibroSchema }])],
  controllers: [LibroController],
  providers: [RestService]
})
export class ApiModule {}
