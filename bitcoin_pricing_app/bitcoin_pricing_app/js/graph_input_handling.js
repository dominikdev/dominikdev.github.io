function initGraphNavVariables(){
       graphNavItems = document.getElementById('pricing-content').getElementsByClassName("graph-nav-item");
       startDateLabel = document.getElementById('start-date');
       endDateLabel = document.getElementById('end-date');
       
       theEndDate = new Date();
       endDateLabel.innerHTML = formatDate(theEndDate);
       graphNavSelected = 0;
       clickedGraphNav(1);
}
function clickedArrow(dir){
       
       if(graphNavSelected >0 && graphNavSelected <5){
              var nEndDate;
              var minDate = new Date(2013,1,1);
              var days = getDays(graphNavSelected);
              if(dir == 1){
                     nEndDate = new Date(theEndDate.getFullYear(),theEndDate.getMonth(),theEndDate.getDate()-days);
                     if(nEndDate<minDate){
                            
                     } else{
                            theEndDate = nEndDate;
                            clearGrid();
                            plotData(generateDataFor(graphNavSelected));
                            calculateDates(graphNavSelected);                           
                     }
              } else if(dir == 2){
                     var today = new Date();
                     today = formatDate(today);
                     if(formatDate(theEndDate) == today){
                                   
                     } else{
                            nEndDate = new Date(theEndDate.getFullYear(),theEndDate.getMonth(),theEndDate.getDate()+days);
                            today = new Date();
                            if(nEndDate>today){
                                   theEndDate = new Date();
                            } else{
                                   theEndDate = nEndDate;          
                            }
                            clearGrid();
                            plotData(generateDataFor(graphNavSelected));
                            calculateDates(graphNavSelected);
                     }
              }
       }

}
function clearGraphNavSelect(){
       for(var x=0;x<graphNavItems.length;x++){
              graphNavItems[x].setAttribute('class','graph-nav-item');
       }
       graphNavSelected = 0;
}
function selectGraphNav(num){
       graphNavItems[num-1].setAttribute('class','graph-nav-item select');
       graphNavSelected = num;
}
function clickedGraphNav(num){
       
       var dataToPlot = generateDataFor(num);
       clearGraphNavSelect();
       selectGraphNav(num);
       if(num==5){
              theEndDate = new Date()
       }
       calculateDates(num);
       //alert(dataToPlot.length);
       clearGrid();
       plotData(dataToPlot);
}
function formatDate(aDate){
       
       return (aDate.getMonth()+1)+"/"+aDate.getDate()+"/"+aDate.getFullYear();
}
function calculateDates(num){
       
       var days=getDays(num);
       var startDate;
       
       endDateLabel.innerHTML = formatDate(theEndDate);
       startDate = new Date(theEndDate.getFullYear(),theEndDate.getMonth(),theEndDate.getDate()-days);
       startDateLabel.innerHTML = formatDate(startDate);
}
function getDays(num){
       
       var days;
       switch(num){
              case 1:
                     days = 7;
                     break;
              case 2:
                     days = 30;
                     break;
              case 3:
                     days = 90;
                     break;
              case 4:
                     days = 365;
                     break;
              case 5:
                     days = 1095;
                     break;
       }
       return days;
}