document.addEventListener('DOMContentLoaded', function() {
    var translateButton = document.getElementById('translateButton');
    translateButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'translate' });
      });
    });
  });
  