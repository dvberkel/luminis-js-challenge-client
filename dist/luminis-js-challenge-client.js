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
(function(_, Luminis){
    var parametersFrom = function(url) {
        return (url || "").split("?")[1] || "";
    };

    var keyValuesFrom = function(parameters) {
        return parameters.split("&");
    };

    var createCacheFrom = function(url) {
        var cache = {};
        _.each(keyValuesFrom(parametersFrom(url)), function(keyvalue){
            var pair = keyvalue.split("=");
            cache[pair[0]] = pair[1];
        });
        return cache;
    };

    var Extractor = function(url) {
        var cache = createCacheFrom(url);
        this.get = function(key) {
            return cache[key];
        };
    };

    var extractorFactory = function(url) {
        return new Extractor(url);
    };

    Luminis.from = extractorFactory;
})(_, Luminis);
(function($, _, Backbone, Luminis){
    var TimeLineView = Backbone.View.extend({
        initialize : function(){
            this.render();
        },

        render : function(){
            createStoryJS({
                type:       'timeline',
                width:      '800',
                height:     '600',
                source:     this.timelineSource(),
                embed_id:   this.el.id
            });
        },

        timelineSource : function(){
            return {
                timeline : {
                    headline: "JavaScript Challenge",
                    type: "default",
                    text: "Sort out your semi-colons",
                    date: [
                        {
                            startDate: "2013,04,11",
                            endDate: "2013,04,12",
                            headline: "Walter",
                            text: "Are you getting this?"
                        }
                    ]
                }
            };
        }
    });

    Luminis.TimeLineView = TimeLineView;
})(jQuery, _, Backbone, Luminis);