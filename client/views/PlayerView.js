// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({
  el: '<audio controls autoplay />',

  initialize: function(){
    this.$el.on("ended", (function(){ this.model.ended() }).bind(this) );   // need binding since html5 elem
  },
  setSong: function(song){
    this.model = song;
    !this.model && ( this.el.pause() );
    this.render();
  },
  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '' );
  }

});
