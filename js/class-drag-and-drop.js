$(document).ready(function(){

	var dropped = false;
	$('.draggable-class').draggable({
		addClass: false,
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
			$(ui.helper).addClass('helper-clone');
		},
		stop: function(event, ui) {
			if(dropped == false) {
				$(this).removeClass("ghost", {
					duration: 'normal'
				});
			}
			else {
				$(this).draggable("disable");
			}
			$('.helper-clone').removeClass('helper-clone');
		}
	});

	$('.semester').droppable({
		accept: '.draggable-class',
		drop: function(event, ui) {
			dropped = true;
			$.ui.ddmanager.current.cancelHelperRemoval = true;
			
			$(this).find('.semester-classes').append(ui.helper);
			$('.helper-clone').css('position', 'static');
		},
		hoverClass: 'hovered-valid'
	});
});