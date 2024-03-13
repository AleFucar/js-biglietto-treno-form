



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
    const pricekm = priceKilometerUnit * inputkmElement
    let minorenne
    let anziano


    if (age == "0") {
        resultAge.innerHTML = "+18"
        resultKm.innerHTML = km
        resultPrice.innerHTML = parseInt(pricekm)
    }
    else if (age == "1") {
        minorenne = pricekm / 100 * 20
        minorenneSconto = pricekm - minorenne
        resultAge.innerHTML = "-18"
        resultKm.innerHTML = km
        resultPrice.innerHTML = parseInt(minorenneSconto)

    }
    else if (age == "2") {
        anziano = pricekm / 100 * 40
        anzianoSconto = pricekm - anziano
        resultAge.innerHTML = "+65"
        resultKm.innerHTML = km
        resultPrice.innerHTML = parseInt(anzianoSconto)
    }

})







