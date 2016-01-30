// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  	//keeps track of songs
    console.log("here is songqueue")
    console.dir(this);
    this.on('enqueue', function(song){
      //if it was first song then play
      console.log('enqueueing');
      console.dir(this);
      //regardless, add to songs
      this.add(song);
    },this);
  	//plays first song when it is the only song

  	this.on('ended', this.ended, this);
  },

  playFirst: function() {
    var song = this.at(0);
    song.play();
  },

  ended: function() {
  	var song = this.shift();
  	if (this.at(0)) {
  		this.playFirst();
  	}
  }

});