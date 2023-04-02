"use strict"
let userName = prompt("whats your name?").toUpperCase()
let userGender= prompt("could you tell me about your gender pleade?").toLowerCase()
let userAge = prompt("whats your age?")
userAge <= 0? alert("you are under the required age"): "";

let confirmMsge = confirm("do you want to skip the welcoming message?")

 if(userGender == "male"){
    alert(`welcome Mr ${userName}`)

}else if(userGender == "female"){
    alert(`welcome Ms ${userName}`)
}else{
    alert(`welcome ${userName}`)
}