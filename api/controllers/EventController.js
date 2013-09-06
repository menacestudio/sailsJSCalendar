/*---------------------
	:: Event
	-> controller
---------------------*/
var EventController = {
    calendar: function(req, res){
    	res.view();
    },
    list: function(req, res){
    	var userId = req.param('userId'),
    		from = req.param('from'),
    		to = req.param('to');
		Event.findAll({
			 	userId: userId,
			start: { '>=': from },
			end: { '<=': to }
			
		}).done(function(err, events){
			var eventsArr = [];
			_.each(events, function(m){
				eventsArr.push(m.values);
			});
			if (err){
				res.send({success: 0, error: err});
			} else {
		    	res.send({
				    success: 1,
				    result: eventsArr
				});				
			}
		});
    },
    add: function(req, res){
    	Event.create({
    		userId: req.param('userId'),
			title: req.param('title'),
		  	startDate: req.param('startDate'),
		  	endDate: req.param('endDate'),
		  	start: new Date(req.param('startDate')).getTime(),
	   		end: new Date(req.param('endDate')).getTime(),
		  	url: '',
		  	class: req.param('class')
		}).done(function(err, model) {
		  if (err) {
		    res.send({error: err});
		  }else {
		    res.send({id: model.values.id});
		  }
		});
    }


};
module.exports = EventController;