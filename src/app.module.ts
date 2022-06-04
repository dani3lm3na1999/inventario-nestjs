import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComprasModule } from './compras/compras.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ComprasModule, MongooseModule.forRoot("mongodb+srv://dani3lm3na:BTR1261.@cluster0.he2zx.mongodb.net/Inventario")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
