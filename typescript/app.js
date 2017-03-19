var WHO_GOD = " dios nauzet ";
function saludar(nombre, quien, donde) {
    if (quien === void 0) { quien = "nadie"; }
    console.log("Hola mi " + (WHO_GOD + nombre.toUpperCase()));
}
var persona = { nombre: "nauzet" };
var apellidos = "Melián Batista";
var edad = 123;
var existe = true;
var fechaNacimiento = new Date();
console.log("la fecha de nacimiento fechaNacimiento");
saludar(persona.nombre, "nauzet", "aqui");
var miFunction = function (a) {
    return a;
};
var miFunctionF = function (a) { return a; };
var miFunction2 = function (a, b) {
    return a + b;
};
var miFunctionF2 = function (a, b) { return a + b; };
var miFunction3 = function (a, b) {
    var suma = a + b;
    return suma;
};
var miFunctionF3 = function (a, b) {
    var suma = a + b;
    return suma;
};
