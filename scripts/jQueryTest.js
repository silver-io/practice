$(document).ready(function() {
    $("#square1" ).fadeOut(2000);
});

$(document).ready(function() {
    $("#square2" ).fadeOut(1000);
});
$(document).ready(function() {
	$('button').mouseenter(function(){
		$('button').fadeTo('fast', 1);
	});
	$('button').mouseleave(function(){
		$('button').fadeTo('slow', 0.8);
	});
});
