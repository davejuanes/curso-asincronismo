import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1';

export default async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

async function* iterData(urlApi) {
    try {
        const products = await fetchData(`${urlApi}/products`);
        yield console.log(products[100]);
        
        const product = await fetchData(`${urlApi}/products[100].id`);
        yield console.log(product.title);
        
        const category = await fetchData(`${urlApi}/products.category.id`);
        yield console.log(category.name);
    } catch (error) {
        console.log('Error', error);
    }
}

const dt = iterData(API);
dt.next()
dt.next()