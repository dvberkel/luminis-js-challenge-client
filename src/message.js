/*globals jQuery:false, _:false, Backbone:false, Luminis:true*/
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
