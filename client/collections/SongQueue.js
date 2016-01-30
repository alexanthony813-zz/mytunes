// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  	//keeps track of songs


    this.on('add', this.addSong, this);
  	this.on('ended', this.ended, this);
  	this.on('dequeue', this.remove, this);
  	this.on('remove', function() {
  		if (this.first()) {
  			this.playFirst();
  		}
  	}, this);

  },

  playFirst: function() {
    var song = this.first();
    song.play();
  },

  ended: function() {
  	this.shift();
  	if (this.length>0) {
       console.log(this);
  		this.playFirst();
  	}
  },

  addSong: function(){
    //console.log('adding in SongQueue');
    if (this.length===1) {
  	  this.playFirst();
  	}
  }
});