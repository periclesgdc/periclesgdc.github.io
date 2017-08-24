$(document).ready(function(){
	var lastItem = $('#menu ul li:nth-child(1)');

	$('#menu ul li').mouseover(function() {
		lastItem.fadeOut(300, 'swing', lastItem.attr('class', 'light-blue')).fadeIn();
		$(this).fadeOut(300, 'swing', $(this).attr('class', 'dark-blue')).fadeIn();
		lastItem = $(this);
	});

});

function updateContent(index){
	$('.visible').fadeOut().attr('class', 'hidden')
	$('#content div:nth-child('+index+')').removeAttr('class').fadeIn().attr('class', 'visible');
}