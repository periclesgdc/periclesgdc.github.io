$(document).ready(function(){
	var lastItem = $("#menu ul li:nth-child(1)");

	$("#menu ul li").mouseover(function() {
<<<<<<< HEAD
		lastItem.fadeOut().fadeIn().show().attr('class', 'light-blue');
		$(this).fadeOut().fadeIn().show().attr('class', 'dark-blue');
		lastItem = $(this);
	});
});
=======
		lastItem.fadeOut(300, 'swing', lastItem.attr('class', 'light-blue')).fadeIn();
		$(this).fadeOut(300, 'swing', $(this).attr('class', 'dark-blue')).fadeIn();
		lastItem = $(this);
	});

	callAjax();
});

function callAjax(page) {
	/*$.ajax({
    type: 'POST',
    url: page+'.html',               
    cache: false,
    success: function(result) {
        if(result){
            $("content").html(result);
        } 
        else {
            alert("Erro");
        }
    }
});*/
	$('#content').load('_hobbies.html', alert("deu"));
}
>>>>>>> 9d0fe90edc9e3ad9901f654aa5e35ac9b9069647
