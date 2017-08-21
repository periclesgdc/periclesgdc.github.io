$(document).ready(function(){
	var lastItem = $("#menu ul li:nth-child(1)");

	$("#menu ul li").mouseover(function() {
		lastItem.fadeOut(300, 'swing', lastItem.attr('class', 'light-blue')).fadeIn();
		$(this).fadeOut(300, 'swing', $(this).attr('class', 'dark-blue')).fadeIn();
		lastItem = $(this);
	});
});

function callAjax(page) {
	$.ajax({
    type: 'POST',
    url: ''+page+'.html',               
    cache: false,
    success: function(result) {
        if(result){
            $("content").html(result);
        } 
        else {
            alert("Erro");
        }
    }
});
}