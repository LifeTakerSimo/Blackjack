
//Javascript Game Blackjack



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let firstCard = getRandomInt(2,11);
let secondCard = getRandomInt(2,11);
let sum = firstCard + secondCard
let cards = [firstCard,secondCard]


let hasBlackjack = false
let isAlive = true
let message = ""

function start()
{
    document.querySelector("#cards").textContent="Cards :" + cards
    document.querySelector("#sum").textContent="Sum :" + sum
    if (sum <= 21)
    {
        message = "Do u want a new card ? "
    } else if (sum === 21) {
        message = "Whooo, You've got Blackjack "
        hasBlackjack =true
    } else {
        message = "Good luck next time  "
        isAlive = false
    }
    document.getElementById("message").textContent=message
}
function start2()
{
    start()
}
function newCard()
{
    let newCard = getRandomInt(2,11);
    sum+= newCard
    cards+="," + newCard
    start() ;
}

 