/*globals jQuery:false, _:false, Backbone:false, Luminis:true, createStoryJS: false*/
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