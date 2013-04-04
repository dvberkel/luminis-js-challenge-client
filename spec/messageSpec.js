/*globals Luminis:false*/
describe("Message Model", function(){
    it("should exist", function(){
	expect(Luminis.Message).toBeDefined();
    });

    it("should be constructor", function(){
	expect(Luminis.Message instanceof Function).toBeTruthy();
    });

    it("should have sensible defaults", function(){
	var message = new Luminis.Message();

	expect(message.get("id")).toBe(0);
	expect(message.get("timestamp")).toBe("Thu Apr 11 2013 18:00:00 GMT+0000 (UTC)");
	expect(message.get("sender")).toBe("Anonymous");
	expect(message.get("content")).toBe("Eschew obfuscation.");
	expect(message.get("receiver")).toBe("?");
    });
});

describe("Messages", function(){
    it("should exist", function(){
	expect(Luminis.Messages).toBeDefined();
    });

    it("should be constructor", function(){
	expect(Luminis.Messages instanceof Function).toBeTruthy();
    });

    it("should allow to be addition of naked objects", function(){
	var messages = new Luminis.Messages();

	messages.add({ id : 1 });

	expect(messages.length).toBe(1);
	expect(messages.at(0).get("id")).toBe(1);
    });

    it("should sort on id", function(){
	var messages = new Luminis.Messages();

	messages.add({ id : 2 });
	messages.add({ id : 1 });

	expect(messages.length).toBe(2);
	expect(messages.at(0).get("id")).toBe(1);
	expect(messages.at(1).get("id")).toBe(2);
    });

    it("should be able to set receiver", function(){
	var messages = new Luminis.Messages();
	messages.add({ id : 1 });
	
	expect(messages.at(0).get("receiver")).toBe("?");

	messages.setReceiverTo("Walter");

	expect(messages.at(0).get("receiver")).toBe("Walter");
    });
});