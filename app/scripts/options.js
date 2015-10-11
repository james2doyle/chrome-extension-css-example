'use strict';

// Saves options to chrome.storage only after there is a delay in the input
function save(e) {
  clearTimeout(window.delayer);
  window.delayer = setTimeout(function() {
    var item = {};
    // checkboxes store the checked state
    if (e.target.type === 'checkbox') {
      item[e.target.id] = e.target.checked;
    } else {
      item[e.target.id] = e.target.value.trim();
    }
    chrome.storage.sync.set(item, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.innerText = 'Options saved.';
      setTimeout(function() {
        status.innerText = '';
      }, 1500);
    });
  }, 750);
}

// Restores states stored in chrome.storage
function restore() {
  // here we can set defaults
  chrome.storage.sync.get({
    cssurl: '',
    cssremove: true
  }, function(items) {
    // we are looping through the different settings are assigning the value to the right elements
    for (var item in items) {
      // handle checkboxes
      if (typeof(items[item]) === 'boolean') {
        document.getElementById(item).checked = items[item];
      } else {
        document.getElementById(item).value = items[item];
      }
    }
  });
}

// event listener for the inputs
document.getElementById('cssurl').addEventListener('input', save);
document.getElementById('cssremove').addEventListener('change', save);

// load default settings when page is ready
document.addEventListener('DOMContentLoaded', restore);