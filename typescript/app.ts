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
