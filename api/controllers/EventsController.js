/*---------------------
	:: Events 
	-> controller
---------------------*/
var EventsController = {
    calendar: function(req, res){
    	res.view();
    },
    list: function(req, res){
    	res.send({
		    success: 1,
		    result: [
		        {
		            "id": 1,
		            "title": "Dennis\' birthday",
		            "url": "http://dennisrongo.com",
		            "class": "event-important",
		            "start": new Date('12/20/2013').getTime(), // Milliseconds
		            "end": new Date('12/21/2013').getTime() // Milliseconds
		        },
		        {
		            "id": 2,
		            "title": "SEIS Conference",
		            "url": "http://seis.org",
		            "class": "event-important",
		            "start": new Date('10/03/2013').getTime(), // Milliseconds
		            "end": new Date('10/04/2013').getTime() // Milliseconds
		        }
		    ]
		});
    }


};
module.exports = EventsController;