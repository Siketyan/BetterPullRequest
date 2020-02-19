const mask = {
    url: [
        { urlMatches: "https://github.com/" },
    ],
};

function listener() {
    chrome.tabs.executeScript({
        file: 'github.js',
    });
}

chrome.webNavigation.onCompleted.addListener(listener, mask);
chrome.webNavigation.onHistoryStateUpdated.addListener(listener, mask);
