import express from 'express'
import CarritosDaoArchivo from './daos/carritos/CarritosDaoArchivo';
import CarritosDaoMongoDB from './daos/carritos/CarritosDaoMongoDB';
import ProductoDaoArchivo from './daos/productos/ProductosDaoArchivo';
import ProductosDaoMongoDB from './daos/productos/ProductosDaoMongoDB';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((_req, res) => {
    res.status(404).json({
        'error': -2,
        'descripcion': 'Ruta no existente'
    })
})


const ejecutaCRUD = async () => {

    const newData = {
        "timestamp": Date.now(),
        "nombre": "Laptop Asus",
        "descripcion": "producto de computo",
        "codigo": "TEC-001",
        "url": "https://mercury.vteximg.com.br/arquivos/ids/5970366-3000-3000/image-d73f01d58cab41529c121bb2d594c68c.jpg?v=637817666434800000",
        "precio": 2599,
        "stock": 5
    };

    const mongodbDAO = new ProductosDaoMongoDB();
    const listaProductos = async () => mongodbDAO.getAll();
    console.log(await listaProductos());
    console.log(await mongodbDAO.getById('626608d4336943bf34d288cd'));
    console.log(await mongodbDAO.createNewProduct(newData));
    // console.log(await mongodbDAO.deleteById('626767d6260b2b7da6d4e3bb'));
    console.log(await mongodbDAO.updateProduct('626608d4336943bf34d288cd', newData));
    const mongoCarritoDAO = new CarritosDaoMongoDB();
    const listaCarritos = async () => mongoCarritoDAO.getAllShopcart();
    console.log(await listaCarritos());

}


app.listen(PORT, () => {
    console.log('Server online on port', PORT);
    ejecutaCRUD();

})