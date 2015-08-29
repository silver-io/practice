$(document).ready(function() {
	$('#squares').click(function() {
		$('.disappear').fadeOut('fast');
	});
	$('#dots').click(function() {
		$('.yellow, .black').fadeOut('slow');
	});
	$('.blue').click(function() {
		$(this).animate ( {
			down: '250px',
            height: '150px',
            width: '150px'
		});		

	});
});