const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

// let sum = 0;
function checkBirthdayLuckyNumber() {
    const dob = (dateOfBirth.value).replaceAll("-", "");
    const luckyValue = luckyNumber.value;
    const sum = calculateSum(dob);
    checkLuckyNumber(sum, luckyValue);
}

function calculateSum(dob) {
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

function checkLuckyNumber(sum, luckyValue) {
    if (sum && luckyValue) {
        if (sum % luckyValue === 0) {
            outputBox.innerText = "your Birthday is lucky 😊😊";
        } else {
            outputBox.innerText = "Your Birthday is not lucky 😫😫";
        }
    } else {
        outputBox.innerText = "Both Birthday and Lucky Number are required! 😡"
    }
}

checkButton.addEventListener("click", checkBirthdayLuckyNumber);