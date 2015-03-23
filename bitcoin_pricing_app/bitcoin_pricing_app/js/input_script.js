function setupInputVal(){
       
       pAmount = document.getElementById('p-amount-input');
       pBank = document.getElementById('p-bank-select');
       
       wAmount = document.getElementById('w-amount-input');
       wBank = document.getElementById('w-bank-select');
       
       pAmount.addEventListener('focus',amountInputHasFocus);
       pAmount.addEventListener('click',function(e){e.preventDefault()});
       pAmount.addEventListener('keydown',keyUpInAmount);
       
       wAmount.addEventListener('focus',amountInputHasFocus);
       wAmount.addEventListener('keydown',keyUpInAmount);
       
}

function amountInputHasFocus(e){
       e.target.select();
       
}
function keyUpInAmount(e){
       var k = e.keyCode;
       console.log("+");
       if(isAllowedKey(k)){       
       } else{
              event.preventDefault()
       }
}
function isAllowedKey(input){
       if(input>=48 && input <=57){
              return true;
       } else if(input>=96 && input <=105){
              return true;
       } else if(input == 190 || input == 110 || input == 9 || input == 13 || input == 8 || input == 46 || input == 37 || input == 39){
              return true;
       } else{
              return false;
       }
       return false;
}