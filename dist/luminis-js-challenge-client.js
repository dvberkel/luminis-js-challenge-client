/*! luminis-js-challenge-client - v0.0.1 - 2013-04-07
* Copyright (c) 2013 ; Licensed  */
Luminis = (function(){
    "use strict";
    return { version : "0.0.1" };
})();

(function($, _, Backbone, Luminis){
    "use strict";
    var timestampRegex = /\w+\s+(\w{3})\s+(\d{2})\s+(\d{4})\s+(\d{2}):(\d{2}):(\d{2})/;
    var monthIndex = {
        "Jan" : "01", "Feb" : "02", "Mar" : "03", "Apr" : "04", "May" : "05", "Jun" : "06",
        "Jul" : "07", "Aug" : "08", "Sep" : "09", "Oct" : "10", "Nov" : "11", "Dec" : "12"
    };
    
    var MessageModel = Backbone.Model.extend({
        defaults : {
            id : 0,
            timestamp: "Thu Apr 11 2013 18:00:00 GMT+0000 (UTC)",
            sender: "Anonymous",
            content: "Eschew obfuscation.",
            receiver: "?"
        },
        
        startDate : function(){
            var timestamp = this.get("timestamp");
            var result = timestampRegex.exec(timestamp);
            return {
                month : monthIndex[result[1]],
                day : result[2],
                year : result[3],
                hour : result[4],
                minutes : result[5],
                seconds : result[6]
            };
        },

        endDate : function(){
            var result = this.startDate();
            result.minutes = result.minutes + 1;
            return result;
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
    "use strict";

    var template = _.template("<%= year %>,<%= month %>,<%= day %>,<%= hour %>,<%= minutes %>");

    var TimeLineView = Backbone.View.extend({
        initialize : function(){
            this.model.on("add", this.render, this);
            this.render();
        },

        render : function(){
            this.$el.empty();
            createStoryJS({
                type:       'timeline',
                width:      this.options.width || 800,
                height:     this.options.height || 600,
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
                    date: this.dates()
                }
            };
        },

        dates : function(){
            var dates = [
                {
                    startDate: "2013,04,11,18,00",
                    endDate: "2013,04,11,18,01",
                    headline: "Challenge Finale Start",
                    text: "Start your engines!"
                },
                {
                    startDate: "2013,04,11,22,00",
                    endDate: "2013,04,11,22,01",
                    headline: "Challenge Finale End",
                    text: "Time to wrap up!"
                }
            ];
            this.model.each(function(message){ 
                dates.push(
                    {
                        startDate: template(message.model.startDate()),
                        endDate: template(message.model.endDate()),
                        headline: message.get("sender"),
                        text: message.get("content")
                    }
                );
            });
            return dates;
        }
    });

    Luminis.TimeLineView = TimeLineView;
})(jQuery, _, Backbone, Luminis);
