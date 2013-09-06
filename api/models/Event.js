/*---------------------
	:: Event
	-> model
---------------------*/
module.exports = {
	schema: true,
	attributes: {
		title:  'string',
		url: 'string',
		class: {
			type: 'string',
			defaultsTo: 'event-important'
		},
		startDate: {
		   type: 'datetime',
		   required: true
	   	},
	   	endDate: {
	   		type: 'datetime',
	   		required: true
	   	},
	   	start: 'string',
	   	end: 'string',
   	   	userId: {
	   		type: 'integer',
	   		required: true
	   	},
    	toJSON: function() {
	      var obj = this.toObject();
	      delete obj.startDate;
	      delete obj.endDate;
	      delete obj.createdAt;
	      delete obj.updatedAt;
	      delete obj.values;
	      return obj;
	    }
	}
};
