function changeUrl(){
       var urlInput = document.getElementById('url-input');
       var theFrame = document.getElementById('mp-iframe');
       
       var nUrl = urlInput.value;
       if(nUrl.search('http://') >= 0){
              
       }else if(nUrl.search('file') >= 0){
              
       }else{
              nUrl = "http://"+nUrl;
       }
       
       //alert(nUrl);
       theFrame.setAttribute('src',nUrl);
}