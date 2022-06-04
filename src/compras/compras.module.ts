import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { ComprasController } from './compras.controller';
import { ComprasService } from './compras.service';
import { CompraSchema } from './schemas/compra.shema';

@Module({
    imports:[MongooseModule.forFeature([{name:'Compras', schema: CompraSchema}])],
    providers: [ComprasService],
    controllers: [ComprasController],
})
export class ComprasModule {}
