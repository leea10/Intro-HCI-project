$(document).ready(function(){
	$('.draggable-class').draggable({
		containment: 'body',
		cursor: 'move',
		scroll: false,
		stack: '.draggable-class',
		revert: 'invalid',
		helper: 'clone',
		appendTo: 'body',
		opacity: 0.8
	});
});