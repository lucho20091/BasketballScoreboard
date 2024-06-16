const home = document.getElementById('number1');
const guest = document.getElementById('number2');
const leader = document.getElementById('leader');
let countHome = 0
let countGuest = 0


function add(par1, par2){
    if (par1 === "home"){
        countHome +=  par2
    } else if (par1 === "guest"){
        countGuest += par2
    }
    home.textContent = countHome
    guest.textContent = countGuest
    displayTeamWinning(countHome, countGuest)
}

function displayTeamWinning(Home, Guest){
    let message
    if (Home > Guest){
        message = "home is winning"
    } else if (Guest > Home){
        message = "guest is winning"
    } else {
        message = "its a tie"
    }
    leader.textContent = message
}

function reset(){
    countHome = 0
    countGuest = 0
    home.textContent = countHome
    guest.textContent = countGuest
    leader.textContent = ""
}