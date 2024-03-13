



const inputEtaElement = document.getElementById('age')

const inputkmElement = document.getElementById('inputKm')

const buttonElement = document.getElementById('invio')

buttonElement.addEventListener('click', function () {
    const km = parseInt(inputkmElement.value) //numero grazie a parseInt
    const age = parseInt(inputEtaElement.value) //string
    console.log(km, age)
    //calcolare costo biglietto SE il biglietto costa 0,21 al km allora PREZZO UNITARIO MOLTIPLICATO PER KM

    const priceKilometerUnit = 0.21 //number
    const pricekm = priceKilometerUnit * inputkmElement



    let minorenne
    let anziano



    const resultAge = document.getElementById('resultAge')
    const resultKm = document.getElementById('resultKm')
    const resultPrice = document.getElementById('resultPrice')


    if (age == "0") {
        resultAge.innerHTML = "+18"
        resultKm.innerHTML = km
        resultPrice.innerHTML = parseInt(resultPrice.toFixed(2))
    }
    else if (age == "1") {
        minorenne = pricekm / 100 * 20
        resultPrice = pricekm - minorenne
        resultAge.innerHTML = "-18"
        resultKm.innerHTML = km
        resultPrice.innerHTML = parseInt(resultPrice.toFixed(2))
    }
    else if (age == "2") {
        anziano = pricekm / 100 * 40
        anzianoSconto = pricekm - anziano
        resultAge.innerHTML = "+65"
        resultKm.innerHTML = km
        resultPrice.innerHTML = parseInt(resultPrice.toFixed(2))
    }

})







