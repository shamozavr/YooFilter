let workingShop = document.getElementById('working');
let closedShop = document.getElementById('closed');
let testShop = document.getElementById('test');
let onserviceShop = document.getElementById('onservice');
let onboardingShop = document.getElementById('onboarding');

//on init update the UI checkbox based on storage
chrome.storage.sync.get('showWorkingShop', function (data) {
  workingShop.checked = data.showWorkingShop;
});
chrome.storage.sync.get('showClosedShop', function (data) {
  closedShop.checked = data.showClosedShop;
});
chrome.storage.sync.get('showTestShop', function (data) {
  testShop.checked = data.showTestShop;
});
chrome.storage.sync.get('showOnserviceShop', function (data) {
  onserviceShop.checked = data.showOnserviceShop;
});
chrome.storage.sync.get('showOnboardingShop', function (data) {
  onboardingShop.checked = data.showOnboardingShop;
});

workingShop.onchange = function (element) {
  let value = this.checked;

  //update the extension storage value
  chrome.storage.sync.set({ 'showWorkingShop': value }, function () {
    console.log('The value is' + value);
  });

  //Pass init or remove message to content script 
  if (value) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: "workingShopInit", showWorkingShop: value }, function (response) {
      });
    });
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: "workingShopRemove", showWorkingShop: value }, function (response) {
      });
    });
  }
};

closedShop.onchange = function (element) {
  let value = this.checked;

  //update the extension storage value
  chrome.storage.sync.set({ 'showClosedShop': value }, function () {
    console.log('The value is' + value);
  });

  //Pass init or remove message to content script 
  if (value) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: "closedShopInit", showClosedShop: value }, function (response) {
      });
    });
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: "closedShopRemove", showClosedShop: value }, function (response) {
      });
    });
  }
};

testShop.onchange = function (element) {
  let value = this.checked;

  //update the extension storage value
  chrome.storage.sync.set({ 'showTestShop': value }, function () {
    console.log('The value is' + value);
  });

  //Pass init or remove message to content script 
  if (value) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: "testShopInit", showTestShop: value }, function (response) {
      });
    });
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: "testShopRemove", showTestShop: value }, function (response) {
      });
    });
  }
};

onserviceShop.onchange = function (element) {
  let value = this.checked;

  //update the extension storage value
  chrome.storage.sync.set({ 'showOnserviceShop': value }, function () {
    console.log('The value is' + value);
  });

  //Pass init or remove message to content script 
  if (value) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: "onserviceShopInit", showOnserviceShop: value }, function (response) {
      });
    });
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: "onserviceShopRemove", showOnserviceShop: value }, function (response) {
      });
    });
  }
};

onboardingShop.onchange = function (element) {
  let value = this.checked;

  //update the extension storage value
  chrome.storage.sync.set({ 'showOnboardingShop': value }, function () {
    console.log('The value is' + value);
  });

  //Pass init or remove message to content script 
  if (value) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: "onboardingShopInit", showOnboardingShop: value }, function (response) {
      });
    });
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { command: "onboardingShopRemove", showOnboardingShop: value }, function (response) {
      });
    });
  }
};

