const inpt = document.getElementById("input-el")
const len = document.getElementById("length-el")
const vol = document.getElementById("volume-el")
const mass = document.getElementById("mass-el")
const btn =  document.getElementById("convert-btn")
const themebtn = document.getElementById("theme-btn")
const resetbtn = document.getElementById("reset-btn")
const meter = 3.281
const liter = 0.264
const kilo = 2.204
function convert(){
    let value = Number(inpt.value)
    let metersToFeet = value * meter
    let feetToMeters = value / meter
    len.textContent =` ${value} meters = ${metersToFeet.toFixed(2)} feet || ${value} feet = ${feetToMeters.toFixed(2)} meters`
    let litersToGallons = value *liter
    let gallonsToLiters = value/liter
    vol.textContent = `${value} liters = ${litersToGallons.toFixed(2)} gallons || ${value} gallons = ${gallonsToLiters.toFixed(2)} liters`
    let kgToPounds = value * kilo
    let poundsToKg = value/kilo
    mass.textContent = `${value} kg = ${kgToPounds.toFixed(2)} pounds|| ${value} pounds = ${poundsToKg.toFixed(2)} kg`

}
btn.addEventListener("click", function(){
    convert()
})
inpt.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        convert()
    }
})

themebtn.addEventListener("click", function(){
    document.body.classList.toggle("dark")
})
resetbtn.addEventListener("click", function(){
    inpt.value = ""
    len.textContent = ""
    vol.textContent = ""
    mass.textContent = ""
})




