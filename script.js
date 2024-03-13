



const inputEtaElement = document.getElementById('age')

const inputkmElement = document.getElementById('inputKm')

const buttonElement = document.getElementById('invio')

buttonElement.addEventListener('click', function () {
    const km = parseInt(inputkmElement.value) //numero grazie a parseInt
    const age = parseInt(inputEtaElement.value)
    const resultAge = document.getElementById('resultAge')
    const resultKm = document.getElementById('resultKm')
    const resultPrice = document.getElementById('resultPrice')


    console.log(km, age)
    //calcolare costo biglietto SE il biglietto costa 0,21 al km allora PREZZO UNITARIO MOLTIPLICATO PER KM

    const priceKilometerUnit = 0.21 //number
    const pricekm = priceKilometerUnit * km
    let minorenne
    let anziano
    let sconto = 0

    if (age == "0") {
        //stampa del biglietto nella card html (senza sconto)
        resultAge.innerHTML = "+18"
    }
    else if (age == "1") {
        //calcolo sconto minorenne
        sconto = pricekm / 100 * 20

        //stampa del biglietto nella card html
        resultAge.innerHTML = "-18"


    }
    else if (age == "2") {
        //Calcolo sconto anziani
        sconto = pricekm / 100 * 40
        //Stampa del biglietto della card html
        resultAge.innerHTML = "+65"

    }

    const prezzo = pricekm - sconto
    resultPrice.innerHTML = prezzo.toFixed(2) + " &euro;"
    resultKm.innerHTML = km + "Km"
})







