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
