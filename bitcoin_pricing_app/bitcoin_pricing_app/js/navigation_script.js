function setupVariables(){
       contentAreaWrap = document.getElementById('content-area-wrapper');
       navItems = document.getElementById('n-bar').getElementsByClassName('nav-item');
       
       
       contentAreaClasses = new Array();
       contentAreaClasses[0] ="ca-wrap slide-one";
       contentAreaClasses[1] ="ca-wrap slide-two";
       contentAreaClasses[2] ="ca-wrap slide-three";
       contentAreaClasses[3] ="ca-wrap slide-four";
       

       
}



function movePage(counter){
       
       console.log(counter);
       
       for (var x=0; x<4;x++){
              navItems[x].setAttribute('class','nav-item');
       }
       
       navItems[counter-1].setAttribute('class','nav-item active');
       contentAreaWrap.setAttribute("class", contentAreaClasses[counter-1]);

}