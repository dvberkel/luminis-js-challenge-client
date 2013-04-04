/*! luminis-js-challenge-client - v0.0.0 - 2013-04-04
* Copyright (c) 2013 ; Licensed  */
Luminis = (function(){
    "use strict";
    return { version : "0.0.0" };
})();
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