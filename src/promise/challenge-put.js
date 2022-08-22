import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// Edición de registro
function putData(urlApi, dataUpdate) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'corse',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    });
    return response;
}

const dataUpdate = {
    "title": "Curso 12 - Editado",
    "price": 270,
    "description": "Cambio de descripcion",
    "categoryId": 3,
    "images": ["https://placeimg.com/640/480/any"]
}

putData(`${API}/products/270`, dataUpdate)
    .then(response => response.json())
    .then(dataUpdate => console.log(dataUpdate))
    .catch(error => console.log('Error', error))
    .finally(() => console.log('Finally'));