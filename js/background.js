chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    showWorkingShop: true,
    showClosedShop: true,
    showTestShop: true,
    showOnserviceShop: true,
    showOnboardingShop: true
  }, function () {
    console.log("Shops are shown");
  });
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: 'https://yookassa.ru/my/*' },
    })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

chrome.tabs.onUpdated.addListener(function (tabId, info) {
  if (info.status === 'complete') {
    // your code ...
    console.log('page loaded')
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "PageLoaded"}, function (response) {
        console.log(response)
      });
    });
  }
});
