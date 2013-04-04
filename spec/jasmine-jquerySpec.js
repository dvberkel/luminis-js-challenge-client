/*globals $:false*/
describe("jasmine-jquery", function(){
    it("should see 'body'", function(){
	expect($("body")).toExist();
    });
});