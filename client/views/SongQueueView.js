// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
  	this.render();
    // console.log(this.collection);
  	this.collection.on('add', function(){
      this.render();
  	}, this);

  	this.collection.on('ended', function(){
      this.render();
  	}, this);

  	this.collection.on('dequeue', function(){
      this.render();
  	}, this);

  	this.collection.on('remove', function(){
      this.render();
  	}, this);


  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>');

    //check if collection is empty, if not do below
	if(this.collection.length>0){
      this.$el.append(
        this.collection.map(function(song) {
          return new SongQueueEntryView({model: song}).render();
        })
      );
    }
  }

});
