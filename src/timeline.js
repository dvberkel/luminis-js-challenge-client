/*globals jQuery:false, _:false, Backbone:false, Luminis:true, createStoryJS: false*/
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
