function pantalla() {
    document.getElementById('texto').innerHTML = "<p>Hola Mundo</p>";

}

function holaMundo() {

    console.log("Hola Mundo");

}

function alerta() {

    window.alert("Hola Mundo");

}

function numero() {
    let introducido;

    while (introducido != 10) {

        introducido = window.prompt("Introduce un número");


    }
    if (introducido = 10) {

        window.alert("El número que ha introducido coincide con 10");
    }

}

function fecha() {
    let f1 = document.getElementById("fecha").value;
    if (f1.includes("12-25")) {

        window.alert("Es navidad");
    } else {

        window.alert("No es navidad");
    }
}

function sueldoAntiguedad() {
    let sueldo;
    let antiguedad;


    sueldo = window.prompt("Introduce tu sueldo:");
    antiguedad = window.prompt("Introduce tu antigüedad:");
    console.log("Sueldo incial:", sueldo);
    console.log("Antigüedad:", antiguedad);
    if (sueldo < 500 && antiguedad > 10) {
        sueldo = sueldo * 3
        console.log("Sueldo final:" + sueldo);
    } else if (sueldo < 500 && antiguedad < 10) {
        sueldo = sueldo * 2;
        console.log("Sueldo final:" + sueldo);

    } else if (sueldo > 500) {
        sueldo = sueldo;
        console.log("Mantiene el mismo sueldo");
    }
}

function notas() {
    let nota;
    nota = window.prompt("Introduce tu nota:");

    if (nota >= 1 && nota <= 3) {
        console.log("Muy deficiente");
    } else if (nota > 3 && nota <= 5) {
        console.log("Insuficiente");
    } else if (nota > 5 && nota <= 6) {
        console.log("Bien");
    } else if (nota > 6 && nota <= 9) {
        console.log("Notable");
    } else if (nota > 9) {
        console.log("Sobresaliente");
    }

}

function pares() {
    let cantidad;
    cantidad = window.prompt("Introduce la cantidad de pares deseada:");
    let i = 0;
    while (cantidad != 0) {
        if (i % 2 == 0) {

            console.log(i);
            cantidad--;
        }
        i++;
    }
}

function impares() {
    let cantidad;
    cantidad = window.prompt("Introduce la cantidad de pares deseada:");
    let i = 0;
    while (cantidad != 0) {
        if (i % 2 != 0) {

            console.log(i);
            cantidad--;
        }
        i++;
    }
}

function tablaMultiplicar() {
    let numero;
    numero = window.prompt("Introduzca el numero deseado:");
    let resultado;

    for (let i = 1; i <= 10; i++) {
        resultado = numero * i;

        console.log(numero + " x " + i + " = " + resultado);
    }

}

