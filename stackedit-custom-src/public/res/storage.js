// Setup an empty localStorage or upgrade an existing one
define([
    "underscore"
], function(_) {
    if(!chrome){
      chrome = {

      };
    }
    var storage = chrome.storage.local;

    function NStorage() {
        return this;
    }

    NStorage.prototype.getItem = function () {

    };

    NStorage.prototype.key = function () {

    };

    NStorage.prototype.get = function () {

    };

    NStorage.prototype.setItem = function (keyName, keyValue, cb) {
        var obj = {};
        obj[keyName] = keyValue;
        if(cb&&_.isFunction(cb)){
            storage.set(obj, cb);
            this[keyName] = keyValue;
        }else{
            storage.set(obj, function(){
                console.log("[log]setItem -> keyName:%s, keyValue: %s", keyName, keyValue);
            });
            this[keyName] = keyValue;
        }
    };

    NStorage.prototype.removeItem = function (keyName, cb) {
        if(cb&&_.isFunction(cb)){
            storage.remove(keyName, cb);
            delete(this[keyName]);
        }else{
            storage.remove(keyName, function(){
                console.log("[log]removeItem -> keyName:%s", keyName);
            });
            delete(this[keyName]);
        }
    };

    NStorage.prototype.clear = function () {

    };

    var localStorage = new NStorage();

    localStorage.version = 'v23';
    return localStorage;
});
