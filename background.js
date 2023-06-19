chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
if (request.action === 'translate') {
    chrome.tabs.executeScripts({file: 'content.js'})
}
})