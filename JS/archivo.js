// Variable carrito, descuento mayorista y objetos y arrays de los productos

let descuento = 0.1;
let carrito = 0;

class Hilados {
    constructor (articulo, tipo, peso, material, cantidad, tipoTejido, precioKilo, color) {
        this.articulo = articulo;
        this.tipo = tipo;
        this.peso = peso;
        this.material = material;
        this.cantidad = cantidad;
        this.tipoTejido = tipoTejido;
        this.precioKilo = precioKilo;
        this.color = color;
    }
    info() {
        console.log("Art. Nº " + this.articulo + " - " + this.tipo + " de " + this.peso + ", color " + this.color + ", para " + this.tipoTejido + ". Precio por kilo = $" + this.precioKilo);
    }
}

const soft4_7_001 = new Hilados(01, "Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "165 - ORO");
const soft4_7_002 = new Hilados(02, "Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "174 - DORADO");
const soft4_7_003 = new Hilados(03, "Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "461 - GENCIANA");
const soft4_7_004 = new Hilados(04, "Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "582 - OTOÑO");
const soft4_7_005 = new Hilados(05, "Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "664 - JEAN");
const soft4_7_006 = new Hilados(06, "Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "746 - MIRAGE");
const soft4_7_007 = new Hilados(07, "Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "814 - DESIERTO");
const soft4_7_008 = new Hilados(08, "Madeja", "200 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 1990, "823 - NUEZ");

const nubeSoft4_7_001 = new Hilados(09, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "100 - PATITO");
const nubeSoft4_7_002 = new Hilados(10, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "290 - NEGRO");
const nubeSoft4_7_003 = new Hilados(11, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "610 - CELESTE BEBE");
const nubeSoft4_7_004 = new Hilados(12, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "690 - MARINO");
const nubeSoft4_7_005 = new Hilados(13, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "730 - CANTON");
const nubeSoft4_7_006 = new Hilados(14, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "790 - INGLES");
const nubeSoft4_7_007 = new Hilados(15, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "800 - BLANCO");
const nubeSoft4_7_008 = new Hilados(16, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº6, tricot y crochet", 2490, "890 - CHOCOLATE");

const nubeSoft2_7_002 = new Hilados(17, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "147 - ROCKLET");
const nubeSoft2_7_001 = new Hilados(18, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "100 - PATITO");
const nubeSoft2_7_003 = new Hilados(19, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "210 - PLATA");
const nubeSoft2_7_004 = new Hilados(20, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "310 - ROSA BEBE");
const nubeSoft2_7_005 = new Hilados(21, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "432 - ALECRIM");
const nubeSoft2_7_006 = new Hilados(22, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "465 - VIOLETA");
const nubeSoft2_7_007 = new Hilados(23, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "575 - ROJO");
const nubeSoft2_7_008 = new Hilados(24, "Ovillo", "100 gr", "100% Acrílico", 100, "Aguja Nº4, tricot, crochet y máquina familiar", 2490, "733 - FLUO");

const arraySoft4_7 = [soft4_7_001, soft4_7_002, soft4_7_003, soft4_7_004, soft4_7_005, soft4_7_006, soft4_7_007, soft4_7_008];
const arrayNubeSoft4_7 = [nubeSoft4_7_001, nubeSoft4_7_002, nubeSoft4_7_003, nubeSoft4_7_004, nubeSoft4_7_005, nubeSoft4_7_006, nubeSoft4_7_007, nubeSoft4_7_008];
const arrayNubeSoft2_7 = [nubeSoft2_7_002, nubeSoft2_7_001, nubeSoft2_7_003, nubeSoft2_7_004, nubeSoft2_7_005, nubeSoft2_7_006, nubeSoft2_7_007, nubeSoft2_7_008];

const saludoPedido = [];

//Realizo un simulador interactivo en base a una tienda virtual

//Comenzamos con el saludo y bienvenida a la página

let nombre = prompt("Ingrese su nombre:");
while(nombre == null || nombre == "") {
    nombre = prompt("Lo sentimos, debe ingresar su nombre");
}
alert("Hola, " + nombre + ". Te damos la bienvenida a Arañita. Esperamos que encuentres lo que estás buscando.");
    
//Continuamos con el servicio de venta ya sea minorista o mayorista

alert("Contamos con servicios de venta minorista y mayorista. En caso de ser venta mayorista, el monto mínimo de compra debe ser mayor a $10.000");
let venta = parseInt(prompt("¿Qué tipo de servicio desea?\n1) Venta minorista\n2) Venta mayorista\n3) Salir"));
while(venta != 1 && venta != 2 && venta != 3 ) {
    venta = parseInt(prompt("Lo sentimos, debe ingresar un servicio\n1) Venta minorista\n2) Venta mayorista\n3) Salir"));
}

// Condicional dependiendo si la venta es minorista o mayorista

if (venta == 1) {
    do {
        let filtro = parseInt(prompt("Puede elegir alguno de los siguientes filtros para ver la lista de productos:\n1) Modelo\n2) Peso\n3) Tipo de tejido"));
        while(filtro !== 1 && filtro !== 2 && filtro !== 3) {
            filtro = parseInt(prompt("Lo sentimos, debe ingresar un tipo de filtro\n1) Modelo\n2) Peso\n3) Tipo de tejido"));
        }
        if (filtro == 1) {
            let modelo = parseInt(prompt("Lista de modelos:\n1) Soft 4/7\n2) Nube Soft 4/7\n3) Nube Soft 2/7"));
            while(modelo !== 1 && modelo !== 2 && modelo !== 3) {
                modelo = parseInt(prompt("Por favor, ingresar uno de los modelos listados:\n1) Soft 4/7\n2) Nube Soft 4/7\n3) Nube Soft 2/7"))
            }
            // En la consola aparecen los productos filtrados para poder ver los detalles
            if (modelo == 1) {
                for (let i = 0; i < arraySoft4_7.length ; i++) {
                    arraySoft4_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = arraySoft4_7[producto-1].precioKilo / 5;
                } else if (producto >= 9 && producto <= 16) {
                    valor = arrayNubeSoft4_7[producto-9].precioKilo / 10;
                } else if (producto >= 17) {
                    valor = arrayNubeSoft2_7[producto-17].precioKilo / 10;
                }
            }
            if (modelo == 2) {
                for (let i = 0; i < arrayNubeSoft4_7.length ; i++) {
                    arrayNubeSoft4_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = arraySoft4_7[producto-1].precioKilo / 5;
                } else if (producto >= 9 && producto <= 16) {
                    valor = arrayNubeSoft4_7[producto-9].precioKilo / 10;
                } else if (producto >= 17) {
                    valor = arrayNubeSoft2_7[producto-17].precioKilo / 10;
                }
            }
            if (modelo == 3) {
                for (let i = 0; i < arrayNubeSoft2_7.length ; i++) {
                    arrayNubeSoft2_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = arraySoft4_7[producto-1].precioKilo / 5;
                } else if (producto >= 9 && producto <= 16) {
                    valor = arrayNubeSoft4_7[producto-9].precioKilo / 10;
                } else if (producto >= 17) {
                    valor = arrayNubeSoft2_7[producto-17].precioKilo / 10;
                }
            }
            cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
            carrito = carrito + (cantidad*valor);
            alert("Tu carrito: $" + carrito);
            final = parseInt(prompt("1) Seguir comprando\n2) Finalizar compra"));
        } else if (filtro == 2) {
            let peso = parseInt(prompt("Lista de peso:\n1) 100gr\n2) 200gr"));
            while(peso !== 1 && peso !== 2) {
                peso = parseInt(prompt("Por favor, ingresar uno de los pesos listados:\n1) 100gr\n2) 200gr"))
            }
            if (peso == 1) {
                for (let i = 0; i < arrayNubeSoft4_7.length ; i++) {
                    arrayNubeSoft4_7[i].info();
                }
                for (let i = 0; i < arrayNubeSoft2_7.length ; i++) {
                    arrayNubeSoft2_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = arraySoft4_7[producto-1].precioKilo / 5;
                } else if (producto >= 9 && producto <= 16) {
                    valor = arrayNubeSoft4_7[producto-9].precioKilo / 10;
                } else if (producto >= 17) {
                    valor = arrayNubeSoft2_7[producto-17].precioKilo / 10;
                }
            }
            if (peso == 2) {
                for (let i = 0; i < arraySoft4_7.length ; i++) {
                    arraySoft4_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = arraySoft4_7[producto-1].precioKilo / 5;
                } else if (producto >= 9 && producto <= 16) {
                    valor = arrayNubeSoft4_7[producto-9].precioKilo / 10;
                } else if (producto >= 17) {
                    valor = arrayNubeSoft2_7[producto-17].precioKilo / 10;
                }
            }
            cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
            carrito = carrito + (cantidad*valor);
            alert("Tu carrito: $" + carrito);
            final = parseInt(prompt("1) Seguir comprando\n2) Finalizar compra"));
        } else if (filtro == 3) {
            let tipoTejido = parseInt(prompt("Lista de tipos de tejidos:\n1) Aguja Nº6, tricot y crochet\n2) Aguja Nº4, tricot, crochet y máquina familiar"));
            while(tipoTejido !== 1 && tipoTejido !== 2) {
                tipoTejido = parseInt(prompt("Por favor, ingresar uno de los pesos listados:\n1) Aguja Nº6, tricot y crochet\n2) Aguja Nº4, tricot, crochet y máquina familiar"))
            }
            if (tipoTejido == 1) {
                for (let i = 0; i < arraySoft4_7.length ; i++) {
                    arraySoft4_7[i].info();
                }
                for (let i = 0; i < arrayNubeSoft4_7.length ; i++) {
                    arrayNubeSoft4_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = arraySoft4_7[producto-1].precioKilo / 5;
                } else if (producto >= 9 && producto <= 16) {
                    valor = arrayNubeSoft4_7[producto-9].precioKilo / 10;
                } else if (producto >= 17) {
                    valor = arrayNubeSoft2_7[producto-17].precioKilo / 10;
                }
            }
            if (tipoTejido == 2) {
                for (let i = 0; i < arrayNubeSoft2_7.length ; i++) {
                    arrayNubeSoft2_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = arraySoft4_7[producto-1].precioKilo / 5;
                } else if (producto >= 9 && producto <= 16) {
                    valor = arrayNubeSoft4_7[producto-9].precioKilo / 10;
                } else if (producto >= 17) {
                    valor = arrayNubeSoft2_7[producto-17].precioKilo / 10;
                }
            }
            cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
            carrito = carrito + (cantidad*valor);
            alert("Tu carrito: $" + carrito);
            final = parseInt(prompt("1) Seguir comprando\n2) Finalizar compra"));
        }
    } while (final == 1);
    mail = prompt("Ingresar mail para recibir los datos y poder realizar el pago"); 
    alert("Muchas gracias por tu compra. Se enviaron los datos a " + mail);
} else if (venta == 2) {
    do {
        let filtro = parseInt(prompt("Puede elegir alguno de los siguientes filtros para ver la lista de productos:\n1) Modelo\n2) Peso\n3) Tipo de tejido"));
        while(filtro !== 1 && filtro !== 2 && filtro !== 3) {
            filtro = parseInt(prompt("Lo sentimos, debe ingresar un tipo de filtro\n1) Modelo\n2) Peso\n3) Tipo de tejido"));
        }
        if (filtro == 1) {
            let modelo = parseInt(prompt("Lista de modelos:\n1) Soft 4/7\n2) Nube Soft 4/7\n3) Nube Soft 2/7"));
            while(modelo !== 1 && modelo !== 2 && modelo !== 3) {
                modelo = parseInt(prompt("Por favor, ingresar uno de los modelos listados:\n1) Soft 4/7\n2) Nube Soft 4/7\n3) Nube Soft 2/7"))
            }
            if (modelo == 1) {
                for (let i = 0; i < arraySoft4_7.length ; i++) {
                    arraySoft4_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = (arraySoft4_7[producto-1].precioKilo / 5) - ((arraySoft4_7[producto-1].precioKilo / 5)*descuento);
                } else if (producto >= 9 && producto <= 16) {
                    valor = (arrayNubeSoft4_7[producto-9].precioKilo / 10) - ((arrayNubeSoft4_7[producto-9].precioKilo / 10)*descuento);
                } else if (producto >= 17) {
                    valor = (arrayNubeSoft2_7[producto-17].precioKilo / 10) - ((arrayNubeSoft2_7[producto-17].precioKilo / 10)*descuento);
                }
            }
            if (modelo == 2) {
                for (let i = 0; i < arrayNubeSoft4_7.length ; i++) {
                    arrayNubeSoft4_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = (arraySoft4_7[producto-1].precioKilo / 5) - ((arraySoft4_7[producto-1].precioKilo / 5)*descuento);
                } else if (producto >= 9 && producto <= 16) {
                    valor = (arrayNubeSoft4_7[producto-9].precioKilo / 10) - ((arrayNubeSoft4_7[producto-9].precioKilo / 10)*descuento);
                } else if (producto >= 17) {
                    valor = (arrayNubeSoft2_7[producto-17].precioKilo / 10) - ((arrayNubeSoft2_7[producto-17].precioKilo / 10)*descuento);
                }
            }
            if (modelo == 3) {
                for (let i = 0; i < arrayNubeSoft2_7.length ; i++) {
                    arrayNubeSoft2_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = (arraySoft4_7[producto-1].precioKilo / 5) - ((arraySoft4_7[producto-1].precioKilo / 5)*descuento);
                } else if (producto >= 9 && producto <= 16) {
                    valor = (arrayNubeSoft4_7[producto-9].precioKilo / 10) - ((arrayNubeSoft4_7[producto-9].precioKilo / 10)*descuento);
                } else if (producto >= 17) {
                    valor = (arrayNubeSoft2_7[producto-17].precioKilo / 10) - ((arrayNubeSoft2_7[producto-17].precioKilo / 10)*descuento);
                }
            }
            cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
            carrito = carrito + (cantidad*valor);
            alert("Tu carrito: $" + carrito);
            final = parseInt(prompt("1) Seguir comprando\n2) Finalizar compra"));
        } else if (filtro == 2) {
            let peso = parseInt(prompt("Lista de peso:\n1) 100gr\n2) 200gr"));
            while(peso !== 1 && peso !== 2) {
                peso = parseInt(prompt("Por favor, ingresar uno de los pesos listados:\n1) 100gr\n2) 200gr"))
            }
            if (peso == 1) {
                for (let i = 0; i < arrayNubeSoft4_7.length ; i++) {
                    arrayNubeSoft4_7[i].info();
                }
                for (let i = 0; i < arrayNubeSoft2_7.length ; i++) {
                    arrayNubeSoft2_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = (arraySoft4_7[producto-1].precioKilo / 5) - ((arraySoft4_7[producto-1].precioKilo / 5)*descuento);
                } else if (producto >= 9 && producto <= 16) {
                    valor = (arrayNubeSoft4_7[producto-9].precioKilo / 10) - ((arrayNubeSoft4_7[producto-9].precioKilo / 10)*descuento);
                } else if (producto >= 17) {
                    valor = (arrayNubeSoft2_7[producto-17].precioKilo / 10) - ((arrayNubeSoft2_7[producto-17].precioKilo / 10)*descuento);
                }
            }
            if (peso == 2) {
                for (let i = 0; i < arraySoft4_7.length ; i++) {
                    arraySoft4_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = (arraySoft4_7[producto-1].precioKilo / 5) - ((arraySoft4_7[producto-1].precioKilo / 5)*descuento);
                } else if (producto >= 9 && producto <= 16) {
                    valor = (arrayNubeSoft4_7[producto-9].precioKilo / 10) - ((arrayNubeSoft4_7[producto-9].precioKilo / 10)*descuento);
                } else if (producto >= 17) {
                    valor = (arrayNubeSoft2_7[producto-17].precioKilo / 10) - ((arrayNubeSoft2_7[producto-17].precioKilo / 10)*descuento);
                }
            }
            cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
            carrito = carrito + (cantidad*valor);
            alert("Tu carrito: $" + carrito);
            final = parseInt(prompt("1) Seguir comprando\n2) Finalizar compra"));
        } else if (filtro == 3) {
            let tipoTejido = parseInt(prompt("Lista de tipos de tejidos:\n1) Aguja Nº6, tricot y crochet\n2) Aguja Nº4, tricot, crochet y máquina familiar"));
            while(tipoTejido !== 1 && tipoTejido !== 2) {
                tipoTejido = parseInt(prompt("Por favor, ingresar uno de los pesos listados:\n1) Aguja Nº6, tricot y crochet\n2) Aguja Nº4, tricot, crochet y máquina familiar"))
            }
            if (tipoTejido == 1) {
                for (let i = 0; i < arraySoft4_7.length ; i++) {
                    arraySoft4_7[i].info();
                }
                for (let i = 0; i < arrayNubeSoft4_7.length ; i++) {
                    arrayNubeSoft4_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = (arraySoft4_7[producto-1].precioKilo / 5) - ((arraySoft4_7[producto-1].precioKilo / 5)*descuento);
                } else if (producto >= 9 && producto <= 16) {
                    valor = (arrayNubeSoft4_7[producto-9].precioKilo / 10) - ((arrayNubeSoft4_7[producto-9].precioKilo / 10)*descuento);
                } else if (producto >= 17) {
                    valor = (arrayNubeSoft2_7[producto-17].precioKilo / 10) - ((arrayNubeSoft2_7[producto-17].precioKilo / 10)*descuento);
                }
            }
            if (tipoTejido == 2) {
                for (let i = 0; i < arrayNubeSoft2_7.length ; i++) {
                    arrayNubeSoft2_7[i].info();
                }
                let producto = parseInt(prompt("Si alguno de los productos es de tu interes podes ingresar el número de artículo"));
                let cantidad = 0;
                if (producto <= 8) {
                    valor = (arraySoft4_7[producto-1].precioKilo / 5) - ((arraySoft4_7[producto-1].precioKilo / 5)*descuento);
                } else if (producto >= 9 && producto <= 16) {
                    valor = (arrayNubeSoft4_7[producto-9].precioKilo / 10) - ((arrayNubeSoft4_7[producto-9].precioKilo / 10)*descuento);
                } else if (producto >= 17) {
                    valor = (arrayNubeSoft2_7[producto-17].precioKilo / 10) - ((arrayNubeSoft2_7[producto-17].precioKilo / 10)*descuento);
                }
            }
            cantidad = parseInt(prompt("¿Cuántos desea comprar?"));
            carrito = carrito + (cantidad*valor);
            alert("Tu carrito: $" + carrito);
            final = parseInt(prompt("1) Seguir comprando\n2) Finalizar compra"));
        }
        if (final == 2 && carrito < 10000) {
            alert("Tu carrito tiene un valor de $" + carrito + ". Te faltan $" + (10000-carrito) + " para que la compra sea considerada mayorista.")
        }
    } while (final == 1 || carrito < 10000);
    mail = prompt("Ingresar mail para recibir los datos y poder realizar el pago"); 
    alert("Muchas gracias por tu compra. Se enviaron los datos a " + mail);
} else if (venta == 3) {
    // En caso de no requerir ningún servicio procedemos a saludar.
    alert("Esperamos que vuelva pronto");
}
