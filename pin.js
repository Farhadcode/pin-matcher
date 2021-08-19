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
// random pin genaration 
function generatePin(){
    const pin = getPin();
    // console.log(pin);
    document.getElementById('display-pin').value = pin;
}

pinVerify = () =>{
    const pin = document.getElementById('display-pin').value;
    const inputNumber =  document.getElementById('input-number').value;
    const pinrSuccessNotify = document.getElementById('success-notify');
    const pinErrorNotify = document.getElementById('fail-notify');
  if (pin == inputNumber) {
     
      pinrSuccessNotify.style.display = 'block';
      window.location.href ='bank/index.html'
      pinErrorNotify.style.display = 'none';
     
  }else{
    
    pinErrorNotify.style.display = 'block';
    pinrSuccessNotify.style.display = 'none';
  }

}

// pin  set in display

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