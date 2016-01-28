// SongQueue.js - Defines a backbone collection class for the song queue.
var SongQueue = Songs.extend({

	initialize: function(){
		this.trigger('enqueue', this)
	},

});