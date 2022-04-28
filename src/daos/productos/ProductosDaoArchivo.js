import ContenedorArchivo from '../../contenedores/ContenedorArchivo';
import { RUTA_ARCHIVO_PRODUCTOS } from '../../config'

class ProductoDaoArchivo extends ContenedorArchivo {

    constructor() {
        super(RUTA_ARCHIVO_PRODUCTOS);
    }

    async createNewProduct(newProduct) {
        let newId = 0;
        const { nombre, descripcion, codigo, url, precio, stock } = newProduct;
        try {
            const listOfProducts = await this.getAll();

            if (listOfProducts.length === 0) {
                newId = 1;
            } else {
                let lastId = Math.max(...listOfProducts.map(product => product.id));
                newId = lastId += 1;
            }

            listOfProducts.push({
                id: newId,
                timestamp: Date.now(),
                nombre,
                descripcion,
                codigo,
                url,
                precio,
                stock
            });
            
            await this.saveData(listOfProducts);
            return 'Producto agregado con éxito'
        } catch (error) {
            console.error('Error al agregar producto:', error);
        }
    }

    async updateProduct(newDataProduct) {
        try {
            const listOfProducts = await this.getAll();
            listOfProducts.forEach((product) => {
                if (product.id === newDataProduct.id) {
                    product.nombre = newDataProduct.nombre;
                    product.descripcion = newDataProduct.descripcion;
                    product.codigo = newDataProduct.codigo;
                    product.url = newDataProduct.url;
                    product.precio = newDataProduct.precio;
                    product.stock = newDataProduct.stock;
                }
            });
            
            await this.saveData(listOfProducts);
            return 'Producto actualizado con éxito'
        } catch (error) {
            console.error('Error actualizando producto:', error);
        }
    }
}

export default ProductoDaoArchivo;