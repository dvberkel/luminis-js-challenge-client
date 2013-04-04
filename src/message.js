/*globals jQuery:false, _:false, Backbone:false, Luminis:true*/
(function($, _, Backbone, Luminis){
    "use strict";
    var MessageModel = Backbone.Model.extend({
        defaults : {
            id : 0,
            timestamp: "Thu Apr 11 2013 18:00:00 GMT+0000 (UTC)",
            sender: "Anonymous",
            content: "Eschew obfuscation.",
            receiver: "?"
        }
    });

    var MessageCollection = Backbone.Collection.extend({
        model : MessageModel,
        comparator : function(message){ return message.get("id"); },

        setReceiverTo : function(receiver) {
            this.each(function(message){
                message.set("receiver", receiver);
            });
        }
    });

    Luminis.Message = MessageModel;
    Luminis.Messages = MessageCollection;
})(jQuery, _, Backbone, Luminis);