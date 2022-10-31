//variables
let opcionMain
let number1
let number2
let number3
let resultado
let cant
let i = 0
const numberArray = []
const resultArray = []
const divisas = [
    { moneda: 'USD', valorCompra: 290, valorVenta: 295 },
    { moneda: 'EUR', valorCompra: 315, valorVenta: 320 },
    { moneda: 'GBP', valorCompra: 390, valorVenta: 400 },
    { moneda: 'BRL', valorCompra: 55, valorVenta: 58 },
];


//functions
function sumar(number1, number2, number3) {
    cant = Number(prompt("Desea sumar 2 o 3 números?"))
    if (cant === 2) {
        number1 = Number(prompt("Ingrese el primer numero:"))
        number2 = Number(prompt("Ingrese el segundo numero:"))
        numberArray.push(number1, number2)
        resultado = number1 + number2
        console.log("Resultado: ", resultado)
    } else if (cant === 3) {
        number1 = Number(prompt("Ingrese el primer numero:"))
        number2 = Number(prompt("Ingrese el segundo numero:"))
        number3 = Number(prompt("Ingrese el tercer numero:"))
        numberArray.push(number1, number2, number3)
        resultado = number1 + number2 + number3
        console.log("Resultado: ", resultado)
    }
    resultArray.push(resultado)
}
function restar(number1, number2, number3) {
    cant = Number(prompt("Desea restar 2 o 3 números?"))
    if (cant === 2) {
        number1 = Number(prompt("Ingrese el primer numero:"))
        number2 = Number(prompt("Ingrese el segundo numero:"))
        numberArray.push(number1, number2)
        resultado = number1 - number2
        console.log("Resultado: ", resultado)
    } else if (cant === 3) {
        number1 = Number(prompt("Ingrese el primer numero:"))
        number2 = Number(prompt("Ingrese el segundo numero:"))
        number3 = Number(prompt("Ingrese el tercer numero:"))
        numberArray.push(number1, number2, number3)
        resultado = number1 - number2 - number3
        console.log("Resultado: ", resultado)
    }
    resultArray.push(resultado)
}
function multiplicar(number1, number2, number3) {
    cant = Number(prompt("Desea multiplicar 2 o 3 números?"))
    if (cant === 2) {
        number1 = Number(prompt("Ingrese el primer numero:"))
        number2 = Number(prompt("Ingrese el segundo numero:"))
        numberArray.push(number1, number2)
        resultado = number1 * number2
        console.log("Resultado: ", resultado)
    } else if (cant === 3) {
        number1 = Number(prompt("Ingrese el primer numero:"))
        number2 = Number(prompt("Ingrese el segundo numero:"))
        number3 = Number(prompt("Ingrese el tercer numero:"))
        numberArray.push(number1, number2, number3)
        resultado = number1 * number2 * number3
        console.log("Resultado: ", resultado)
    }
    resultArray.push(resultado)
}
function dividir(number1, number2) {
    number1 = Number(prompt("Ingrese el primer numero:"))
    number2 = Number(prompt("Ingrese el segundo numero:"))
    numberArray.push(number1, number2)
    resultado = number1 / number2
    console.log("Resultado: ", resultado)
    resultArray.push(resultado)
}
function filterDivisas(divisas) {
    let valorDivisa = [];
    for (let divisa in divisas) {
        if (divisa.moneda === 'USD') {
            valorDivisa.push(divisas[divisa]);
        }
    }
    return valorDivisa;
}
function esPar(num){
        return num % 2 == 0;
}


