document.addEventListener('DOMContentLoaded', function() {
  var $body = document.querySelector('body');

  chrome.storage.sync.get(['status'], function(result) {
    if (result.status == 'on') {
      $body.classList.add('darkdocs');
    }
  });

  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.command == 'on') {
      $body.classList.add('darkdocs');
    } else {
      $body.classList.remove('darkdocs');
    }
  });

  document.querySelector('#fontSizeSelect.docs-font-size-inc-dec-combobox').setAttribute("style", "user-select: none; border-color: #555 !important;");
  document.querySelector('#fontSizeIncrement.docs-font-size-inc-dec-action-button').setAttribute("style", "user-select: none; border-color: #555 !important;");
  document.querySelector('#fontSizeDecrement.docs-font-size-inc-dec-action-button').setAttribute("style", "user-select: none; border-color: #555 !important;");

  let menuBarTextInputs = document.getElementsByClassName('goog-toolbar-combo-button-input');
  for (iter=0; iter < menuBarTextInputs.length; iter++) {
    menuBarTextInputs[iter].setAttribute("style", "color: #bbb !important;");
  }
});