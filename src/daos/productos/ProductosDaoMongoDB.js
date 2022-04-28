import { MONGODB_URL } from "../../config";
import ContenedorMongoDB from "../../contenedores/ContenedorMongoDB";
import ProductoMongo from "../../models/ProductoMongo";

class ProductosDaoMongoDB extends ContenedorMongoDB {
    constructor() {
        super(MONGODB_URL);
    }

    async createNewProduct(newProduct) {
        const { nombre, descripcion, codigo, url, precio, stock } = newProduct;

        try {
            await new ProductoMongo({
                nombre,
                descripcion,
                codigo,
                url,
                precio,
                stock
            }).save();
            return 'Producto creado con éxito';
        } catch (error) {
            console.error('Error al crear producto:', error);
        }
    }

    async updateProduct(productId, newDataProduct) {
        try {
            await ProductoMongo.findByIdAndUpdate(productId, newDataProduct);
            return 'Producto actualizado con éxito';
        } catch (error) {
            console.error('Error al actualizar producto:', error);
        }
    }
}

export default ProductosDaoMongoDB;