import ContenedorFirebase from "../../contenedores/ContenedorFirebase";

class ProductosDaoFirebase extends ContenedorFirebase {

    constructor() {
        super('products')
    }


}

export default ProductosDaoFirebase;