$(document).ready(function(){
	var lastItem = $("#menu ul li:nth-child(1)");

	$("#menu ul li").mouseover(function() {
		lastItem.fadeOut().fadeIn().show().attr('class', 'light-blue');
		$(this).fadeOut().fadeIn().show().attr('class', 'dark-blue');
		lastItem = $(this);
	});
});