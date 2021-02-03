(function() {
  var documentReady;

  window.startpage = "index.html";

  documentReady = function(func) {
    if (document.readyState === "loading") {
      return window.addEventListener("DOMContentLoaded", func);
    } else {
      return func();
    }
  };

  chrome.storage.sync.get("url", function(items) {
    return documentReady(function() {
      return document.location.href = startpage;
    });
  });

}).call(this);
