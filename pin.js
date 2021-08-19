function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else{
        // console.log('got 3 digit and recalling again',pin);
      return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    // console.log(pin);
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',keyClick = (event) =>{
   const number = event.target.innerText;
 const calculatorInput =  document.getElementById('input-number');

 if(isNaN(number)){
     if (number == "C") {
        calculatorInput.value = '' ;
     }
 }
 else{
    const  previousNumber = calculatorInput.value;
    const newNumber = previousNumber + number;
    calculatorInput.value = newNumber;
 }
 
})