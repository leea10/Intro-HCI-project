$(document).ready(function() {
	$("#core-req-toggle").click(function(){
		$("#core-req").slideToggle();
		$("#core-req-toggle span").toggleClass("glyphicon-chevron-up");
		$("#core-req-toggle span").toggleClass("glyphicon-chevron-down");
	});
});