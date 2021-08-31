'use strict'
var oPlatillo = "";
var optBebida = "";
var cantPlatillo = 0;
var cantBebida = 0;
var Ciclo = 0;
var totalComida = 0;
var totalBebida = 0;

do {



    oPlatillo = prompt("Menu de platillos \n Seleccione la opción de su agrado: \n1. Hamburguesa de res ($40) \n2. Hot-dog ($30) \n3. Papas fritas ($25 orden) \n4. Ninguna");
    cantPlatillo = prompt("Cuantas ordenes de este platillo requiere");
    cantPlatillo = parseInt(cantPlatillo)

    optBebida = prompt("Menu de bebidas \n Seleccione la opción de su agrado: \n1. Agua natural ($20) \n2. Soda ($30) \n3. Cerveza ($45) \n4. Ninguna");
    cantBebida = prompt("Cuantas ordenes de esta bebida requiere");
    cantBebida = parseInt(cantBebida)


    switch (oPlatillo) {
        case "1":
            totalComida += 40 * cantPlatillo;
            oPlatillo = "Hamburguesa de res";
            break;
        case "2":
            totalComida += 30 * cantPlatillo;
            oPlatillo = "Hot-dog";

            break;
        case "3":
            totalComida += 25 * cantPlatillo;
            oPlatillo = "Papas fritas";

            break;

        case "4":
            totalComida += 0;
            oPlatillo = "Ninguna";

            break;

        default:
            alert("La opción seleccionada no existe, favor de recargar la página")

            break;

    }

    switch (optBebida) {
        case "1":
            totalBebida += 20 * cantBebida;
            optBebida = "Agua natural";

            break;
        case "2":
            totalBebida += 30 * cantBebida;
            optBebida = "Soda";


            break;
        case "3":
            totalBebida += 45 * cantBebida;
            optBebida = "Cerveza";


            break;

        case "4":
            totalBebida += 0;
            optBebida = "Ninguna";


            break;

        default:
            alert("La opción seleccionada no existe, favor de recargar la página")

            break;
    }

    var totalFinal = totalComida + totalBebida;
    Ciclo = prompt("¿Desea terminar su orden?: \n1. Si \n2. No");
    Ciclo = parseInt(Ciclo)



    var tbl = document.getElementById("tabla");
    var row = tbl.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    cell1.innerHTML = oPlatillo;
    cell2.innerHTML = cantPlatillo;
    cell3.innerHTML = optBebida;
    cell4.innerHTML = cantBebida;



} while (Ciclo == 2);

document.write("<p>", "El total a pagar es de: $" + totalFinal, "</p>")