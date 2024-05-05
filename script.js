const number1 = document.querySelector("#number1")
const number2 = document.querySelector("#number2")
const add1home = document.querySelector("#add1home")
const add2home = document.querySelector("#add2home")
const add3home = document.querySelector("#add3home")
const add1guest = document.querySelector("#add1guest")
const add2guest = document.querySelector("#add2guest")
const add3guest = document.querySelector("#add3guest")
const reset = document.querySelector("#reset")
const leader = document.querySelector("#leader")

let number1Count = 0
let number2Count = 0
let numberLeader = ""
number1.textContent = "0"
number2.textContent = "0"

function leaderCount(){
    if (number1Count || number2Count){
        if (number1Count >= number2Count){
            numberLeader = "Home is winning"
            leader.textContent = numberLeader
        } else {
            numberLeader = "Guest is winning"
            leader.textContent = numberLeader
        }
    }
}



add1home.addEventListener("click", () => {
    number1Count += 1
    number1.textContent = number1Count
    leaderCount()
})

add2home.addEventListener("click", () => {
    number1Count += 2
    number1.textContent = number1Count
    leaderCount()

})

add3home.addEventListener("click", () => {
    number1Count += 3
    number1.textContent = number1Count
    leaderCount()

})

add1guest.addEventListener("click", () => {
    number2Count += 1
    number2.textContent = number2Count
    leaderCount()

})

add2guest.addEventListener("click", () => {
    number2Count += 2
    number2.textContent = number2Count
    leaderCount()

})

add3guest.addEventListener("click", () => {
    number2Count += 3
    number2.textContent = number2Count
    leaderCount()

})

reset.addEventListener("click", () => {
    number1Count = 0
    number2Count = 0
    number1.textContent = number1Count
    number2.textContent = number2Count
    leader.textContent = ""
})

