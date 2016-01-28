// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

	initialize: function(){
		this.trigger('enqueue', this)
	},

	enqueue: function(){
		this.trigger('enqueue', this)				
	}
});