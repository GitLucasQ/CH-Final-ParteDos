import { MONGODB_URL } from "../../config";
import ContenedorMongoDB from "../../contenedores/ContenedorMongoDB";
import CarritoMongo from "../../models/CarritoMongo";

class CarritosDaoMongoDB extends ContenedorMongoDB {
    constructor() {
        super(MONGODB_URL);
    }

    async getAllShopcart() {
        try {
            return await CarritoMongo.find()
        } catch (error) {
            console.error('Error al obtener carritos:', error);
        }
    }

    async getShopcartById(idShopCart) {
        try {
            return await CarritoMongo.findById(idShopCart)
        } catch (error) {
            console.error('Error al obtener carrito:', error);
        }
    }

    async addNewProduct(idShopCart, idNewProduct) {
        try {
            CarritoMongo.updateOne({
                _id: idShopCart
            },
                {
                    $push: {
                        productos: idNewProduct
                    }
                }).exec();
            return 'Producto agregado al carrito con éxito';
        } catch (error) {
            console.error('Error al agregar producto al carrito:', error);
        }
    }

    async createShopCart() {
        try {
            await CarritoMongo.create({
                timestamp: Date.now(),
                products: []
            });
            return 'Carrito creado con éxito';
        } catch (error) {
            console.error('Error al crear carrito:', error);
        }
    }

    async updateShopcart(id, newData) {
        try {
            await CarritoMongo.updateOne({ _id: id }, { $set: newData });
            return 'Carrito actualizado con éxito';
        } catch (error) {
            console.error('Error al actualizar carrito:', error);
        }
    }

    async deleteShopCart(id) {
        try {
            await CarritoMongo.deleteOne({ _id: id });
            return 'Carrito eliminado con éxito';
        } catch (error) {
            console.error('Error al eliminar carrito:', error);
        }
    }
}

export default CarritosDaoMongoDB;