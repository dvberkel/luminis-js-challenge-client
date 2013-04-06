/*global jQuery:false, _:false, Luminis:false*/
(function($, _, Luminis){
    "use strict";
    $(function(){
	var server = Luminis.from(document.URL).get("server") || "http://luminisjschallenge.herokuapp.com";

	var messages = new Luminis.Messages();
	new Luminis.TimeLineView({ model : messages, el: $("#container") });

	$.getJSON(server, function(data){
	    _.each(data, function(user){
		$.getJSON(server + '/' + user.name, function(userMessages){
		    _.each(userMessages, function(message){
			message.receiver = user.name;
			messages.add(message);
		    });
		});
	    });
	});

    });
})(jQuery, _, Luminis);
