let pais = prompt("De que pais sos?")

while (pais != "Argentina" && pais != "argentina"){
    alert("Bienvenido a Hoyts " + pais);
        pais = prompt("No tenemos salas disponibles en este pais por el momento, queres probar con otro?");
}
alert("Tenemos mas de 500 sucursales en Argentina")
let cantidadEntradas = parseInt(prompt("Cuantas entradas necesitas?"));

for(let i= 600; i>= cantidadEntradas ; i++){
    let resultado = cantidadEntradas * i;
    
    alert('El precio por una entrada es de '+ i + ' pesos argentinos y por '+ cantidadEntradas + ' entradas'+ ' es de ' + resultado + ' pesos argentinos.' );
    if(resultado >= 1){
        break;
    }
} 
let tarjeta = prompt("Como vas a pagar? Visa, Mastercard o Efectivo")
if(tarjeta == "Visa"){
    alert("Tenes 10% de descuento con Visa");
} else if(tarjeta == "Mastercard"){
    alert("Tenes 5% de descuento con Master Card");
} else {
    alert("En efectivo tenes 20% de decuento");
        
}


do {
    cupon= prompt("Ingrese un Cupon. Ej:Cupon2022")
    if(cupon != "Cupon2022"){
    document.write(cupon + " :Cupon no valido" + "<br/>")
    }else {
        document.write(cupon + " :Cupon Valido")
    }
} while (cupon != "Cupon2022");

