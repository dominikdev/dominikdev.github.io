function openSkillDetails(theNum){

       var theSkills = document.getElementsByClassName("skill-item-wrapper");
       for(var i=0; i<theSkills.length;i++){
              theSkills[i].setAttribute('class','skill-item-wrapper');
       }
       theSkills[theNum].setAttribute('class','skill-item-wrapper open');

}