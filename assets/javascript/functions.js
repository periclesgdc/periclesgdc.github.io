$(document).ready(function(){
	var lastItem = $("#menu ul li:first-child");

	$('#menu ul li').click(function() {
		if ($(this).attr('class') != 'dark-blue') {
			lastItem.fadeOut(200, 'swing', lastItem.attr('class', 'light-blue')).fadeIn();
		}
		$(this).fadeOut(200, 'swing', $(this).attr('class', 'dark-blue')).fadeIn();
		lastItem = $(this);
	});

});

function updateContent(index){
	$('.visible').attr('class', 'hidden').removeAttr('style');
	$('#content div:nth-child('+index+')').fadeIn(200, 'swing').attr('class', 'visible');
	
}