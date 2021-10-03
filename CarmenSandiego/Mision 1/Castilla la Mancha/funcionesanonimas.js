 var areaTriangulo = function (b, a) {

     return ((a * b) / 2);

 }

 var perimetroTrianguloEquilatero = function (l) {

     return l * 3;
 }

 var perimetroTrianguloIsosceles = function (l1, l2) {
     return (l1 * 2) + l2;

 }

var permietroTrianguloEscaleno= function (l1, l2, l3) {
     return l1 + l2 + l3;

 }

var areaCuadrado = new Function ("l", "return l * l;") ;
var perimetroCuadrado = new Function ("l", "return l * 4;") ;
var areaRectangulo = new Function ("l1", "l2", "return l1 * l2;") ;
     

 

 (function () { return (3.14 * (r * r));}());

 (function () {return (2 * 3.14 * r);}());