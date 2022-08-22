import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// Eliminación de un registro
function deleteData(urlApi) {
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}

const idProduct = 270;

deleteData(`${API}/products/${idProduct}`)
    .then(() => console.log(`Se elimino el registro con ID ${idProduct}`))