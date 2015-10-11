'use strict';

// inject the stylesheet that is in the options page
chrome.storage.sync.get('cssremove', function(item) {
  if (item.cssremove) {
    // remove all stylesheets
    Array.prototype
    .slice.call(document.documentElement.querySelectorAll('link'), 0)
    .forEach(function(el) {
      if(el.type && el.type === 'text/css') {
        el.parentNode.removeChild(el);
      }
    });
  }
});

// inject the stylesheet that is in the options page
chrome.storage.sync.get('cssurl', function(item) {
  // dont create empty link elements
  if (item.cssurl !== '') {
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = item.cssurl;
    document.head.appendChild(style);
  }
});
