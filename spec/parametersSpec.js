/*globals Luminis:false*/
describe("Request parameter parsing", function(){
    it("should extract value from url", function(){
	var from = Luminis.from;

	expect(from("url?key=value").get("key")).toBe("value");
    });

    it("should extract value from url among multiple keys", function(){
	var from = Luminis.from;

	expect(from("url?key=value&other=nonsense").get("key")).toBe("value");
    });

    it("should extract last value from url for identical keys", function(){
	var from = Luminis.from;

	expect(from("url?key=value&key=nonsense").get("key")).toBe("nonsense");
    });

    it("should return undefined when key does not exist in url", function(){
	var from = Luminis.from;

	expect(from("url?key=value").get("not_found")).not.toBeDefined();
    });

    it("should return undefined when url does not have parameters", function(){
	var from = Luminis.from;

	expect(from("url").get("key")).not.toBeDefined();
    });

    it("should return undefined when url does not have parameters", function(){
	var from = Luminis.from;

	expect(from(undefined).get("key")).not.toBeDefined();
    });
});