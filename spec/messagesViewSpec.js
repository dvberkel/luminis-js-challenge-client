/*global $:false, Luminis:false*/
describe("TimeLineView", function(){
    it("should fill the container", function(){
	var messages = new Luminis.Messages();

	new Luminis.TimeLineView({ model: messages, el: $("#timeline") });

	expect($("#storyjs")).toExist();
    });

    xit("should fill the container with flags", function(){
	var messages = new Luminis.Messages();
	messages.add({ id : 0 });

	new Luminis.TimeLineView({ model: messages, el: $("#timeline") });
	
	expect($(".flag")).toExist();
	expect($(".flag").size()).toBe(1);
    });
});
