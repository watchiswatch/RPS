const buttonArray = document.querySelectorAll('.btn')
const myResult = document.querySelector('.my-result')
const comResult = document.querySelector('.com-result')
const myScore = document.querySelector('.my-score')
const comScore = document.querySelector('.com-score')
const selectElem = document.querySelector('#scores')

let WINNING_SCORE = 5;

selectElem.addEventListener('change', (e => {
    WINNING_SCORE = parseInt(e.target.value);
}))



for(let i = 0; i < buttonArray.length; i++) {

    buttonArray[i].addEventListener('click',myEventHandler)
    buttonArray[i].addEventListener('click',comEventHandler)
    buttonArray[i].addEventListener('click',upScore)
}


function myEventHandler(event) {
    myResult.textContent = event.target.textContent
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function comEventHandler(event) {
    const comRandom = rand(0, 2)
    if (comRandom === 0) {
        comResult.textContent = "Rock"
    } else if(comRandom === 1) {
        comResult.textContent = "Scissors"
    } else {
        comResult.textContent = "Paper"
    }
}

function upScore() {
    let myChoice = 0
    if (myResult.textContent === "Rock") {
        myChoice = 0
    } else if(myResult.textContent === "Scissors") {
        myChoice = 1
    } else {
        myChoice = 2
    }
    let comChoice = 0
    if (comResult.textContent === "Rock") {
        comChoice = 0
    } else if(comResult.textContent === "Scissors") {
        comChoice = 1
    } else {
        comChoice = 2
    }
    if (myChoice === comChoice) {
    } else if(myChoice === 0) {
        if (comChoice === 1) {
            myScore.textContent++
        } else {
            comScore.textContent++
        }
    } else if(myChoice === 1) {
        if (comChoice === 2) {
            myScore.textContent++
        } else {
            comScore.textContent++
        }
    } else if(myChoice === 2) {
        if (comChoice === 0) {
            myScore.textContent++
        } else {
            comScore.textContent++
        }
    }

    console.log(`WINNING_SCORE: ${WINNING_SCORE}`)
    console.log(`myScore.textContent: ${myScore.textContent}`)
    console.log(`comScore.textContent: ${comScore.textContent}`)

    if(parseInt(myScore.textContent) === WINNING_SCORE || parseInt(comScore.textContent) === WINNING_SCORE){
        console.log('GAME SET')
        // Stop the game
        for(let i = 0; i < buttonArray.length; i++) {
            buttonArray[i].disabled = true
        }
    }
}
