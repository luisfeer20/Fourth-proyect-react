import axios from 'axios'


const URL = 'http://192.168.0.12:8080/api/productos'
export const getPlanes = async () => {
    let planes = null;
    try {
        planes = await axios.get(URL);
    } catch (error) {
        console.log(error);
    }
    return planes;
}
export const postPlanes = async ({ nombre, descripcion, precio, tipo }) => {
    let enviar = null;
    try {
        enviar = await axios.post(URL, {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            tipo: tipo
        })
        return (enviar.data)
    } catch (error) {
        console.log(error)
    }
}
export const putPlanes = async ({ nombre, descripcion, precio, tipo, id }) => {
    let editar = null;
    try {
        editar = await axios.put(URL, {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            tipo: tipo,
            id: id
        })
        console.log(editar.data)
    } catch (error) {
        console.log(error)
    }
}




export const deletePlanes = async ({ id }) => {
    let eliminar = null;
    try {
        eliminar = axios.delete(URL, {
            data: {
                id: id
            }
        })
        console.log((await eliminar).data)
    }
    catch (error) {
        console.log(error)
    }
}