//main menu
alert("Bienvenido! Elija la opción que desea:")
opcionMain = (Number(prompt("Ingrese 1 para calculadora o 2 para conversor de divisas.")))
//calculadora app
if (opcionMain == 1) {
    console.log("Calculadora simple para realizar operaciones ingresando 2 o 3 números para operar.")
    console.log("Elija la opción deseada: ")
    console.log("1 - Suma")
    console.log("2 - Resta")
    console.log("3 - Multiplicación")
    console.log("4 - División")
    console.log("5 - Informacion sobre los numeros ingresados y resultados obtenidos.")
    console.log("0 - Salir")
    //menu calculadora
    let opcion
    do {
        opcion = Number(prompt("Ingrese la opción: "))
        switch (opcion) {
            case 1:
                sumar()
                i++
                break;
            case 2:
                restar()
                i++
                break;
            case 3:
                multiplicar()
                i++
                break;
            case 4:
                dividir()
                i++
                break;
            case 5:
                alert("Los numeros ingresados son: ", numberArray)
                alert("Los resultados obtenidos son: ", resultArray)
                alert("Las operaciones realizadas fueron: ", i)
                break;
            default:
                break;
        }
        if (!parseInt(opcion) || opcion > 4 || opcion < 0) {
            break
        }
    } while (opcion !== 0);
    console.log(numberArray)
    console.log(resultArray)
    console.log("La cantidad de operaciones realizadas fueron: ", i)
    console.log("Los numeros pares ingresados son: ", numberArray.filter(esPar))
    console.log("Los resultados pares son: ", resultArray.filter(esPar))
} if (opcionMain == 2) {
    for (const divisa of divisas) {
        console.log("Código: ", divisa.id, "Moneda: ", divisa.moneda, " Valor Compra: ", divisa.valorCompra,
            "Valor venta: ", divisa.valorVenta)
    }
    console.log("------------")
    console.log("1 - Cambiar pesos argentinos a USD(dolares americanos).")
    console.log("2 - Cambiar pesos argentinos a EUR(euro).")
    console.log("3 - Cambiar pesos argentinos a GBP(libra esterlina).")
    console.log("4 - Cambiar pesos argentinos a BRL(real brasilero.")
    console.log("5 - Cambiar USD(dolares americanos) a pesos argentinos.")
    console.log("6 - Cambiar EUR(euro) a pesos argentinos.")
    console.log("7 - Cambiar GBP(libra esterlina) a pesos argentinos.")
    console.log("8 - Cambiar BRL(real brasilero) a pesos argentinos.")
    console.log("0 - Salir.")
    let opcion
    do {
        opcion = Number(prompt("Ingrese la opción: "))
        switch (opcion) {
            case 1:
                let ingreso = Number(prompt("Ingrese la cantidad de pesos a cambiar."))
                let total = ingreso / 295
                console.log("Son: ", total, " de USD.")
                break;
            case 2:
                let ingreso1 = Number(prompt("Ingrese la cantidad de pesos a cambiar."))
                let total1 = ingreso1 / 320
                console.log("Son: ", total1, " de EUR.")
                break;
            case 3:
                let ingreso2 = Number(prompt("Ingrese la cantidad de pesos a cambiar."))
                let total2 = ingreso2 / 400
                console.log("Son: ", total2, " de GBP.")
                break;
            case 4:
                let ingreso3 = Number(prompt("Ingrese la cantidad de pesos a cambiar."))
                let total3 = ingreso3 / 58
                console.log("Son: ", total3, " de BRL.")
                break;
            case 5:
                let ingreso4 = Number(prompt("Ingrese la cantidad de dolares a cambiar."))
                let total4 = ingreso4 * 290
                console.log("Son: ", total4, " de pesos argentinos.")
                break;
            case 6:
                let ingreso5 = Number(prompt("Ingrese la cantidad de EUR a cambiar."))
                let total5 = ingreso5 * 315
                console.log("Son: ", total5, " de pesos argentinos.")
                break;
            case 7:
                let ingreso6 = Number(prompt("Ingrese la cantidad de GBP a cambiar."))
                let total6 = ingreso6 * 390
                console.log("Son: ", total6, " de pesos argentinos.")
                break;
            case 8:
                let ingreso7 = Number(prompt("Ingrese la cantidad de BRL a cambiar."))
                let total7 = ingreso7 * 55
                console.log("Son: ", total7, " de pesos argentinos.")
                break;
            default:
                break;
        }
        if (!parseInt(opcion) || opcion > 8 || opcion < 0) {
            break
        }
    } while (opcion !== 0);
} {

}
