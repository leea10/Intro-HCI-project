$(document).ready(function() {
	$('#advanced-options-toggle').click(function() {
		$('#advanced-options').slideToggle();
		$('#advanced-options-toggle span').toggleClass('glyphicon-chevron-down');
		$('#advanced-options-toggle span').toggleClass('glyphicon-chevron-up');
	});
});