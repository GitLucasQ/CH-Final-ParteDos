import { Schema, model } from 'mongoose'

const ProductoModel = new Schema({
    nombre: String,
    descripcion: String,
    codigo: String,
    url: String,
    precio: Number,
    stock: Number
},
    {
        timestamps: true
    });


export default model('Product', ProductoModel);