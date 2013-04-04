/*global jQuery:false, _:false, Luminis:false*/
(function($, _, Luminis){
    $(function(){
	var server = Luminis.from(document.URL).get("server") || "http://luminisjschallenge.herokuapp.com";
	console.log(server);

	var messages = new Luminis.Messages();
	$.getJSON(server, function(data){
	    _.each(data, function(user){
		console.log(user);
		$.getJSON(server + '/' + user.name, function(userMessages){
		    _.each(userMessages, function(message){
			message.reciever = user.name;
			console.log(message);
			messages.add(message);
		    });
		});
	    })
	});

	new Luminis.TimeLineView({ model : messages, el: $("#container") });
    });
})(jQuery, _, Luminis);