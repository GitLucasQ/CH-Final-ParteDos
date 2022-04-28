import { Schema, model } from 'mongoose'

const CarritoModel = new Schema({
    timestamp: Date,
    productos: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
},
    {
        timestamps: true
    });

export default model('Shopcart', CarritoModel);