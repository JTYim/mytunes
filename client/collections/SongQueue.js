// SongQueue.js - Defines a backbone collection class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.trigger('enqueue', this)
    this.on('enqueue', function(x){
      this.play();  
    }),
    this.on('dequeue', function(x){
      this.play();  
    })
  },
  playFirst: function(x){
    this.at(x).play();
  },


});