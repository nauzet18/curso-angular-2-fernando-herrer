const WHO_GOD = " dios nauzet ";

function saludar (nombre:string)
{
  console.log("Hola mi "+WHO_GOD+nombre.toUpperCase() );
}

let persona = { nombre: "nauzet" };
let apellidos:string = "Melián Batista";
let edad:number = 123;
let existe:boolean = true;
let fechaNacimiento:Date = new Date();

console.log("la fecha de nacimiento "+fechaNacimiento);

saludar(persona.nombre);
