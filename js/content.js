const waitForElm = function (selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

const showWorkingShop = function () {
  const shopsSection = document.querySelector('[data-qa="shop-list"]');
  const allShops = shopsSection.querySelectorAll('[data-qa="shop-list-element"]');
  const blueIconShops = Array.from(allShops).filter((el) => el.querySelector('[data-qa="shop-list-element-icon"]').querySelector('svg').attributes.getNamedItem('color').value === 'brand');
  const workingShops = blueIconShops.filter((el) => !Boolean(el.querySelector('[data-qa="shop-list-element-additional-info"]').querySelector('.MuiBox-root')));
  workingShops.forEach((el) => el.classList.remove('visually-hidden'))
}

const showClosedShops = function () {
  const allShops = document.querySelectorAll('.qa-shop-list-element');
  const shopsWithBadge = Array.from(allShops).filter((el) => Boolean(el.querySelector('.qa-shop-list-element-additional-info').querySelector('.Badge__StyledBadge-sc-as58gy-0')))
  const closedShops = shopsWithBadge.filter((el) => el.querySelector('.qa-shop-list-element-status').children[0].innerHTML.toString().toUpperCase() === 'ЗАКРЫТ')
  closedShops.forEach((el) => el.classList.remove('visually-hidden'))
}

const showTestShop = function () {
  const allShops = document.querySelectorAll('.lkOpBy.qa-shop-list-element');
  const testShops = Array.from(allShops).filter((el) => el.querySelector('.RoundIcon__StyledWrapper-sc-11dm6c-0').classList.contains('EgGIS'))
  testShops.forEach((el) => el.classList.remove('visually-hidden'))
}

const showOnserviceShop = function () {
  const allShops = document.querySelectorAll('.qa-shop-list-element');
  const shopsWithBadge = Array.from(allShops).filter((el) => Boolean(el.querySelector('.qa-shop-list-element-additional-info').querySelector('.Badge__StyledBadge-sc-as58gy-0')))
  const onServiceShops = shopsWithBadge.filter((el) => el.querySelector('.qa-shop-list-element-status').children[0].innerHTML.toString().toUpperCase() === 'ВРЕМЕННО НЕ&NBSP;РАБОТАЕТ')
  onServiceShops.forEach((el) => el.classList.remove('visually-hidden'))
}

const showOnboardingShop = function () {
  const allShops = document.querySelectorAll('.qa-shop-list-element');
  const shopsWithBadge = Array.from(allShops).filter((el) => Boolean(el.querySelector('.qa-shop-list-element-additional-info').querySelector('.Badge__StyledBadge-sc-as58gy-0')))
  const onBoardingShops = shopsWithBadge.filter((el) => el.querySelector('.qa-shop-list-element-status').children[0].innerHTML.toString().toUpperCase() === 'ПОДКЛЮЧАЕТСЯ')
  onBoardingShops.forEach((el) => el.classList.remove('visually-hidden'))
}

const hideWorkingShop = function () {
  const shopsSection = document.querySelector('[data-qa="shop-list"]');
  const allShops = shopsSection.querySelectorAll('[data-qa="shop-list-element"]');
  const blueIconShops = Array.from(allShops).filter((el) => el.querySelector('[data-qa="shop-list-element-icon"]').querySelector('svg').attributes.getNamedItem('color').value === 'brand');
  const workingShops = blueIconShops.filter((el) => !Boolean(el.querySelector('[data-qa="shop-list-element-additional-info"]').querySelector('.MuiBox-root')));
  workingShops.forEach((el) => el.classList.add('visually-hidden'))
}

const hideClosedShops = function () {
  const allShops = document.querySelectorAll('.qa-shop-list-element');
  const shopsWithBadge = Array.from(allShops).filter((el) => Boolean(el.querySelector('.qa-shop-list-element-additional-info').querySelector('.Badge__StyledBadge-sc-as58gy-0')))
  const closedShops = shopsWithBadge.filter((el) => el.querySelector('.qa-shop-list-element-status').children[0].innerHTML.toString().toUpperCase() === 'ЗАКРЫТ')
  closedShops.forEach((el) => el.classList.add('visually-hidden'))
}

const hideTestShop = function () {
  const allShops = document.querySelectorAll('.lkOpBy.qa-shop-list-element');
  const testShops = Array.from(allShops).filter((el) => el.querySelector('.RoundIcon__StyledWrapper-sc-11dm6c-0').classList.contains('EgGIS'))
  testShops.forEach((el) => el.classList.add('visually-hidden'))
}

const hideOnserviceShop = function () {
  const shopsSection = document.querySelector('[data-qa="shop-list"]');
  const allShops = shopsSection.querySelectorAll('[data-qa="shop-list-element"]');
  const shopsWithBadge = Array.from(allShops).filter((el) => console.log(el))
  console.log(shopsWithBadge);
  onServiceShops.forEach((el) => el.classList.add('visually-hidden'))
}

const hideOnboardingShop = function () {
  const allShops = document.querySelectorAll('.qa-shop-list-element');
  const shopsWithBadge = Array.from(allShops).filter((el) => Boolean(el.querySelector('.qa-shop-list-element-additional-info').querySelector('.Badge__StyledBadge-sc-as58gy-0')))
  const onBoardingShops = shopsWithBadge.filter((el) => el.querySelector('.qa-shop-list-element-status').children[0].innerHTML.toString().toUpperCase() === 'ПОДКЛЮЧАЕТСЯ')
  onBoardingShops.forEach((el) => el.classList.add('visually-hidden'))
}

//message listener for background
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request.command === 'workingShopInit') {
    showWorkingShop()
  }
  if (request.command === 'workingShopRemove') {
    hideWorkingShop()
  }
  sendResponse({ result: "success" });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request.command === 'closedShopInit') {
    showClosedShops()
  }
  if (request.command === 'closedShopRemove') {
    hideClosedShops()
  }
  sendResponse({ result: "success" });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request.command === 'testShopInit') {
    showTestShop()
  }
  if (request.command === 'testShopRemove') {
    hideTestShop()
  }
  sendResponse({ result: "success" });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request.command === 'onserviceShopInit') {
    showOnserviceShop()
  }
  if (request.command === 'onserviceShopRemove') {
    hideOnserviceShop()
  }
  sendResponse({ result: "success" });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request.command === 'onboardingShopInit') {
    showOnboardingShop()
  }
  if (request.command === 'onboardingShopRemove') {
    hideOnboardingShop()
  }
  sendResponse({ result: "success" });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.message === "PageLoaded") {
    console.log("message recieved");

    const head = document.querySelector('head');
    const styleEl = document.createElement('style');
    styleEl.innerHTML = ".visually-hidden {display: none;}";
    head.appendChild(styleEl);

    waitForElm('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.qa-button-open-list-shop.ls-ssonp8').then((elm) => {
      console.log('Element is ready');
      elm.addEventListener('click', () => {

        {
          chrome.storage.sync.get('showWorkingShop', function (data) {
            chrome.storage.sync.get(null, function (Items) { console.log(`showWorkingShop = ${Items.showWorkingShop}`) });
              if (data.showWorkingShop) {
                showWorkingShop()
              } else {
                hideWorkingShop()
              }
          });
        }

        {
          chrome.storage.sync.get('showClosedShops', function (data) {
            chrome.storage.sync.get(null, function (Items) { console.log(`showClosedShops = ${Items.showClosedShops}`) });
              if (data.showClosedShops) {
                showClosedShops();
              } else {
                hideClosedShops();
              }
          });
        }

        {
          chrome.storage.sync.get('showTestShop', function (data) {
            chrome.storage.sync.get(null, function (Items) { console.log(`showTestShop = ${Items.showTestShop}`) });
              if (data.showTestShop) {
                showTestShop()
              } else {
                hideTestShop()
              }
          })
        }

        {
          chrome.storage.sync.get('showOnserviceShop', function (data) {
            chrome.storage.sync.get(null, function (Items) { console.log(`showTestShop = ${Items.showTestShop}`) });
              if (data.showOnserviceShop) {
                showOnserviceShop()
              } else {
                hideOnserviceShop()
              }
          })
        }

        {
          chrome.storage.sync.get('showOnboardingShop', function (data) {
            chrome.storage.sync.get(null, function (Items) { console.log(`showOnboardingShop = ${Items.showOnboardingShop}`) });
              if (data.showOnboardingShop) {
                showOnboardingShop()
              } else {
                hideOnboardingShop()
              }
          })
        }
      })
    });
    console.log('Event Listener Added')
  }
});
