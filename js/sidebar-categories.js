$(document).ready(function() {
	$("#core-req").slideToggle(); // core requirements start off visible

	$("#core-req-toggle").click(function(){
		$("#core-req").slideToggle();
		$("#core-req-toggle span").toggleClass("glyphicon-chevron-up");
		$("#core-req-toggle span").toggleClass("glyphicon-chevron-down");
	});

	$("#math-req-toggle").click(function(){
		$("#math-req").slideToggle();
		$("#math-req-toggle span").toggleClass("glyphicon-chevron-up");
		$("#math-req-toggle span").toggleClass("glyphicon-chevron-down");
	});

	$("#sci-req-toggle").click(function(){
		$("#sci-req").slideToggle();
		$("#sci-req-toggle span").toggleClass("glyphicon-chevron-up");
		$("#sci-req-toggle span").toggleClass("glyphicon-chevron-down");
	});

	$("#cs-req-toggle").click(function(){
		$("#cs-req").slideToggle();
		$("#cs-req-toggle span").toggleClass("glyphicon-chevron-up");
		$("#cs-req-toggle span").toggleClass("glyphicon-chevron-down");
	});

	$("#hass-req-toggle").click(function(){
		$("#hass-req").slideToggle();
		$("#hass-req-toggle span").toggleClass("glyphicon-chevron-up");
		$("#hass-req-toggle span").toggleClass("glyphicon-chevron-down");
	});

	$("#free-elec-toggle").click(function(){
		$("#free-elec").slideToggle();
		$("#free-elec-toggle span").toggleClass("glyphicon-chevron-up");
		$("#free-elec-toggle span").toggleClass("glyphicon-chevron-down");
	});
});