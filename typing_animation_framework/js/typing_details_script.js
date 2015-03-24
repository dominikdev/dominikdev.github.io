function pageLoad(){
       thePageLoaded();
       variablesForDetails();
       nextStepTimeOut(1);
}

function variablesForDetails(){
       
       thePages = ["wrapper s-one","wrapper s-two","wrapper s-three","wrapper s-four"];
       pageElements = new Array();
       pageElements[0] = document.getElementById('wrap');
       pageElements[1] = document.getElementById('s-one-next');
       pageElements[2] = document.getElementById('s-two-next');
       pageElements[3] = document.getElementById('s-three-next');
       pageElements[4] = document.getElementById('go-to-top');
       
       
}

function nextStepTimeOut(index){
       
       for(var i=1; i<4;i++){
              pageElements[i].setAttribute("class",'next-button is-hidden');
       }
       if(index == 5){
              
       } else{
              pageElements[index].setAttribute("class",'next-button is-hidden');
       }

       setTimeout(function(){
              pageElements[index].setAttribute("class","next-button");
       },2500);
}

function moveToPg(pg){
       if(pg == 2){
              pageElements[4].setAttribute("class","");
              pageElements[0].setAttribute("class",thePages[1]);
              nextStepTimeOut(2);
       }else if(pg == 3){
              pageElements[0].setAttribute("class",thePages[2]);
              nextStepTimeOut(3); 
       }else if(pg == 4){
              pageElements[0].setAttribute("class",thePages[3]);
              nextStepTimeOut(5); 
       } else if(pg == 1){
              pageElements[0].setAttribute("class",thePages[0]);
              nextStepTimeOut(1);
       }
}
function goToTop(){
       moveToPg(1);
       pageElements[4].setAttribute("class","next-button is-hidden is-disabled");
       messageWrapper.innerHTML = "";
       setTimeout(function(){
              thePageLoaded()},1500);
       
}