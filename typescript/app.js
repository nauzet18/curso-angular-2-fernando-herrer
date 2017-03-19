var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
var resultadoDoble = function (a, b) { return (a + b) * 2; };
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "cuchillo"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
}
;
var Rectangulo = (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.area = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
