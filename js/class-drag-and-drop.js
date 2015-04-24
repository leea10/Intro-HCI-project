$(document).ready(function(){

	var dropped = false;
	$('.draggable-class').draggable({
		appendTo: 'body',
		containment: 'body',
		cursor: 'move',
		helper: 'clone',
		opacity: 0.8,
		revert: 'invalid',
		stack: '.draggable-class',

		// takes care of the "ghost" underneath the draggable class
		start: function(event, ui) {
			dropped = false;
			$(this).addClass("ghost", {
				duration: 'normal'
			});
		},
		stop: function(event, ui) {
			if(dropped == false) {
				$(this).removeClass("ghost", {
					duration: 'normal'
				});
			}
		}
	});
});