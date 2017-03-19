var _this = this;
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
var miObjeto = {
    nombre: "nauzet",
    saludar: function () {
        console.log("Hola " + this.nombre);
    }
};
miObjeto.saludar();
var miObjetoF = {
    nombre: "nauzet",
    saludar: function () { return console.log("Hola FF " + _this.nombre); }
};
miObjetoF.saludar();
var miObjetoT = {
    nombre: "nauzet",
    saludar: function () {
        setTimeout(function () { console.log("Hola T " + this.nombre); }, 1500);
    }
};
miObjetoT.saludar();
var miObjetoTF = {
    nombre: "nauzet",
    saludar: function () {
        var _this = this;
        setTimeout(function () { console.log("Hola TF " + _this.nombre); }, 1500);
    }
};
miObjetoTF.saludar();
var miObjetoTAmbito = {
    nombre: "nauzet",
    saludar: function () {
        var ambito = this;
        setTimeout(function () { console.log("Hola TAmbito " + ambito.nombre); }, 1500);
    }
};
miObjetoTAmbito.saludar();
