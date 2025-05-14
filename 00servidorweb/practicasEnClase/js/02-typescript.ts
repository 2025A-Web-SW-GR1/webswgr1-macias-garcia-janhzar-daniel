console.log("hola Typescript");

let nombres = "Daniel";
let nombreTS: string = "";

console.log(typeof nombres);

let numero = 1;
let numeroTS: number = 1;

console.log(typeof numero , "numero");

numero = 1.1;
console.log(typeof numero , "numero");

let booleano = true;
let booleanoTS: boolean = false;

booleano = false;
console.log(typeof booleano , "booleano");

let nulos = null;
let nulosTS: null = null;
console.log(typeof nulos , "nulos");

let arrays = [1, 2, 3];
let arraysTS: number[] = [1, 2, 3];
console.log(typeof arrays , "arrays");

let objectos = {

}   
let objectosTS: object = {
    nombre: "Daniel"
}
console.log(typeof objectos, "objectos");



//truty falsy

let trutyfalsy: any;
trutyfalsy = "";
if(trutyfalsy){
    console.log("truty");
}else{
    console.log("falsy");
}
trutyfalsy = "a";
if(trutyfalsy){
    console.log("truty");
}else{
    console.log("falsy");
}
trutyfalsy = -1;
if(trutyfalsy){
    console.log("truty");
}else{
    console.log("falsy");
}
trutyfalsy = 0;
if(trutyfalsy){
    console.log("truty");
}else{
    console.log("falsy");
}
trutyfalsy = 1;
if(trutyfalsy){
    console.log("truty");
}else{
    console.log("falsy");
}
trutyfalsy = null;
if(trutyfalsy){
    console.log("truty");
}else{
    console.log("falsy");
}
trutyfalsy = {};
if(trutyfalsy){
    console.log("truty");
}else{
    console.log("falsy");
}
trutyfalsy = [];
if(trutyfalsy){
    console.log("truty");
}else{
    console.log("falsy");
}