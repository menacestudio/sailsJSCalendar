(function($){
	$(function(){
		var $eventModal = $('#addEventModel');
		$('#addEvent').on('click', function(e){
			e.preventDefault();

			$eventModal.modal({ show: true});
		});

		// Add event
		$('#frmAddEvent').submit(function(e){
			e.preventDefault();

			$.post('/event/add', $(this).serialize(), function(data){
				$eventModal.modal('hide');

				// Todo: refresh calendar and events
				
				// Todo: wipe out form.
			});
		});
	});
})(jQuery);


