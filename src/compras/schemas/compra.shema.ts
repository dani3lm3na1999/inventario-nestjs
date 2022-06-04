import * as mongoose from 'mongoose'

export const CompraSchema = new mongoose.Schema({
    
    Correlativo:Number,
    Fecha:Date,
    Productos:Array,
    Total:Number

})