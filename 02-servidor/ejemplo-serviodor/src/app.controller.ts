import { Controller, Get, Param, Query, Headers, Post, Body, HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ejemplo/:id') // /ejemplo/1?hola=mundo
  @HttpCode(200)
  ejemplo(
    @Param('id') id, // Parametro de Ruta llamado 'id'
    @Query('hola') hola, // Parametro de consulta llamado 'hola'
    @Headers('escuela') escuela, // Cabecera con nombre 'escuela'
    @Body('monto') monto, // Cabecera con nombre 'escuela'
  ): string {
    return id + hola + ' Funcionando ' + escuela + monto
  }


  private casas = [
    { id: 1, nombre: "Casa 1" },
    { id: 2, nombre: "Casa 2" },
  ];

  @Get('/casa')
  getCasa(@Query('idCasa') idCasa?: string) {
    if (!idCasa) {
      return this.casas;
    }
    const id = Number(idCasa);
    const casa = this.casas.find(c => c.id === id);
    if (!casa) {
      throw new HttpException('No se encuentra', HttpStatus.NOT_FOUND);
    }
    return [casa];
  }




}
 