// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function(){
    // http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
