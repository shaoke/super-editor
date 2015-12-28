chrome.app.runtime.onLaunched.addListener(function(){
    chrome.app.window.create("editor.html", {
        id: 'SuperMarkdown',
        bounds: {
            width: 800,
            height: 600,
            left: 100,
            top: 100
        },
        minWidth: 800,
        minHeight: 600
    });

});

chrome.runtime.onSuspend.addListener(function(){

});
