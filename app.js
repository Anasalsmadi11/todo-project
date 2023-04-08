"use strict"
let arr = []

let userName = prompt("whats your name?").toUpperCase()
userName == "" ? alert("invalid user name") : "";
answersArr(userName)

let userGender = prompt("could you tell me about your gender please?").toLowerCase()
userGender == "" ? alert("invalid user gender") : "";
answersArr(userGender)

let userAge = prompt("whats your age?")
userAge == "" ? alert("invalid user age") : userAge <= 0 ? alert("you are under the required age") : "";
answersArr(userAge)

let confirmMsge = confirm("do you want to skip the welcoming message?")


let questionOne = prompt('have you ever been to England?')
questionOne == "" ? alert("invalid answer") : "";
answersArr(questionOne)

let questionTwo = prompt("is football your favourite sport?")
questionTwo == "" ? alert("invalid answer") : "";
answersArr(questionTwo)

let questionThree = prompt("do you speak english?")
questionThree == "" ? alert("invalid answer") : "";
answersArr(questionThree)


function answersArr(index) {
    // let arr =[] i identify it at the top of the page not here because it will empty it every time i call the function
    if (index !== "") {
        arr.push(index)
    } else {
        arr.push('invalid')
    }
}
// console.log(arr)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

function genderMessage() {
    if (confirmMsge === false) {

        if (userGender == "male") {
            alert(`welcome Mr ${userName}`)

        } else if (userGender == "female") {
            alert(`welcome Ms ${userName}`)
        } else {
            alert(`welcome ${userName}`)
        }

    }
}
genderMessage()



// function userInput(user){
//     let emptyInput = ""
//     switch (emptyInput) {
//         case userName:
//             alert("invalid")
//             break
//         case userGender:
//             alert("invalid")
//             break
//         case userAge:
//             alert("invalid")
//             break;
//     }

// }
