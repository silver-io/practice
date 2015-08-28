$(document).ready(function() {
	$('#squares').click(function() {
		$('.disappear').fadeOut('fast');
	});
	$('#dots').click(function() {
		$('.yellow, .black').fadeOut('slow');
	});
});