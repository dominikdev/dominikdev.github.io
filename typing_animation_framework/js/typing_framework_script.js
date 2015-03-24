function thePageLoaded(){
       typingScriptOptions();
       fillMessage(message,messageWrapper);
       initializeVariables();
}



function initializeVariables(){
       
       letters = messageWrapper.getElementsByClassName('letter');
       currentLetter = 0;
       pause = 0;
       typingSpeed;
       
       markerFlash=setInterval(
              function () {

                     var mark = document.getElementById('marker');
                     var currentClass = mark.getAttribute('class');
                     if(currentClass == 'hidden'){
                            mark.setAttribute('class','');
                     } else{
                            mark.setAttribute('class','hidden');
                     }
                     
              }, 300);
       
       letterTyping=setInterval(function () {
              typeLetters();
       }, typingSpeed);
}

function fillMessage(m,w){
    
    var x;
    var theHTMLMessage = "<span>";
       
    for(x = 0; x<m.length;x+=1){
        if(m.charCodeAt(x) == 32){
            theHTMLMessage+="</span>";
            theHTMLMessage+="<span class='letter hidden'>&nbsp;</span>";
            theHTMLMessage+="<span class='word'>";
        } else{
            theHTMLMessage+="<span class='letter hidden'>"+m.charAt(x)+"</span>";   
        }
    }
    theHTMLMessage+="<span id='marker'>|</span>";
    w.innerHTML = theHTMLMessage; //This may not work
    
}

function typeLetters(){
    
    if(currentLetter == letters.length){ //slight break between spaces
              clearInterval(letterTyping);
              console.log("1");
    } else if(letters[currentLetter].innerHTML == "&nbsp;" && pause<2){
              pause +=1;
              console.log("2");
    }else{
        pause = 0;
        letters[currentLetter].setAttribute('class','letter');
        currentLetter+=1;
           console.log("3");
    }
}
