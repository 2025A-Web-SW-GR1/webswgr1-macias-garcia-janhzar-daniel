const fs = require('fs');

console.log('primero');
 fs.readFile(
    './a.txt',
    'utf8',
    (err, data) => {  //callbacks
        if (err) {
            console.log("error: ", err);
        } else {
            console.log("Datos: ",data);
        }
    }
 )

 fs.writeFile(
    './a.txt',
    'nuevo texto',
    (err, data) => {  //callbacks
        if (err) {
            console.log("error: ", err);
        } else {
            console.log("Datos: ",data);
        }
    }
 )



function promesa(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve("es par");
        } else {
            reject("es impar");
        }
    });
}

promesa(2)
    .then((res) => {
        //async
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

    

const path = './a.txt';
const fechaActual = new Date().toISOString();

fs.writeFile(path, fechaActual, 'utf8', (err) => {
    if (err) {
        console.error('Error al escribir el archivo:', err);
    } else {
        console.log('Archivo escrito correctamente con fecha:', fechaActual);
    }
});

//promesas then y catch

fs.writeFile(path, fechaActual, 'utf8')
    .then(() => {
        console.log('Archivo escrito correctamente con fecha:', fechaActual);
    })
    .catch((err) => {
        console.error('Error al escribir el archivo:', err);
    });

    
//promesas async await
async function escribirFecha() {
    try {
        await fs.writeFile(path, fechaActual, 'utf8');
        console.log('Archivo escrito correctamente con fecha:', fechaActual);
    } catch (err) {
        console.error('Error al escribir el archivo:', err);
    }
}

escribirFecha();