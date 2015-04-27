$(document).ready(function(){

	var dropped = false;

	// a really long and gross options hash for making sidebar classes draggable
	var sidebar_draggable_options = {
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
	};

	$('.draggable-class').draggable(sidebar_draggable_options);

	// make the semester table accept draggable classes
	$('.semester').droppable({
		accept: '.draggable-class',
		drop: function(event, ui) {
			dropped = true;
			$.ui.ddmanager.current.cancelHelperRemoval = true;
			
			$(this).find('.semester-classes').append(ui.helper);
			$('.helper-clone').css('position', 'static');

			// make this clone draggable again
			$('.helper-clone').draggable({
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
						$(this).remove();
					}
					$('.helper-clone').removeClass('helper-clone');
				}
			})
		},
		hoverClass: 'hovered-valid'
	});

	// make the sidebar accept draggable classes coming from the semester table only
	$('#sidebar').droppable({
		accept: '#main .draggable-class',
		drop: function(event, ui) {
			dropped = true;

			// reactivate the appropriate sidebar class
			var correct_class = '#sidebar .draggable-class[data-course="' + $(ui.helper).data("course") + '"]';
			$(correct_class).removeClass('ghost', {
				duration: 'normal'
			}).draggable('enable');
		},
		hoverClass: 'sidebar-hovered'
	});

	// if a class "ghost" is clicked in the sidebar, indicate where it is on the semester table
	$('#sidebar .draggable-class').mousedown(function(){
		var correct_class = '#main .draggable-class[data-course="' + $(this).data("course") + '"]';
		$(correct_class).effect("highlight", {}, 1000);
	});
});