import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Compras } from './compra.interface';

@Injectable()
export class ComprasService {

    constructor(@InjectModel('Compras')
    private readonly compraModel:Model<Compras>){}
    
    async todos():Promise<Compras[]>{
        return await this.compraModel.find();
    }

    async uno(id:string):Promise<Compras>{
        return await this.compraModel.findOne({_id:id})
    }

    async crear(compra:Compras):Promise<Compras>{
        const nuevo = new this.compraModel(compra);
        return await nuevo.save();
    }

    async update(id, compra:Compras):Promise<Compras>{
        return await this.compraModel.findByIdAndUpdate(id, compra, {new:true})
    }

    async delete(id:string):Promise<Compras>{
        return await this.compraModel.findByIdAndRemove(id);
    }

}
