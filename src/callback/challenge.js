const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    // xmlhttp.open() → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).
    xhttp.onreadystatechange = function (event) {
        // xmlhttp.onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia.
        if (xhttp.readyState === 4) {
            // xmlhttp.readyState → Retorna el estado de la petición.
            // 0 es no inicializado
            // 1 loading todabia no se llamo el valor
            // 2 cuando se ejecuto el valor de send
            // 3 es interactuar con el valor
            // 4 cuando se completa la llamada
            if (xhttp.status === 200) {
                // xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500)
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
    // xmlhttp.send() → Envía la petición.
}

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});