import { promises as fs } from 'fs'

class ContenedorArchivo {

    constructor(ruta) {
        this.ruta = ruta;
    }

    async getAll() {
        try {
            const data = await fs.readFile(this.ruta);
            return JSON.parse(data);
        } catch (error) {
            console.error('Sucedió un error al obtener los datos:', error);
        }
    }

    async getById(id) {
        try {
            const data = await this.getAll();
            return data.find(element => element.id == id);
        } catch (error) {
            console.error('Error al obtener objeto:', error);
        }
    }

    async deleteById(id) {
        try {
            const data = await this.getAll();
            const newdata = data.filter(element => element.id != parseInt(id));
            await fs.writeFile(this.ruta, JSON.stringify(newdata, null, 2));
            return 'Objeto eliminado con éxito';
        } catch (error) {
            console.error('Error eliminando objeto:', error);
        }
    }

    async saveData(data) {
        try {
            await fs.writeFile(this.ruta, JSON.stringify(data, null, 2));
        } catch (error) {
            console.error('Error guardando la data:', error);
        }
    }
}

export default ContenedorArchivo;