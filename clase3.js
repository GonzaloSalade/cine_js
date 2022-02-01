let nombre = prompt("Cual es tu nombre?");

let pais = prompt("De que pais sos?")

while (pais != "Argentina" && pais != "argentina"){
    alert("Bienvenido a Hoyts " + pais);
        pais = prompt("No tenemos salas disponibles en este pais por el momento, queres probar con otro?");
}
alert("Bienvenido " + nombre + " Tenemos mas de 500 sucursales en Argentina")



class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto ("Balde de Pochoclo", 1000);
console.log(producto1);
const producto2 = new Producto ("Entrada", 600);
console.log(producto2);
const producto3 = new Producto ("Bebida", 500);
const producto4 = new Producto ("Chocolate", 300);

let Cartelera = alert("Peliculas de hoy en cartelera: Harry Potter, Toy Story, El Padrino, Click")
let pelicula = prompt("Que pelicula queres ver?");
function peliculaCartelera (){
    switch(pelicula.toUpperCase()){
        case "HARRY POTTER":
            alert("Elegiste Harry Potter");
            break;
        case "TOY STORY":
            alert("Elegiste Toy Story");
            break;
        case "EL PADRINO":
            alert("Elegiste El padrino");
            break;
        case "CLICK":
            alert("Elegiste Click");
            break;
        default:
            alert("No tenemos esa pelicula disponible")
    }
}
peliculaCartelera();
let cantidadEntradas = prompt("Cuantas entradas necesitas?")
let i = producto2.precio;
let resultado = cantidadEntradas * i;

for(let i= producto2.precio; i>= cantidadEntradas ; i++){
    let resultado = cantidadEntradas * i;
    
    alert('El precio por una entrada es de '+ i + ' pesos argentinos y por '+ cantidadEntradas + ' entradas'+ ' es de ' + resultado + ' pesos argentinos.' );
    if(resultado >= 1){
        break;
    }
} 

let extras = prompt("Queres agregar un Balde de pochoclos?")
let resultadoConExtra = producto1.precio + resultado;
let precioFinalVisaExtra = resultadoConExtra - (resultadoConExtra * 0.10);
let precioFinalMastercardExtra = resultadoConExtra - (resultadoConExtra * 0.05);
let precioFinalEfectivoExtra = resultadoConExtra - (resultadoConExtra * 0.20);
if (extras == "si"){
    alert("El precio del balde de pochoclos es de $" + producto1.precio);
    alert("El precio final es de " + (producto1.precio + resultado ));
        let tarjeta = prompt("Como vas a pagar? Visa, Mastercard o Efectivo");
        if(tarjeta == "Visa"){
            alert("Tenes 10% de descuento con Visa");
            alert("Precio final con tarjeta Visa es $" + precioFinalVisaExtra);
        } else if(tarjeta == "Mastercard"){
            alert("Tenes 5% de descuento con Master Card");
            alert("Precio final con tarjeta Visa es $" + precioFinalMastercardExtra);
        } else {
            alert("En efectivo tenes 20% de decuento");
            alert("Precio final con tarjeta Visa es $" + precioFinalEfectivoExtra);
        }
} else {
    alert("El precio final es de " + resultado)
        let precioFinalVisa = resultado - (resultado * 0.10);
        let precioFinalMastercard = resultado - (resultado * 0.05);
        let precioFinalEfectivo = resultado - (resultado * 0.20); 
        let tarjeta = prompt("Como vas a pagar? Visa, Mastercard o Efectivo");
        if(tarjeta == "Visa"){
            alert("Tenes 10% de descuento con Visa");
            alert("Precio final con tarjeta Visa es $" + precioFinalVisa);
        } else if(tarjeta == "Mastercard"){
            alert("Tenes 5% de descuento con Master Card");
            alert("Precio final con tarjeta Visa es $" + precioFinalMastercard);
        } else {
            alert("En efectivo tenes 20% de decuento");
            alert("Precio final con tarjeta Visa es $" + precioFinalEfectivo);
    }
}


// do {
//     cupon= prompt("Ingrese un Cupon. Ej:Cupon2022")
//     if(cupon != "Cupon2022"){
//     document.write(cupon + " :Cupon no valido" + "<br/>")
//     }else {
//         document.write(cupon + " :Cupon Valido")
//     }
// } while (cupon != "Cupon2022");

