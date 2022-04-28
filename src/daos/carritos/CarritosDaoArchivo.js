import { RUTA_ARCHIVO_CARRITOS } from "../../config";
import ContenedorArchivo from "../../contenedores/ContenedorArchivo";

class CarritosDaoArchivo extends ContenedorArchivo {

    constructor() {
        super(RUTA_ARCHIVO_CARRITOS);
    }

    async getAllProducts(idShopCart) {
        try {
            const data = await this.getAll();
            return data.find(shopcart => shopcart.id === idShopCart).productos;
        } catch (error) {
            console.error('Sucedió un error al obtener los datos:', error);
        }
    }

    async addNewProduct(idShopCart, newProduct) {
        const { nombre, descripcion, codigo, url, precio, stock } = newProduct;
        let newId = 0;

        try {
            const data = await this.getAll();
            const listOfProducts = data.find(shopcart => shopcart.id === idShopCart).productos;

            let lastId = Math.max(...listOfProducts.map(product => product.id));
            newId = lastId += 1;

            data.filter(shopcart => shopcart.id === parseInt(idShopCart))[0]?.productos.push({
                id: newId,
                timestamp: Date.now(),
                nombre,
                descripcion,
                codigo,
                url,
                precio,
                stock
            });

            await this.saveData(data);
            return 'Producto agregado al carrito con éxito';

        } catch (error) {
            console.error('Error al agregar producto al carrito:', error);
        }
    }

    async updateProduct(idShopCart, newData) {
        const { nombre, descripcion, codigo, url, precio, stock } = newData;

        try {
            const data = await this.getAll();
            const foundedShopcart = data.find(shopcart => shopcart.id === idShopCart);
            const foundedProduct = foundedShopcart.productos.find(product => product.id = newData.id);
            foundedProduct.nombre = nombre;
            foundedProduct.descripcion = descripcion;
            foundedProduct.codigo = codigo;
            foundedProduct.url = url;
            foundedProduct.precio = precio;
            foundedProduct.stock = stock;


            await this.saveData(data);

            return 'Producto actualizado en el carrito con éxito';
        } catch (error) {
            console.error('Error al actualizar producto del carrito:', error);
        }
    }

    async deleteProduct(idShopCart, idProduct) {
        try {
            let data = await this.getAll();
            let listOfProducts = data.find(shopcart => shopcart.id === idShopCart).productos;

            listOfProducts = listOfProducts.filter(product => product.id != idProduct);
            data.find(shopcart => shopcart.id === idShopCart).productos = listOfProducts;

            await this.saveData(data);
            return 'Producto eliminado del carrito con éxito';
        } catch (error) {
            console.error('Error al borrar el producto del carrito:', error);
        }
    }
}

export default CarritosDaoArchivo;