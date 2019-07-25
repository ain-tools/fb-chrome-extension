chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.tabs.executeScript( tabId, {file: 'contentScript.js'}, function(result) {
    } );     
});