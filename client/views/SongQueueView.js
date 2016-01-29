// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
  
  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.render();
    // this.collection.on('enqueue', this.render, this);
    // this.collection.on('dequeue', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    // this.$el.html('<th>Song Queue</th>')
    this.$el.html('<th>Song Queue</th>').append(
        this.collection.map( function(song){
          return new SongQueueEntryView({ model: song }).render();  // constructor
        })
    );
  }

});
