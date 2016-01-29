// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    /* Third argument is the context => 'play' handler always bound to context we pass in.
    In example, binding it to App. Otherwise, 'this' we use that's actually in function ( this.set('currentSong', song) ) would 
    refer to the window. (typical w/all JS events). Handlers end up getting called from the window unless we override it */
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);

  }

});
