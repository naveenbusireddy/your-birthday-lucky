const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");

const luckyValue = luckyNumber.value;
// let sum = 0;
function checkBirthdayLuckyNumber() {
    const dob = (dateOfBirth.value).replaceAll("-", "");    
    const sum = calculateSum(dob);
}

function calculateSum(dob) 
{
    let sum = 0;
    for(let  i=0; i<dob.length; i++) 
    {
        sum = sum+Number(dob.charAt[i]);
    }    
    return sum;
}
    
function checkLuckyNumber(sum, luckyValue) 
{
    if(sum % luckyValue === 0 )
        {
            console.log("your Birthday is lucky");
        }
        else 
        {
            console.log("Your Birthday is not lucky")
        }
}

// console.log(sum, luckyNumber.value);
checkLuckyNumber();
checkButton.addEventListener("click", checkBirthdayLuckyNumber);