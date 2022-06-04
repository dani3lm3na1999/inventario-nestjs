import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { Compras } from '../compras/compra.interface'
import { ComprasService } from './compras.service';

@Controller('compras')
export class ComprasController {
    constructor(private readonly servicio: ComprasService){};

    @Get()
    ObtenerTodos(): Promise<Compras[]>{
        return this.servicio.todos();
    }

    @Get(":id")
    ObtenerUno(@Param("id") id): Promise<Compras>{
        return this.servicio.uno(id);
    }

    @Post()
    Crear(@Body() body: Compras): Promise<Compras> {
        return this.servicio.crear(body);
    }

    @Put(":id")
    Actualizar(@Param("id") id, @Body() body: Compras): Promise<Compras>{
        return this.servicio.update(id, body);
    }

    @Delete(":id")
    Eliminar(@Param("id") id): Promise<Compras>{
        return this.servicio.delete(id);
    }
}


