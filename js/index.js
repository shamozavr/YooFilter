'use strict';

document.querySelector('button.close').addEventListener('click', () => {
  window.close();
})

let tabs = document.querySelectorAll('.tabs__tab');

let forms = document.querySelectorAll('.form');

tabs.forEach((el) => {
  el.addEventListener('click', (evt) => {
    console.log(evt.target);
    let index = Array.from(tabs).indexOf(evt.target);
    console.log(index);
    let activeTab = document.querySelector('.tabs__tab--active');
    let targetTab = evt.target;
    targetTab.classList.remove('tabs__tab--inactive');
    targetTab.classList.add('tabs__tab--active');
    activeTab.classList.remove('tabs__tab--active');
    activeTab.classList.add('tabs__tab--inactive');
    activeTab = targetTab;

    // tabs.forEach((el) => {
    //   el.classList.remove('tabs__tab--active');
    //   el.classList.add('tabs__tab--inactive');
    // })
    forms.forEach((el) => {
      if (!el.classList.contains('visually-hidden')) {
        el.classList.add('visually-hidden')
      }
    })
    evt.target.classList.add('tabs__tab--active')
    forms[index].classList.remove('visually-hidden')
  })
})





let bugBtn = document.querySelector('.footer__bug-button');
let reportPopUp = document.querySelector('.report')
let closeReportBtn = document.querySelector('.report__button--close');

bugBtn.addEventListener('click', () => {
  reportPopUp.classList.remove('visually-hidden')
})

closeReportBtn.addEventListener('click', () => {
  reportPopUp.classList.add('visually-hidden')
})


const TELEGRAM_BOT_TOKEN = '7346590662:AAHdb_j3sZXb_2o8pgg5cSF4p2w53jieg7I';
const TELEGRAM_CHAT_ID = '-1002166678773';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

const form = document.querySelector('.report__form');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let textArea = document.querySelector('.report__text');
  let messageText = textArea.value;
  let url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${messageText}`

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send()

  textArea.value = '';
})

// async function sendReportMessage(event) {
//   event.preventDefault()

//   const form = event.target;
//   const reportText = document.querySelector('.report__text');

//   const text = reportText.value;

//   try {
//     console.log('Loading...')
//     const response = await fetch(API, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         chat_if: TELEGRAM_CHAT_ID,
//         text,
//       })
//     });

//     if (response.ok) {
//       console.log('ok')
//       form.reset;
//     } else {
//       throw new Error (response.status);
//     }
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log('отправил')
//   }
// }
