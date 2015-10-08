function onPageLoad(){
	$('.nav-bar').find('.nav-arrow').on('click',function() {
		/* Act on the event */
		handleNavMenu($(this));
	});
}
function handleNavMenu(trgt){
	$('body').find('.inner-wrap').toggleClass('nav-active');
	//trgt.toggleClass('active');
}