function tabla() {
    var cantFilas = window.prompt("Introduce la cantidad de filas deseada");
    var cantColums = window.prompt("Introduce la cantidad de columnas deseada");

    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (var i = 1; i < cantFilas; i++) {
        var crearFila = document.createElement("tr");

        for (var j = 1; j < cantColums; j++) {
            var crearColum = document.createElement("td");
            var texto = document.createTextNode("fila " + i + ", columna " + j);
            crearColum.appendChild(texto);
            crearFila.appendChild(crearColum);

        }
        tbody.appendChild(crearFila);
    }
    tabla.appendChild(tbody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");


}


function primos() {
    let numero = window.prompt("Introduce un numero para saber si o no primo");
    let boolean = true;
    for (let i = 2; i < numero && boolean; i++) {
        if (numero % i == 0) {
            console.log("No es primo");
            boolean = false;

        } else {
            console.log("Es primo");
        }
    }

}

function operandos() {

    var op1 = window.prompt("Introduce el primer numero");
    var op2 = window.prompt("Introduce el segunfo operador");

    let resultado = operarSuma(Number(op1), Number(op2));
    console.log("El resultado de la suma es: " + resultado);

}

function operarSuma(x, y) {
    return x + y;


}

function bisiesto() {
    let year = window.prompt("Introduce el año deseado");

    if (year % 4 == 0) {
        console.log("Es bisiesto");

    } else {

        console.log("No es bisiesto");
    }


}

function perimetro() {
    let h = window.prompt("Introduce la altura");
    let b = window.prompt("Introduce el tamño de la base");

    let resultado = 2 * h + 2 * b
    console.log("El perimetro total es: " + resultado);
}

function factorial() {

    let numero = prompt("Introduce el numero deseado");
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    console.log("El factorial de " + numero + " es " + resultado);

}


function clases1() {

    class telefono {
        constructor(numero) {
            this.numero = numero;
        }

    };

    class persona {
        constructor(nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;

        }

        nombreCompleto() {

            return this.nombre + " " + this.apellido;

        }

    };

    const name = new persona("jose", "moron");

    console.log(name.nombreCompleto());

}

function clases2() {

    class telefono {
        constructor(marca, modelo) {
            this.marca = marca;
            this.modelo = modelo;

        }
        get getModelo() {
            return this.modelo;
        }
        set setModelo(valor) {
            this.modelo = valor;
        }

        get getMarca() {
            return this.marca;

        }
        set setMarca(valor) {
            this.marca = valor;

        }
    }

    const movil = new telefono("Apple", "Iphone12");


    movil.setMarca = "Nokia";
    movil.setModelo = "3310";


    console.log("La marca del telefono es: " + movil.getMarca);
    console.log("El modelo  del telefono es: " + movil.getModelo);
}


function clases3() {

    class telefono {
        constructor(marca) {
            this.marca = marca;

        }

        anuncio() {
            return console.log("El teléfono de la marca " + this.marca + " está disponible");

        }


    }
    class modelo extends telefono {
        constructor(marca, modelo) {
            super(marca);
            this.modelo = modelo;


        }

        anuncioCompleto() {
            return console.log("El teléfono de la marca " + this.marca + " está disponible en este modelo " + this.modelo);

        }


    }

    //const phone = new telefono(marca);

    const phone1 = new modelo("Apple", "Iphone12");


    console.log(phone1.anuncio());

    console.log(phone1.anuncioCompleto());

}


function clases4() {

    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }

        static areaRectangulo(instancia) {
            return console.log(`El área del rectangulo es: ${instancia.base * instancia.altura}`);

        }

        static perimetroRectangulo(instancia) {
            return console.log(`El perímetro del rectangulo es: ${(instancia.base*2)+(instancia.altura*2)}`);
        }


    }

    const rectangulo = new Rectangulo(4, 2);

    console.log(Rectangulo.areaRectangulo(rectangulo));
    console.log(Rectangulo.perimetroRectangulo(rectangulo));


}


function clases5() {

    class Vehiculo {
        constructor(color, marca, modelo, vmax) {
            this.color = color;
            this.marca = marca;
            this.modelo = modelo;
            this.vmax = vmax;
        }
        comenzar() {
            console.log("Encender motor");
        }
        parar() {
            console.log("Apagar motor");
        }

        distanciaMaxima(tiempo) {
            return console.log(`La distancia recorrida es ${this.vmax*tiempo}`);
        }
    }
    class Coche extends Vehiculo {
        constructor(color, marca, modelo, vmax) {
            super(color, marca, modelo, vmax);
        }
        parar() {
            console.log("Aparcar");
        }
    }

    class Avion extends Vehiculo {
        constructor(color, marca, modelo, vmax) {
            super(color, marca, modelo, vmax);
        }
        comenzar() {
            console.log("Despegar");
        }
        parar() {
            console.log("Aterrizar");
        }
    }

    const Civic = new Coche("Rojo", "Honda", "Civic", 120);

    Civic.comenzar();
    Civic.distanciaMaxima(60);
    Civic.parar();

    const avion = new Avion("Blanco", "Iberia", "747", 1000);
    avion.comenzar();
    avion.parar();





}