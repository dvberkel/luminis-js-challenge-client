/*globals _:false, Luminis:true*/
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