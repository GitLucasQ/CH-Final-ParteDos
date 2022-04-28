import mongoose from 'mongoose'
import ProductoMongo from '../models/ProductoMongo';

class ContenedorMongoDB {
    constructor(ruta) {
        this.ruta = ruta;
        this.connect();
    }

    async connect() {
        const db = await mongoose.connect(this.ruta, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        if (db) console.log('Conectado a Mongo')
    }

    async getAll() {
        try {
            return await ProductoMongo.find();
        } catch (error) {
            console.error('Error al obtener objeto:', error);
        }
    }

    async getById(id) {
        try {
            return await ProductoMongo.findById(id)
        } catch (error) {
            console.error('Error al obtener objeto:', error);
        }
    }

    async deleteById(id) {
        try {
            await ProductoMongo.deleteOne({ "_id": id })
            console.log('Objeto eliminado con éxito');
        } catch (error) {
            console.error('Error al eliminar objeto:', error);
        }
    }    
}

export default ContenedorMongoDB;