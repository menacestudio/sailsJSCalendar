(function($){
	$(function(){
		var $eventModal = $('#addEventModel');
		$('#addEvent').on('click', function(e){
			e.preventDefault();
			App.Utils.Modal.Open($eventModal);
		});

		// Add event
		$('#frmAddEvent').submit(function(e){
			e.preventDefault();

			$.post('/event/add', $(this).serialize(), function(data){
				App.Utils.Plugins.Calendar.refresh();
				App.Utils.Modal.Close($eventModal);

				// Todo: wipe out form.
			});
		});
	});
})(jQuery);


