/*global $:false, Luminis:false*/
describe("TimeLineView", function(){
    it("should fill the container", function(){
	var messages = new Luminis.Messages();

	new Luminis.TimeLineView({ model: messages, el: $("#timeline") });

	expect($("#storyjs")).toExist();
    });
});