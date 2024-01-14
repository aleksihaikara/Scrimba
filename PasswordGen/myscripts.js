const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const lettersNumbers = letters.concat(numbers)
const lettersSymbols = letters.concat(symbols)

const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const symbolsEl = document.getElementById("symbols")
const numbersEl = document.getElementById("numbers")
const length = document.getElementById("lenght")

document.getElementById("generate-btn").addEventListener("click", function(){
    // letters only
    if (symbolsEl.checked === false && numbersEl.checked === false) {
        password1.textContent = ""
        for(let i = 0; i < length.value; i++) {
            let randomIndex = Math.floor( Math.random() * letters.length)
            password1.textContent += (letters[randomIndex])
        }
        password2.textContent = ""
        for(let i = 0; i < length.value; i++) {
            let randomIndex = Math.floor( Math.random() * letters.length )
            password2.textContent += (letters[randomIndex])
        }
    // letters and numbers
    } else if (symbolsEl.checked === false && numbersEl.checked === true) {
            password1.textContent = ""
            for(let i = 0; i < length.value; i++) {
                let randomIndex = Math.floor( Math.random() * lettersNumbers.length)
                password1.textContent += (lettersNumbers[randomIndex])
            }
            password2.textContent = ""
            for(let i = 0; i < length.value; i++) {
                let randomIndex = Math.floor( Math.random() * lettersNumbers.length )
                password2.textContent += (lettersNumbers[randomIndex])
            }
    // letters and symbols
    } else if (symbolsEl.checked === true && numbersEl.checked === false) {
        password1.textContent = ""
        for(let i = 0; i < length.value; i++) {
            let randomIndex = Math.floor( Math.random() * lettersSymbols.length)
            password1.textContent += (lettersSymbols[randomIndex])
        }
         password2.textContent = ""
        for(let i = 0; i < length.value; i++) {
             let randomIndex = Math.floor( Math.random() * lettersSymbols.length )
             password2.textContent += (lettersSymbols[randomIndex])
        }    
    // all characters
    } else {
        password1.textContent = ""
        for(let i = 0; i < length.value; i++) {
            let randomIndex = Math.floor( Math.random() * characters.length )
            password1.textContent += (characters[randomIndex])
        }
        password2.textContent = ""
        for(let i = 0; i < length.value; i++) {
            let randomIndex = Math.floor( Math.random() * characters.length )
            password2.textContent += (characters[randomIndex])
        }
    }
})

document.getElementById("gear-icon").addEventListener("click", function(){
    document.getElementById("settings").classList.toggle('hide')
})

