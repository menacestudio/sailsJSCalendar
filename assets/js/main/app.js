(function($){
	$(function(){
		// Set nav active link
		_.each($('.navbar-fixed-top li a'), function(x){
		    if ( window.location.pathname == $(x).attr('href')) {
		        $(x).parent('li').addClass('active')
		    }
		});

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


