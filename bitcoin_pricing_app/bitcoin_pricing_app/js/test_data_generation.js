function findMaxForData(input){
       var maxData = 0;
       for(var x=0; x<input.length;x++){
              if(input[x]>maxData){
                     maxData = input[x];
              }   
       }
       return maxData;
}

function findMinForData(input){
       var minData = input[0];
       for(var x=1;x<input.length;x++){
              if(input[x]<minData){
                     minData = input[x];
              }
       }
       return minData;
}

function generateDataFor(num){
       var testData = new Array();
       var days = 0;
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
       
       for(var x=0; x<days;x++){
              if(x==0){
                     testData.push(Math.floor((Math.random() * 400) + 250));
              } else{
                     var nextDay = Math.floor((Math.random() * 75) + 1);
                     var negOrPos = Math.floor((Math.random() * 2) + 1);
                      if(testData[x-1]<200){
                            negOrPos = 1;
                     } else if(testData[x-1]>1100){
                            negOrPos = 2;
                     }
                     if(negOrPos == 1){
                            testData.push(testData[x-1]+nextDay);
                     } else{
                            testData.push(testData[x-1]-nextDay);
                     }
                     
              }
       }
       
       return testData;
}