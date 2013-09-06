(function($){
	$(function(){
		var calendar = $('#calendar').calendar({
			language: 'en-GB', 
			events_url:'/event/list?userId='+1234,
			view: 'month',
			tmpl_path: '/tmpls/',
			holidays: {
				'08-03': 'International Women\'s Day',
				'25-12': 'Christmas\'s',
				'01-05': "International labor day"
			},
			first_day: 2,
			onAfterEventsLoad: function(events) {
				if(!events) {
					return;
				}
				var list = $('#eventlist');
				list.html('');

				$.each(events, function(key, val) {
					$(document.createElement('li'))
						.html('<a href="' + val.url + '">' + val.title + '</a>')
						.appendTo(list);
				});
			},
			onAfterViewLoad: function(view) {
				$('.page-header h3').text(this.getTitle());
				$('.btn-group button').removeClass('active');
				$('button[data-calendar-view="' + view + '"]').addClass('active');
			},
			classes: {
				months: {
					general: 'label'
				}
			}
		});

		$('.btn-group button[data-calendar-nav]').each(function() {
			var $this = $(this);
			$this.click(function() {
				calendar.navigate($this.data('calendar-nav'));
			});
		});

		$('.btn-group button[data-calendar-view]').each(function() {
			var $this = $(this);
			$this.click(function() {
				calendar.view($this.data('calendar-view'));
			});
		});

		$('#frmAddEvent').submit(function(e){
			e.preventDefault();

			$.post('/event/add', $(this).serialize(), function(data){
				console.log(data);
			});
			
		});
	});
})(jQuery);


