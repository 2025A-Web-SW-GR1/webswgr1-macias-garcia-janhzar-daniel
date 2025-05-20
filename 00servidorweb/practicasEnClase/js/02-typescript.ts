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



const adrian:any = {
    name: "Adrian",
    age: 30,
    numero: 1,
    casado: true,
    hijos: null,
    ropa: {
        camisa: "azul",
        pantalon: "negro"
    },
    mascotas: [
        "perro",
        "gato"
    ]
}

//imprimir
console.log(adrian);
// acceder a las propiedades
adrian.name
adrian["age"]

//modificar
adrian.name = "Adrian2"
adrian["age"] = 40

//eliminar
adrian.name = undefined;
delete adrian.name;


//variables por referencia o valor

//variables por valor (number,String,boolean)
let a = 1;
let b = a;
a = 2;
console.log(a,b); // 2, 1
a = a+1;
console.log(a,b); // 3, 1

//variables por referencia (Array, Object)
let c = [1,2,3];
let d = c;
c.push(4);
console.log(c,d); // [1,2,3,4], [1,2,3,4]
c.push(5);
console.log(c,d); // [1,2,3,4,5], [1,2,3,4,5]

let e = {
    name: "Adrian"
}
let f = e;
e.name = "Adrian2";
console.log(e,f); // {name: "Adrian2"}, {name: "Adrian2"}

//copiar un objeto
let g = {
    name: "Adrian"
}
let h = Object.assign({}, g);
g.name = "Adrian2";
console.log(g,h); // {name: "Adrian"}, {name: "Adrian2"}


//iterar arreglos

let i = [1,2,3,4,5];
for(let j = 0; j < i.length; j++){
    console.log(i[j]);
}

let j = [1,2,3,4,5];
for(let k of j){
    console.log(k);
}

//con indice

let l = [1,2,3,4,5];
for(let m in l){
    console.log(l[m]);
}

//eliminar y agregar elementos

let m = [1,2,3,4,5];
m.push(6);
console.log(m); // [1,2,3,4,5,6]
m.pop();
console.log(m); // [1,2,3,4,5]
m.unshift(0);
console.log(m); // [0,1,2,3,4,5]
m.shift();
console.log(m); // [1,2,3,4,5]

//splice

let n = [1,2,3,4,5];
n.splice(2, 2);
console.log(n); // [1,2,5]


//operadores Arreglos (find,findIdex,foreach,map,filter,some,every,reduce,sort)

let o = [1,2,3,4,5];
let p = o.find((value, index, array) => {
    return value > 3;
});
console.log(p); // 4

let q = o.findIndex((value, index, array) => {
    return value > 3;
});
console.log(q); // 3

let r = o.filter((value, index, array) => {
    return value > 3;
});
console.log(r); // [4,5]

let s = o.map((value, index, array) => {
    return value * 2;
});
console.log(s); // [2,4,6,8,10]

let t = o.reduce((acumulador, value, index, array) => {
    return acumulador + value;
}, 0);
console.log(t); // 15

let u = o.some((value, index, array) => {
    return value > 3;
});
console.log(u); // true

let v = o.every((value, index, array) => {
    return value > 3;
});
console.log(v); // false

let w = o.sort((a, b) => {
    return a - b;
});
console.log(w); // [1,2,3,4,5]


//funciones
function sumar(a:number,b:number):number{
    return a + b;
}
console.log(sumar(1,2)); // 3

//fatArrow
const sumar2 = (a:number,b:number):number => a + b;
console.log(sumar2(1,2)); // 3

//funciones anonimas
const sumar3 = function(a:number,b:number):number{
    return a + b;
}
console.log(sumar3(1,2)); // 3

//sin parametros
const sumar4 = ():number => 1 + 1;
console.log(sumar4()); // 2

//con parametros
const sumar5 = (a:number,b:number):number => a + b;
console.log(sumar5(1,2)); // 3

//parametros por defecto
const sumar6 = (a:number,b:number = 1):number => a + b;
console.log(sumar6(1)); // 2

//parametros infinitos
const sumar7 = (...args:number[]):number => args.reduce((a,b) => a + b);
console.log(sumar7(1,2,3,4,5)); // 15

//Destructuracion
const adriandest= {
    nombre: "Adrian"
}

const carolina={
    nombre: "Carolina",
    apellido: "Eguez"
}

//merge
const adriandestcarolina = {
    ...adriandest,
    ...carolina
}

