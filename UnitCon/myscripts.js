const numberValue = document.getElementById("number")
const conversion1 = document.getElementById("group-1")
const conversion2 = document.getElementById("group-2")
const conversion3 = document.getElementById("group-3")


document.getElementById("convert-btn").addEventListener("click", function(){
    number = Number(numberValue.value) 
    conversion1.innerHTML = `
    <div>
    <h3>Length (Meter/Feet)<h3>
    <p>${number} meters = ${(number * 3.281).toFixed(3)} feet | ${number} feet = ${(number / 3.281).toFixed(3)} meters<p>
    <div>
    `
    conversion2.innerHTML = `
    <div>
    <h3>Volume (Liters/Gallons)<h3>
    <p>${number} liters = ${(number * 0.264).toFixed(3)} gallons | ${number} gallons = ${(number / 0.264).toFixed(3)} liters<p>
    <div>
    `
    conversion3.innerHTML = `
    <div>
    <h3>Mass (Kilograms/Pounds)<h3>
    <p>${number} kilos = ${(number * 2.204).toFixed(3)} pounds | ${number} pounds = ${(number / 2.204).toFixed(3)} kilos<p>
    <div>
    `
})