/*
const WHO_GOD = " dios nauzet ";

function saludar (nombre:string, quien:string = "nadie", donde?:string )
{
  console.log( `Hola mi ${WHO_GOD+nombre.toUpperCase() }` );
}

let persona = { nombre: "nauzet" };
let apellidos:string = "Melián Batista";
let edad:number = 123;
let existe:boolean = true;
let fechaNacimiento:Date = new Date();


console.log(`la fecha de nacimiento fechaNacimiento` );

saludar(persona.nombre, "nauzet", "aqui");


//-------funciones de flecha

//Declaro una funcion anonima normal y la asigno a una variable.
let miFunction =  function (a)
{
  return a;
}

//Declaro una funcion anonima con la sintaxis de flecha y la asigno a una variable.
let miFunctionF = (a) => a;

//Lo mismo que hantes pero con mas parametros y fijando los tipos
let miFunction2 =  function (a:number, b:number)
{
  return a + b;
}

let miFunctionF2 = (a:number, b:number) => a +b;

//Lo mismo, pero con funciones con un cuerpo de varias lineas
let miFunction3 =  function (a:number, b:number)
{
  let suma = a + b;
  return suma;
}

let miFunctionF3 = (a:number, b:number) => {
  let suma = a + b;
  return suma;
};

//Funciones anonimas en  en objetos.
let miObjeto = {
  nombre: "nauzet",
  saludar: function () {
    console.log( `Hola ${this.nombre}` );
  }
}

miObjeto.saludar();

//Funciones de flecha en objetos.
let miObjetoF = {
  nombre: "nauzet",
  saludar: () =>  console.log( `Hola FF ${this.nombre}` )
}

miObjetoF.saludar();

//Ejemplo donde al usuar una funcion de flecha, no se pierde el ambito del objeto. Pero con una función anonima si.
let miObjetoT = {
  nombre: "nauzet",
  saludar: function () {
    //En este punto vemos que la función que se le pasa al setTimeout, no tiene el mismo ambito que la
    //definición del objeto. Su ambito es el objeto global windows.
    setTimeout( function(){console.log( `Hola T ${this.nombre}` );}, 1500 )
  }
}

miObjetoT.saludar();

let miObjetoTF = {
  nombre: "nauzet",
  saludar:  function()  {
    //En este punto vemos que la función que se le pasa al setTimeout, no tiene el mismo ambito que la
    //definición del objeto. Su ambito es el objeto global windows.
    // => Para resolver esto con funcion anonima flecha, el compilador declara una variable en esta función
    // llamada this y guarda el ambito (this).
    // ejemplo: var _this = this;
    setTimeout( ()=> {console.log( `Hola TF ${this.nombre}` );}, 1500 )
  }
}

miObjetoTF.saludar();

//Solución al problema del ambito
let miObjetoTAmbito = {
  nombre: "nauzet",
  saludar: function () {
    //En este punto vemos que la función que se le pasa al setTimeout, no tiene el mismo ambito que la
    //definición del objeto. Su ambito es el objeto global windows.
    var ambito = this;
    setTimeout( function(){console.log( `Hola TAmbito ${ambito.nombre}` );}, 1500 )
  }
}

miObjetoTAmbito.saludar();

//------- desestructuracion de objeros
//declaro un array con ciertos atributos.
let averger = {
  nombre: "Steve",
  clave: "capitan america",
  poder: "fuerza"
}
//de esta manera podemos savar cada atributo del objeto a una variable.
//esto es como el list()  de PHP

let {nombre, clave, poder} = averger;

//------- desestructuracion de arrays
//declaro un array que contiene strings
let avengers:string[] = ['thor', 'tony', 'hulk'];
//De esta manera podemos obtener en variables cada elemento del array
//esto es igual que el list()  de PHP
let [ dios, ironman, hulk ] = avengers;


//--------Promesas
//Dejar claro, que no ha explicado mucho. De donde sale la clase Promise?
//Despues de leer un poco aqui: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
//Promise es un objeto nuevo de JS, no soportado por IE (que raro...)
let prom1 = new Promise( function( resolve, reject) {
  setTimeout( ()=>{
      console.log("Promesa terminada");

      //habría q poner condiciones para cuando se termine bien o no. por ahora se hace a mano
      //si termiara bien
      resolve();
      //si termiara mal
      //reject();
    }
   , 1500);
})

console.log ("paso 1");

prom1.then( ()=>{
  console.log("termino bien");
},
() => {
  console.error("termino mal");
}
);

console.log ("paso 2");


//--------Interfaces
//NOTA: Las interfaces no estan soportadas por JS
//Definimos una funcion q por parametro acepta un objeto y quedemos que tenga unos atributos
//Ete parametro es casi como definir un tipo. Pero habría que hacerlo en cada función y es un lio.
function enviarMision( xmen : { nombre:string })
{
  console.log(`Enviando a ${ xmen.nombre}`);
}
let personajeX = { nombre: "Picara", poder: "camuflaje"};
enviarMision( personajeX );

//En respuesta a esta problematica, se pueden definir interfaces.
//Asi se define la interfaz
interface Xmen {
  nombre: string,
  poder: string
}
//Asi declaramos un tipo de dato usando la interfaz
function enviarMisionI( xmen : Xmen)
{
  console.log(`Enviando a ${ xmen.nombre}`);
}
//ASi definimos una variable usnado el tipo de dato de la interfaz.
//Una cosa curiosa es que no se puede añadir nada al objeto.  Con lo cual parece mas una definicion de tipo que una interfaz donde hay que tner almenos los atributos y metodos de la interfaz.
let personajeXI:Xmen = { nombre: "Picara", poder: "camuflaje"};
enviarMisionI( personajeXI );


///---------------Clases
//Las clases se definen como siempre, los atributos se le pueden poner valores por defecto.
class Persona {
  nombre:string;
  apellidos: string;
  genero:string = "masculino";

  //Un ejemplo de como se hace el constructor
  constructor( nombre:string, apellidos:string){
    this.nombre = nombre;
    this.apellidos = apellidos;
  }

  //Un ejemplo de como se hace un metoodo
  public getFullName()
  {
    return `${this.nombre} ${this.apellidos}`;
  }
}

let yo:Persona = new Persona( "Nauzet", "Melian Batista");
console.log(yo);
console.log(yo.getFullName());
*/

//------------ Examen

// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE:{nombre:string, edad: number} = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
interface heroe{
  nombre:string,
  artesMarciales:string[]
}
var batman:heroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
/*
function resultadoDoble( a, b ){
  return (a + b) * 2
}
*/
let resultadoDoble = ( a:number, b:number ) =>  (a + b) * 2;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
/*
function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};
*/
function getAvenger( nombre:string, poder?:string, arma:string = "cuchillo" ){
  var mensaje;
  if( poder ){
    mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  }else{
    mensaje = `${nombre} tiene un ${poder}`;
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
  base: number;
  altura: number;

  constructor (base:number, altura:number)
  {
    this.base = base;
    this.altura = altura;
  }

  public area ():number
  {
    return this.base * this.altura;
  }
}
