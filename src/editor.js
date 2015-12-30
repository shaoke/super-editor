console.log("load editor.js");
// Use ?debug to serve original JavaScript files instead of minified
window.baseDir = 'stackedit';
if (!/(\?|&)debug($|&)/.test(location.search)) {
    window.baseDir += '-min';
}
window.require = {
    baseUrl: window.baseDir,
    deps: ['main']
};

// overwrite alert function, because chrome package app doesn't support
window.alert = alert = function(msg){
    console.log(msg);
};
// overwrite confirm function, because chrome package app doesn't support
window.confirm = confirm = function(msg){
    console.log(msg);
};

//var storage = chrome.storage.local;
//
//function NStorage(){
//    return this;
//}
//
//NStorage.prototype.getItem = function(){
//
//};
//
//NStorage.prototype.key = function(){
//
//};
//
//NStorage.prototype.get = function(){
//
//};
//
//NStorage.prototype.setItem = function(){
//
//};
//
//NStorage.prototype.removeItem = function(str){
//
//};
//
//NStorage.prototype.clear = function(){
//
//};
//
//// Use
//window.localStorage = localStorage = new NStorage();