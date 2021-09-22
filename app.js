const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");


checkButton.addEventListener("click", function checkLuckyNumber() {
    
    console.log(dateOfBirth.value, luckyNumber.value);
});