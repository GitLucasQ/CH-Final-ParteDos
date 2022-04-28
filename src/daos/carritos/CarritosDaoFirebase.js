import ContenedorFirebase from "../../contenedores/ContenedorFirebase";

class CarritosDaoFirebase extends ContenedorFirebase {

    constructor() {
        super('shopcart');
    }

    async createCart() {
        try {
            await this.create({
                timestamp: Date.now(),
                products: []
            });

            return 'Carrito creado con éxito';
        } catch (error) {
            console.error('Error al crear carrito:', error);
        }
    }

    async addProduct(shopCartId, productId) {
        try {
            await this.collection.doc(shopCartId).update({
                products: this.firestore.FieldValue.arrayUnion(productId),
            });

            return 'Producto agregado con éxito';
        } catch (error) {
            console.error('Error al agregar produco al carrito:', error);
        }
    }

    async deleteProduct(shopCartId, productId) {
        try {
            await this.collection.doc(shopCartId).update({
                products: this.firestore.FieldValue.arrayRemove(productId),
            });

            return 'Producto eliminado con éxito del carrito';
        } catch (error) {
            console.error('Error al eliminar producto:', error);
        }
    }
}

export default CarritosDaoFirebase;