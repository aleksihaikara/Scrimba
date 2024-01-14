/* HOME */
homeScore = 0

function displayHomeScore(){
    document.getElementById("score-home").textContent = homeScore
}

document.getElementById("home-btn-1").addEventListener("click", function(){
    homeScore += 1
    displayHomeScore()
    homelead()
})

document.getElementById("home-btn-2").addEventListener("click", function(){
    homeScore += 2
    displayHomeScore()
    homelead()
})

document.getElementById("home-btn-3").addEventListener("click", function(){
    homeScore += 3
    displayHomeScore()
    homelead()
})

/* GUEST */
guestScore = 0

function displayGuestScore(){
    document.getElementById("score-guest").textContent = guestScore
}

document.getElementById("guest-btn-1").addEventListener("click", function(){
    guestScore += 1
    displayGuestScore()
    guestlead()
})

document.getElementById("guest-btn-2").addEventListener("click", function(){
    guestScore += 2
    displayGuestScore()
    guestlead()
})

document.getElementById("guest-btn-3").addEventListener("click", function(){
    guestScore += 3
    displayGuestScore()
    guestlead()
})

/* NEW GAME */
document.getElementById("newGame").addEventListener("click", function(){
totalScore = homeScore + guestScore
    if (totalScore > 0){
        pastScores()
        guestScore = 0
        homeScore = 0
        displayGuestScore()
        displayHomeScore()
        document.getElementById("score-guest").classList.remove("leader")
        document.getElementById("score-home").classList.remove("leader")
    }
})

/* DISPLAY LEADER */

function homelead(){
    if (homeScore > guestScore){
        document.getElementById("score-home").classList.add("leader")
        document.getElementById("score-guest").classList.remove("leader")
    } 
    if (homeScore === guestScore){
        document.getElementById("score-guest").classList.remove("leader")
        document.getElementById("score-home").classList.remove("leader")
    }
}

function guestlead(){
    if (homeScore < guestScore){
        document.getElementById("score-guest").classList.add("leader")
        document.getElementById("score-home").classList.remove("leader")
    }
    if (homeScore === guestScore){
        document.getElementById("score-guest").classList.remove("leader")
        document.getElementById("score-home").classList.remove("leader")
    }
}

/* PAST STATS */

function pastScores(){
    document.getElementById("gameHistory").innerHTML += `
        <ul>
            <li>${homeScore} - ${guestScore}</li>
        </ul>
        `
}

/* HISTORY WINDOW */

document.getElementById("history-btn").addEventListener("click", function(){
    if (document.getElementById("gameHistory").classList.contains("hidden")) {
        document.getElementById("gameHistory").classList.remove("hidden")
    } else {
        document.getElementById("gameHistory").classList.add("hidden")
    }
})