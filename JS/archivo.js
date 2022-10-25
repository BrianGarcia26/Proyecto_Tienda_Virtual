//Realizo un simulador interactivo en base a una tienda virtual

//Comenzamos con el saludo y bienvenida a la página

let nombre = prompt("Ingrese su nombre:");

while(nombre == null || nombre == "") {
    nombre = prompt("Lo sentimos, debe ingresar su nombre");
}
alert("Hola, " + nombre + ". Te damos la bienvenida a Arañita. Esperamos que encuentres lo que estás buscando.");
    
//Continuamos con el servicio de venta ya sea minorista o mayorista

alert("Contamos con servicios de venta minorista y mayorista. En caso de ser venta mayorista, el monto mínimo de compra debe ser mayor a $10.000");

let venta = parseInt(prompt("¿Qué tipo de servicio desea? 1) Venta minorista 2) Venta mayorista"));

// Variables con los precios y el descuento mayorista

let ovillo40g = 100;
let ovillo100g = 250;
let madeja200g = 500;
let madeja1kg = 2500;
let descuento = 0.1;
let carrito = 0;

// Condicional dependiendo si la venta es minorista o mayorista

if (venta == 1) {
    do{
        let producto = parseInt(prompt("Productos: 1) Ovillos de 40gr a $" + ovillo40g + " 2) Ovillos de 100gr a $" + ovillo100g + " 3) Madejas de 200gr a $" + madeja200g + " 4) Madejas de 1Kg a $" + madeja1kg + "."));
        let cantidad = 0;
        switch(producto) {
            case 1:
                valor = ovillo40g;
                cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
                carrito = carrito + (cantidad*valor);
                break;
            case 2:
                valor = ovillo100g;
                cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
                carrito = carrito + (cantidad*valor);
                break;
            case 3:
                valor = madeja200g;
                cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
                carrito = carrito + (cantidad*valor);
                break;
            case 4:
                valor = madeja1kg;
                cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
                carrito = carrito + (cantidad*valor);
                break;
            default:
                // En caso de poner un valor fuera de las opciones volverá a mostrar el valor del carrito y también preguntará si desea seguir comprando o no
                break;
        }
        alert("Tu carrito: $" + carrito);
        final = parseInt(prompt("1) Seguir comprando  2) Finalizar compra"));
    }while(final == 1);
    mail = prompt("Ingresar mail para recibir los datos y poder realizar el pago"); 
    alert("Muchas gracias por tu compra. Se enviaron los datos a " + mail);
} else if (venta == 2) {
    do{
        let producto = parseInt(prompt("Productos: 1) Ovillos de 40gr a $" + (ovillo40g-(descuento*ovillo40g)) + " 2) Ovillos de 100gr a $" + (ovillo100g-(descuento*ovillo100g)) + " 3) Madejas de 200gr a $" + (madeja200g-(descuento*madeja200g)) + " 4) Madejas de 1Kg a $" + (madeja1kg-(descuento*madeja1kg)) + "."));
        let cantidad = 0;
        switch(producto) {
            case 1:
                valor = ovillo40g-(descuento*ovillo40g);
                cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
                carrito = carrito + (cantidad*valor);
                break;
            case 2:
                valor = ovillo100g-(descuento*ovillo100g);
                cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
                carrito = carrito + (cantidad*valor);
                break;
            case 3:
                valor = madeja200g-(descuento*madeja200g);
                cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
                carrito = carrito + (cantidad*valor);
                break;
            case 4:
                valor = madeja1kg-(descuento*madeja1kg);
                cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
                carrito = carrito + (cantidad*valor);
                break;
            default:
                break;
        }
        alert("Tu carrito: $" + carrito);
        final = parseInt(prompt("1) Seguir comprando  2) Finalizar compra"));
        if (final == 2 && carrito < 10000) {
            alert("Tu carrito tiene un valor de $" + carrito + ". Te faltan $" + (10000-carrito) + " para que la compra sea considerada mayorista.")
        }
    }while(final == 1 || carrito < 10000);
    mail = prompt("Ingresar mail para recibir los datos y poder realizar el pago"); 
    alert("Muchas gracias por tu compra. Se enviaron los datos a " + mail);
} else {
    // En caso de no requerir ningún servicio procedemos a saludar.
    alert("Esperamos que vuelva pronto");
}

function Persona (nombre, edad, pais) {
    this.nombre = nombre;
    this.edad = edad;
    this.pais = pais;
    this.saludo = function() {
        console.log("Hola " + this.nombre);
    }
}

const yo = new Persona ("Brian", 28, "Argentina");
// yo.saludo();
// console.log("nombre" in yo);
// console.log("juas" in yo);

/*

for (const propiedad in yo) {
    console.log(yo[propiedad]);
}

// El termino propiedad es una constante declarada, puede ser cualquier nombre

for (const variableNueva in yo) {
    console.log(yo[variableNueva]);
}

*/

class Hilados {
    constructor (tipo, peso, material, cantidad, tipoTejido, precioKilo, color) {
        this.tipo = tipo;
        this.peso = peso;
        this.material = material;
        this.cantidad = cantidad;
        this.tipoTejido = tipoTejido;
        this.precioKilo = precioKilo;
        this.color = color;
    }
    info() {
        console.log(this.tipo + " de " + this.peso + ", color " + this.color + ", para " + this.tipoTejido + ". Precio por kilo = $" + this.precioKilo);
    }
}

const soft4_7_001 = new Hilados("Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "165 - ORO");
const soft4_7_002 = new Hilados("Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "174 - DORADO");
const soft4_7_003 = new Hilados("Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "461 - GENCIANA");
const soft4_7_004 = new Hilados("Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "582 - OTOÑO");
const soft4_7_005 = new Hilados("Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "664 - JEAN");
const soft4_7_006 = new Hilados("Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "746 - MIRAGE");
const soft4_7_007 = new Hilados("Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "814 - DESIERTO");
const soft4_7_008 = new Hilados("Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "823 - NUEZ");

const nubeSoft4_7_001 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "100 - PATITO");
const nubeSoft4_7_002 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "290 - NEGRO");
const nubeSoft4_7_003 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "610 - CELESTE BEBE");
const nubeSoft4_7_004 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "690 - MARINO");
const nubeSoft4_7_005 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "730 - CANTON");
const nubeSoft4_7_006 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "790 - INGLES");
const nubeSoft4_7_007 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "800 - BLANCO");
const nubeSoft4_7_008 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "890 - CHOCOLATE");

const nubeSoft2_7_001 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "100 - PATITO");
const nubeSoft2_7_002 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "147 - ROCKLET");
const nubeSoft2_7_003 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "210 - PLATA");
const nubeSoft2_7_004 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "310 - ROSA BEBE");
const nubeSoft2_7_005 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "432 - ALECRIM");
const nubeSoft2_7_006 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "465 - VIOLETA");
const nubeSoft2_7_007 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "575 - ROJO");
const nubeSoft2_7_008 = new Hilados("Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "733 - FLUO");

soft4_7_001.info();
nubeSoft4_7_004.info();
nubeSoft2_7_007.info();