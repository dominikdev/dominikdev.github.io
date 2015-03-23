function initializeVariables(){
       c = document.getElementById("graph-canvas");
       ctx = c.getContext("2d");
       drawBackground();
       minDataLabel = document.getElementById("min-data");
       maxDataLabel = document.getElementById("max-data");

}
function clearGrid(){
       ctx.clearRect(0,0,400,400);
       drawBackground();
}
function drawBackground(){
       
       ctx.fillStyle = "#c6a000";
       ctx.fillRect(0,0,400,200);
       
}

function updateDetailsForData(input){
       var gStart = document.getElementById('graph-start');
       var gEnd = document.getElementById('graph-end');
       var gHigh = document.getElementById('graph-high');
       var gLow = document.getElementById('graph-low');
       var changeWrap = document.getElementById('gd-change-wrapper');
       var changeData = document.getElementById('gd-change-data');
       
       gStart.innerHTML = "$"+input[0]+".00";
       gEnd.innerHTML = "$"+input[input.length-1]+".00";
       gHigh.innerHTML = "$"+findMaxForData(input)+".00";
       gLow.innerHTML = "$"+findMinForData(input)+".00";
       
       var dataChange =  input[input.length-1] - input[0];
       if(dataChange>0){
              changeWrap.setAttribute('class','up');
       } else{
              changeWrap.setAttribute('class','down');
       }
       changeData.innerHTML = "$"+dataChange+".00";
}

function plotData(input){
       
       var xCoor = generateDataPointsForX(input);
       var dataPoints = generateDataPointsForY(input);
       var ptSize = 5;
       if(input.length>7 && input.length<360){
              ptSize = 2;
       } else if(input.length>360){
              ptSize = 1;
       }
       
       for(var x=0; x<xCoor.length;x++){
              ctx.beginPath();
              ctx.arc(xCoor[x],dataPoints[x],ptSize,0,2*Math.PI);
              ctx.fillStyle = "#000000";
              ctx.fill();
              ctx.stroke();
              if(x==0){
                     
              }else{
                     ctx.beginPath();
                     ctx.moveTo(xCoor[x-1],dataPoints[x-1]);
                     ctx.lineTo(xCoor[x],dataPoints[x]);
                     ctx.stroke();
              }

       }
       maxDataLabel.innerHTML = findMaxForData(input);
       minDataLabel.innerHTML = findMinForData(input);
       
       updateDetailsForData(input);
       
}

function generateDataPointsForY(input){
       
       var range = findMaxForData(input)-findMinForData(input);
       var dataPoints = new Array();
       range+=50;
       var modifier = 350/range;
       console.log(modifier+" | "+range);
       for(var x=0;x<input.length;x++){
              var datapt = (input[x]-findMinForData(input))*modifier;
              datapt = 370-datapt;
              dataPoints.push(datapt);
              //console.log(datapt);
       }
       return dataPoints;
       
}
function generateDataPointsForX(input){
       var xCoor = new Array();
       var coorMod = 350/input.length;
       for(var i=coorMod+25.5;i<351;i+=coorMod){
              xCoor.push(i);
       }
       return xCoor;
}