const admin = require('firebase-admin');

const serviceAccount = require('../DB/myprojectch-85124-firebase-adminsdk-5bzuw-21f566a51b.json');

class ContenedorFirebase {

    constructor(collection) {
        this.firestore = admin.firestore;
        this.db = this.firestore();
        this.query = db.collection(collection);
    }

    async connect() {
        await admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        })
        console.log('Conectado a Firebase');
    }

    async getAll() {
        try {
            const data = await this.query.get();
            let docs = data.docs;

            return docs.map((doc) => ({ ...doc.data() }));
        } catch (error) {
            console.error('Error al obtener objetos:', error);
        }
    }

    async getById(id) {
        try {
            return await query.doc(id).get().data();
        } catch (error) {
            console.error('Error al obtener objetos:', error);
        }
    }

    async update(id, newData) {
        try {
            return await this.query.doc(id).update(newData);
        } catch (error) {
            console.error('Error al actualizar objetos:', error);
        }
    }

    async delete(id) {
        try {
            await this.query.doc(id).delete();
            return 'Objeto eliminado con éxito';
        } catch (error) {

        }
    }
}

export default ContenedorFirebase;
