function pageLoaded()
{

  //var projItems = document.getElementsByClassName('proj-item');
  //for(var i=0;i<projItems.length;i++){
  //		projItems[i].setAttribute('onresize', 'lineUpHeights();');
  //	}
  //document.getElementsByTagName('body')
  //lineUpHeights();
}

function lineUpHeights()
{
  var projItems = document.getElementsByClassName('proj-item');
  for (var i = 0; i < projItems.length - 1; i += 2)
  {
    console.log(i);
    if (projItems[i].clientHeight != projItems[i + 1].clientHeight)
    {
      projItems[i].style.height = projItems[i + 1].clientHeight;
    }

  }
}