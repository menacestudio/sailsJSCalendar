(function($, Backbone){
	$(function(){
        window.App =
        {
            Models: {},
            Collections: {},
            Views: {},
            Utils: {
                Modal: {},
                Debug: {}
            },
            El: {},
            vent: _.extend({}, Backbone.Events)
        };
        var self = window.App;
		App.UserId = $('#userId').val() || 0;

        /** Modal, alerts and confirmation box */
        App.Utils = {
			Alert : function (msg) {
            	bootbox.alert(msg);
        	},
			Confirm : function (msg, confirmText, clickCallback, cancelCallback) {
	            confirmText = confirmText || 'Confirm';
	            cancelCallback = cancelCallback || function () { $(this).dialog('close'); };
	            bootbox.dialog(msg, [
	                { 'label': 'Cancel', 'class': '', 'callback': cancelCallback },
	                { 'label': confirmText, 'class': 'btn-danger', 'callback': clickCallback }
	            ]);
        	}, 
        	Notify: function(msg, cls){
        		cls = cls || 'alert-success';
        		var $message = $('<h5 class="alert '+cls+'">'+msg+'</h5>');
        		$('.notifications').html($message);

    			_.delay(function(){
    				$message.fadeOut(1000);
    			}, 5000)
        	}
        };

        App.Utils.Modal = {
			Open : function (el) {
            	return $(el).modal('show');
        	},
			Close : function (el) {
            	return $(el).modal('hide');
        	}
        };

        /** Initialize datepickers */
		$('.date').datepicker();

		/** Plugins */
		App.Utils.Plugins = {
			Calendar: {
				init: function(el){	
					return el.calendar({
						language: 'en-GB', 
						events_url:'/event/list?userId='+App.UserId,
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
							$('.page-header h3.event-header').text(this.getTitle());
							$('.btn-group button').removeClass('active');
							$('button[data-calendar-view="' + view + '"]').addClass('active');
						},
						classes: {
							months: {
								general: 'label'
							}
						}
					});			
				},
				refresh: function(){
					this.init($('#calendar'));
				}
			}
		}

		/** Initialize calendar */
		App.El.Calendar = App.Utils.Plugins.Calendar.init($('#calendar'));

		$('.btn-group button[data-calendar-nav]').each(function() {
			var $this = $(this);
			$this.click(function() {
				App.El.Calendar.navigate($this.data('calendar-nav'));
			});
		});

		$('.btn-group button[data-calendar-view]').each(function() {
			var $this = $(this);
			$this.click(function() {
				App.El.Calendar.view($this.data('calendar-view'));
			});
		});

        /** Underscore mixins */
 		_.mixin({});

 		/** Backbone views extensions */
		_.extend(Backbone.View.prototype, App.Utils.Plugins); 
	});
})(jQuery, Backbone);
